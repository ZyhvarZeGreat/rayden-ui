"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

const splitConfig = {
  lines: { duration: 0.8, stagger: 0.08 },
  words: { duration: 0.6, stagger: 0.06 },
  chars: { duration: 0.4, stagger: 0.01 },
} as const;

export function initMaskTextScrollReveal() {
  if (typeof window === "undefined") return;

  document
    .querySelectorAll<HTMLElement>('[data-split="heading"]')
    .forEach((heading) => {
      const type =
        (heading.dataset.splitReveal as keyof typeof splitConfig) || "lines";

      const typesToSplit =
        type === "lines"
          ? ["lines"]
          : type === "words"
          ? ["lines", "words"]
          : ["lines", "words", "chars"];

      // Prevent FOUC
      gsap.set(heading, { autoAlpha: 1 });

      try {
        SplitText.create(heading, {
          type: typesToSplit.join(", "),
          mask: "lines",
          autoSplit: true,
          onSplit(instance: any) {
            const targets = instance[type] as HTMLElement[];
            const cfg = splitConfig[type];

            const immediate = heading.dataset.splitImmediate === "true";

            // Hero / explicitly marked headings: play immediately, slightly slower
            if (immediate) {
              return gsap.from(targets, {
                yPercent: 110,
                duration: cfg.duration + 0.3,
                stagger: cfg.stagger * 1.5,
                ease: "expo.out",
              });
            }

            // Below fold: scroll-triggered reveal
            return gsap.from(targets, {
              yPercent: 110,
              duration: cfg.duration,
              stagger: cfg.stagger,
              ease: "expo.out",
              scrollTrigger: {
                trigger: heading,
                start: "clamp(top 75%)",
                once: true,
              },
            });
          },
        });
      } catch {
        // Fallback: ensure heading is just visible without animation
        gsap.set(heading, { clearProps: "all", autoAlpha: 1 });
      }
    });
}


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

      // Prevent `[data-split="heading"] { visibility: hidden; }` from keeping text invisible
      // if the ScrollTrigger doesn't fire immediately.
      gsap.set(heading, { visibility: "visible", autoAlpha: 1 });

      try {
        SplitText.create(heading, {
          type: typesToSplit.join(", "),
          mask: "lines",
          autoSplit: true,
          linesClass: "line",
          wordsClass: "word",
          charsClass: "letter",
          onSplit(instance: any) {
            const targets = instance[type] as HTMLElement[];
            const cfg = splitConfig[type];

            return gsap.from(targets, {
              yPercent: 110,
              duration: cfg.duration,
              stagger: cfg.stagger,
              ease: "expo.out",
              // Don't apply the "from" state until ScrollTrigger actually starts.
              // This prevents headings from staying invisible if the trigger doesn't fire instantly.
              immediateRender: false,
              scrollTrigger: {
                trigger: heading,
                start: "top 80%",
                once: true,
              },
            });
          },
        });
      } catch {
        // If SplitText fails, the CSS `[data-split="heading"] { visibility: hidden; }`
        // would otherwise keep the heading invisible.
        gsap.set(heading, { visibility: "visible", autoAlpha: 1, clearProps: "all" });
      }
    });
}


"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import AnimatedCharsButton from "@/components/AnimatedCharsButton";

const rotatingPhrases = [
  "interfaces",
  "dashboards",
  "SaaS products",
  "design systems",
  "defining experiences",
];
const heroMessages = [
  {
    title: "A React UI system designed for humans and AI",
  },
  {
    title: "Supercharge your LLMs to reliably generate UI components.",
  },
] as const;

export default function HeroSection() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const heroTextRefs = useRef<HTMLSpanElement[]>([]);
  const phraseRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const heroTargets = heroTextRefs.current.filter(Boolean);
    const phraseTargets = phraseRefs.current.filter(Boolean);
    if (heroTargets.length < 2) return;

    const ctx = gsap.context(() => {
      // Main hero copy rotation (vertical cut reveal) using manual loop
      const [firstHero, secondHero] = heroTargets;

      const playHeroLoop = () => {
        gsap.set(firstHero, { yPercent: 0 });
        gsap.set(secondHero, { yPercent: 110 });

        gsap
          .timeline({ onComplete: playHeroLoop })
          .to(firstHero, {
            yPercent: -110,
            duration: 0.85,
            ease: "expo.inOut",
          }, "+=3")
          .to(secondHero, {
            yPercent: 0,
            duration: 0.85,
            ease: "expo.inOut",
          }, "<")
          .to(secondHero, {
            yPercent: -110,
            duration: 0.85,
            ease: "expo.inOut",
          }, "+=3")
          .to(firstHero, {
            yPercent: 0,
            duration: 0.85,
            ease: "expo.inOut",
          }, "<");
      };

      playHeroLoop();

      // "DESIGNED FOR" rotating phrases using manual loop over all phrases
      if (phraseTargets.length > 0) {
        const playPhraseLoop = (currentIndex: number) => {
          const total = phraseTargets.length;
          const nextIndex = (currentIndex + 1) % total;

          // reset all phrases, then show current
          gsap.set(phraseTargets, { yPercent: 110 });
          gsap.set(phraseTargets[currentIndex], { yPercent: 0 });

          gsap
            .timeline({ onComplete: () => playPhraseLoop(nextIndex) })
            .to(phraseTargets[currentIndex], {
              yPercent: -110,
              duration: 0.85,
              ease: "expo.inOut",
            }, "+=3")
            .to(phraseTargets[nextIndex], {
              yPercent: 0,
              duration: 0.85,
              ease: "expo.inOut",
            }, "<");
        };

        playPhraseLoop(0);
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[110vh] w-full overflow-hidden bg-black text-white antialiased">
      {/* Background: image + gradients */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="https://tabodozo.sirv.com/abstract-chromatic-gradient%20(3).jpg"
          alt="Abstract dark background"
          className="h-full w-full object-cover opacity-70 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/30 to-black/90" />
        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-black/50" />
      </div>

      {/* Centered hero copy */}
      <div
        ref={rootRef}
        className="relative z-10 flex min-h-[110vh] flex-col items-center justify-center px-6 md:px-10"
      >
        <div className="mx-auto flex w-full min-h-50 flex-col items-center text-center">
          <h1 className="relative w-full max-w-full sm:max-w-[70%] lg:max-w-[50%] mx-auto overflow-hidden text-center min-h-40 md:min-h-56">
            {heroMessages.map((message, index) => (
              <span
                key={message.title}
                ref={(el) => {
                  if (el) heroTextRefs.current[index] = el;
                }}
                className="absolute inset-0"
              >
                <span className="block text-[clamp(2.8rem,6vw,3.9rem)] leading-[1.02] tracking-[-0.045em] text-white">
                  {message.title}
                </span>
              
              </span>
            ))}
          </h1>

          {/* Rotating text line */}
          <div className="mt-3 flex items-center justify-center gap-1.5 text-[13px] md:text-[14px] uppercase tracking-[0.16em] text-white/50">
            <span className="font-semibold">DESIGNED FOR</span>
            <div className="relative h-5 overflow-hidden w-44 text-left">
              {rotatingPhrases.map((phrase, index) => (
                <span
                  key={phrase}
                  ref={(el) => {
                    if (el) phraseRefs.current[index] = el;
                  }}
                  className="absolute left-0 right-0 text-orange-400"
                >
                  {phrase}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <AnimatedCharsButton
              href="/components"
              label="Browse components"
              className="bg-orange-500 text-white shadow-soft-md hover:bg-orange-400 min-w-[190px]"
            />
            <AnimatedCharsButton
              href="https://www.npmjs.com/package/@raydenui/ui"
              label="Install via npm"
              className="border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white min-w-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

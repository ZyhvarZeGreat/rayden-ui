"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const rotatingPhrases = ["interfaces", "dashboards", "SaaS products", "design systems"];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 2600);
    return () => clearInterval(id);
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
      <div className="relative z-10 flex min-h-[110vh] flex-col items-center justify-center px-6 md:px-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1 className="text-[clamp(2.6rem,5vw,3.6rem)] leading-[1.02] tracking-[-0.04em] text-white">
            A modern, accessible React component library
            <span className="block text-orange-400">
              built with Tailwind CSS v4.
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-white/65">
            Rayden UI brings the Rayna UI Figma design system to life with pixel‑perfect
            React components, tokens, and pre‑built blocks so you can ship real product
            UI—not just playgrounds.
          </p>

          {/* Rotating text line */}
          <div className="mt-6 flex items-center justify-center gap-2 text-[12px] uppercase tracking-[0.16em] text-white/40">
            <span>DESIGNED FOR</span>
            <div className="relative h-4 overflow-hidden w-40 text-left">
              {rotatingPhrases.map((phrase, index) => (
                <span
                  key={phrase}
                  className={`absolute left-0 right-0 text-orange-400 transition-all duration-500 ${
                    index === activeIndex
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                >
                  {phrase}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/components"
              className="rounded-full bg-orange-500 px-6 py-2.5 text-[13px] font-semibold text-white shadow-soft-md transition-colors hover:bg-orange-400"
            >
              Browse components
            </Link>
            <Link
              href="https://www.npmjs.com/package/@raydenui/ui"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-[13px] text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              Install via npm
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

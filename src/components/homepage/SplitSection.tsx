"use client";

import { useState } from "react";
import AnimatedCharsButton from "@/components/AnimatedCharsButton";

const capabilities = [
  {
    id: "01",
    title: "Tree-shakeable React components",
    detail:
      "Import only what you use. Keep bundle sizes lean while still having access to a full component system.",
    panelTitle: "Ship only what you actually render",
    panelBody:
      "Every component in Rayden UI is authored as a small, focused module so modern bundlers can safely tree‑shake unused pieces. Reach for complex dashboards and flows without paying the cost for things you never import.",
    panelTags: ["ESM ready", "Bundle‑size friendly", "Side‑effect free"],
  },
  {
    id: "02",
    title: "Tailwind CSS v4 friendly setup",
    detail:
      "Tokens and utilities are designed to slot into Tailwind v4 with minimal config and consistent spacing.",
    panelTitle: "Drop straight into your Tailwind config",
    panelBody:
      "Design tokens, radii, and spacing scales are mapped to Tailwind v4 so your Rayden components and local UI speak the same visual language. No giant theme overrides or hand‑rolled utility classes required.",
    panelTags: ["Tailwind v4 tokens", "Consistent spacing", "Design‑system first"],
  },
  {
    id: "03",
    title: "Type-safe, documented APIs",
    detail:
      "Full TypeScript support for props and variants so refactors stay safe and predictable.",
    panelTitle: "Confident refactors with rich types",
    panelBody:
      "Every primitive ships with strict TypeScript types and docs so your editor can autocomplete variants, slots, and composition patterns. You get inline guidance as you wire blocks together — not buried MD files.",
    panelTags: ["TypeScript‑first", "IntelliSense docs", "Safe refactors"],
  },
  {
    id: "04",
    title: "Accessibility-first patterns",
    detail:
      "Focus states, ARIA attributes, and keyboard navigation are baked into the components from day one.",
    panelTitle: "Accessible by default, not as an afterthought",
    panelBody:
      "Interactive pieces like dialogs, menus, and accordions follow WCAG‑aligned patterns out of the box — with focus traps, ARIA attributes, and keyboard paths already wired so you don’t have to re‑implement them.",
    panelTags: ["ARIA patterns", "Keyboard paths", "Visible focus"],
  },
];

export default function SplitSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="w-full max-w-[1500px] mx-auto py-16 px-6 lg:px-12 bg-[#050505] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] lg:gap-0">
        {/* Left Column */}
        <div className="flex flex-col justify-between lg:border-r border-white/10 pb-12 lg:pb-0 pr-0 lg:pr-12">
          {/* Top Label */}
          <div className="flex items-center gap-2.5 mb-24 lg:mb-0 pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#f05023]" />
            <span
              data-split="heading"
              data-split-reveal="lines"
              className="text-xs uppercase tracking-widest text-white/35 font-medium"
            >
              Package capabilities
            </span>
          </div>

          {/* Bottom Info */}
          <div className="flex flex-col gap-5 pb-8">
            <div className="flex items-center gap-2 text-white">
              <span className="inline-flex h-3.5 w-3.5 items-center justify-center">
                <span className="block h-3 w-3 border-y-[6px] border-y-transparent border-l-[9px] border-l-current" />
              </span>
              <span className="text-lg">
                The{" "}
                <span className="font-serif italic text-xl tracking-wide">
                  Introduce
                </span>
              </span>
            </div>
            <p
              data-split="heading"
              data-split-reveal="words"
              className="text-base text-gray-400 leading-relaxed max-w-[220px]"
            >
              Rayden UI turns your design system into real components — built to
              ship quickly, stay consistent, and scale.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col pt-2 lg:pl-16">
          {/* Header Area */}
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-10 pb-16">
            <h2
              data-split="heading"
              data-split-reveal="lines"
              className="text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] tracking-tight leading-[1.05] font-normal text-white"
            >
              Our provided components that help your product.
            </h2>

            <AnimatedCharsButton
              href="/components"
              label="Explore All Components"
              className="h-11 bg-[#f05023] px-8 text-base text-white hover:bg-[#d0401b] shrink-0 self-start xl:self-auto xl:mb-4"
            />
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10" />

          {/* Capability list with click-to-preview accordion */}
          {capabilities.map((cap) => {
            const isOpen = openId === cap.id;
            return (
              <div
                key={cap.id}
                className="border-b border-white/10 last:border-b-0"
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onKeyDown={(e) => {
                    if (e.key !== "Enter" && e.key !== " ") return;
                    e.preventDefault();
                    setOpenId((prev) => (prev === cap.id ? null : cap.id));
                  }}
                  onClick={() => setOpenId((prev) => (prev === cap.id ? null : cap.id))}
                  className="flex w-full flex-col md:flex-row items-start md:items-center justify-between gap-6 py-6 cursor-pointer group"
                >
                  <div className="flex items-baseline gap-6 lg:gap-12 text-left">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wider relative -top-1">
                      {cap.id}
                    </span>
                    <h3 className="text-2xl lg:text-[2.1rem] tracking-tight font-normal text-white group-hover:text-gray-300 transition-colors">
                      {cap.title}
                    </h3>
                  </div>
                  <span className="text-xs text-white/50 md:mr-4 hidden md:inline-block">
                    {isOpen ? "Click to close" : "Click to preview"}
                  </span>
                </div>

                {/* Open state with animated accordion panel */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isOpen
                      ? "mt-2 max-h-[360px] opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-1"
                  }`}
                >
                  <div className="rounded-3xl bg-[#050505] px-6 md:px-8 py-6 md:py-7 flex flex-col gap-4 items-stretch">
                    {/* Text + pills */}
                    <div className="flex flex-col justify-between gap-4">
                      <div>
                        <h4 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">
                          {cap.panelTitle}
                        </h4>
                        <p className="text-xs md:text-sm text-white/40 leading-relaxed max-w-md mb-2">
                          {cap.detail}
                        </p>
                        <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md">
                          {cap.panelBody}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2 text-[11px] md:text-xs">
                        {cap.panelTags?.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 uppercase tracking-[0.18em]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

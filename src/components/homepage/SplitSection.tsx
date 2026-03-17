"use client";

import { useState } from "react";

const capabilities = [
  {
    id: "01",
    title: "Tree-shakeable React components",
    detail:
      "Import only what you use. Keep bundle sizes lean while still having access to a full component system.",
  },
  {
    id: "02",
    title: "Tailwind CSS v4 friendly setup",
    detail:
      "Tokens and utilities are designed to slot into Tailwind v4 with minimal config and consistent spacing.",
  },
  {
    id: "03",
    title: "Type-safe, documented APIs",
    detail:
      "Full TypeScript support for props and variants so refactors stay safe and predictable.",
  },
  {
    id: "04",
    title: "Accessibility-first patterns",
    detail:
      "Focus states, ARIA attributes, and keyboard navigation are baked into the components from day one.",
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
            <span className="text-xs uppercase tracking-widest text-gray-300 font-medium">
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
            <p className="text-base text-gray-400 leading-relaxed max-w-[220px]">
              Rayden UI turns your design system into real components — built to
              ship quickly, stay consistent, and scale.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col pt-2 lg:pl-16">
          {/* Header Area */}
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-10 pb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] tracking-tight leading-[1.05] font-normal text-white">
              Our provided
              <br />
              components that help
              <br />
              <span className="font-serif italic tracking-normal text-gray-100 pr-4">
                your product.
              </span>
            </h2>

            <button className="bg-[#f05023] hover:bg-[#d0401b] text-white rounded-full px-8 py-4 flex items-center gap-3 transition-colors shrink-0 self-start xl:self-auto xl:mb-4">
              <span className="text-base font-medium">Explore All Components</span>
              <span className="inline-block text-sm">→</span>
            </button>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10" />

          {/* Capability list with hover / accordion panel */}
          {capabilities.map((cap) => {
            const isOpen = openId === cap.id;
            return (
              <div
                key={cap.id}
                className="border-b border-white/10 last:border-b-0"
                onMouseEnter={() => setOpenId(cap.id)}
                onMouseLeave={() => setOpenId(null)}
              >
                <div className="flex w-full flex-col md:flex-row items-start md:items-center justify-between gap-6 py-6 cursor-pointer group">
                  <div className="flex items-baseline gap-6 lg:gap-12 text-left">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wider relative -top-1">
                      {cap.id}
                    </span>
                    <h3 className="text-2xl lg:text-[2.1rem] tracking-tight font-normal text-white group-hover:text-gray-300 transition-colors">
                      {cap.title}
                    </h3>
                  </div>
                  <span className="text-xs text-white/50 md:mr-4 hidden md:inline-block">
                    {isOpen ? "Hover out to reset" : "Hover to preview"}
                  </span>
                </div>

                {/* Open state inspired by visual branding card */}
                <div className={isOpen ? "mt-2" : "hidden"}>
                  <div className="rounded-3xl bg-[#050505] px-6 md:px-8 py-6 md:py-7 flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
                    {/* Text + pills */}
                    <div className="flex-1 flex flex-col justify-between gap-4">
                      <div>
                        <h4 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">
                          Visual Branding
                        </h4>
                        <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md">
                          We craft distinctive interface identities that feel as sharp
                          as your brand — from typography to motion, each capability
                          slot is built to stay on‑grid with your system.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2 text-[11px] md:text-xs">
                        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 uppercase tracking-[0.18em]">
                          Brand Strategy
                        </span>
                        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 uppercase tracking-[0.18em]">
                          Graphics Design
                        </span>
                        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 uppercase tracking-[0.18em]">
                          Guidelines
                        </span>
                      </div>
                    </div>

                    {/* Image side */}
                    <div className="w-full md:w-[260px] lg:w-[280px] rounded-3xl overflow-hidden bg-[#111] flex items-center justify-center">
                      <img
                        src="/.cursor/projects/c-Users-ELITEBOOK-845-G8-rayden-ui-page/assets/c__Users_ELITEBOOK_845_G8_AppData_Roaming_Cursor_User_workspaceStorage_4f65bb8f017a7695eb66f55cbb3635b6_images_image-253aa7de-252b-4456-90f5-8a7fc7ab1d77.png"
                        alt="Visual branding preview"
                        className="w-full h-full object-cover"
                      />
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

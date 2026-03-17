"use client"

import { useState } from "react";
import AnimatedCharsHeading from "@/components/animations/AnimatedCharsHeading";
import AnimatedCharsButton from "@/components/AnimatedCharsButton";

const faqs = [
  {
    q: "What is Rayden UI?",
    a: "Rayden UI is a React component package built for design-driven teams that need fast, production-ready interfaces.",
  },
  {
    q: "How do I install the package?",
    a: "Install via npm or pnpm, then follow the setup guide to connect it with Tailwind and your design tokens.",
  },
  {
    q: "Does it work with Tailwind CSS v4?",
    a: "Yes. The tokens and utilities are designed to pair cleanly with Tailwind CSS v4.",
  },
  {
    q: "Can I use it in existing projects?",
    a: "You can drop Rayden UI into an existing React + Tailwind stack and adopt components gradually.",
  },
  {
    q: "Do you provide ongoing updates?",
    a: "We ship improvements and new components on a regular cadence, with a clear changelog.",
  },
  {
    q: "Is it TypeScript friendly?",
    a: "All components ship with full TypeScript types so refactors stay safe.",
  },
  {
    q: "How do I get support?",
    a: "You can reach us via email or the support channel in your purchase confirmation.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white text-black antialiased py-16 md:py-24">
      <main className="max-w-352 mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <div className="lg:col-span-4 flex flex-col h-full">
          <div className="flex items-center gap-2 mb-16 lg:mb-32 lg:pt-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
            <span className="text-xs font-normal uppercase tracking-[0.15em] text-gray-500">
              Questions &amp; Answers
            </span>
          </div>

          <div className="mb-12 lg:mb-20">
            <AnimatedCharsHeading
              as="h2"
              text="Have any question?"
              className="text-3xl font-normal tracking-tight mb-4 text-black"
            />
            <p className="text-lg text-gray-500 leading-relaxed max-w-88">
              Reach out anytime. We&apos;re happy to answer any questions before you
              commit to working with Rayden UI.
            </p>
          </div>

          <div className="flex items-center gap-4 mb-16 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=128&auto=format&fit=crop&grayscale"
              alt="John Dukes"
              className="w-14 h-14 rounded-full object-cover grayscale"
            />
            <div>
              <div className="text-lg font-normal text-black leading-tight">
                John Dukes
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                Project Manager
              </div>
            </div>
          </div>

          <div className="lg:mt-auto pt-16">
            <AnimatedCharsButton
              href="#contact"
              label="Contact Now"
              className="h-11 bg-black px-7 text-base text-white hover:bg-gray-800"
            />
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col">
          <AnimatedCharsHeading
            as="h1"
            text="FAQ's"
            className="text-6xl md:text-[6rem] leading-none font-normal tracking-tighter mb-10 md:mb-14 text-black"
          />

          <div className="flex flex-col gap-3">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.q}
                  className="bg-[#F4F4F5] rounded-xl px-8 pt-6 pb-3 cursor-pointer hover:bg-gray-100 transition-colors group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xl font-normal text-black tracking-tight pr-4">
                      {item.q}
                    </span>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
                      <span className="text-black/60 text-sm">
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`mt-2 overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ maxHeight: isOpen ? "160px" : "0px" }}
                  >
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed pb-4 pr-4">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </section>
  );
}


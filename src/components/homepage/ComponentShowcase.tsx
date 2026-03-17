"use client";
import Reveal from "@/components/animations/Reveal";
import Link from "next/link";

export default function ComponentShowcase() {
  return (
    <section className="bg-[#efefef] py-28" data-layout="flow-columns">
      <div className="mx-auto max-w-[1400px] px-8">
        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 lg:col-span-4">
            <div className="border border-black/10 bg-white p-6">
              <p className="text-[10px] uppercase tracking-[0.14em] text-black/40">
                DESIGN
              </p>
              <p className="mt-3 text-sm text-black/70">
                Use Rayden UI to mirror your design system with clean,
                consistent components.
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={80} className="col-span-12 lg:col-span-4">
            <div className="border border-black/10 bg-white p-6">
              <p className="text-[10px] uppercase tracking-[0.14em] text-black/40">
                CODE
              </p>
              <p className="mt-3 text-sm text-black/70">
                Type-safe APIs, TS support, and Tailwind v4-friendly
                configuration out of the box.
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={160} className="col-span-12 lg:col-span-4">
            <div className="border border-black/10 bg-white p-6">
              <p className="text-[10px] uppercase tracking-[0.14em] text-black/40">
                SHIP
              </p>
              <p className="mt-3 text-sm text-black/70">
                Release UI updates faster with fewer regressions and more reuse
                across products.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={200} className="mt-8 border border-black/10 bg-white p-7">
          <div className="grid gap-4 md:grid-cols-[1.1fr_1fr]">
            <div className="rounded-xl bg-[linear-gradient(135deg,#101010,#2a2a2a)] p-6">
              <p className="text-sm text-white/70">Package snapshot</p>
              <p className="mt-2 max-w-md text-xl leading-8 text-white">
                Component primitives, input systems, feedback states, and layout
                building blocks for React teams.
              </p>
            </div>
            <div className="flex items-end justify-between rounded-xl border border-black/10 bg-[#f6f6f6] p-6">
              <p className="max-w-xs text-sm text-black/60">
                Ready to use Rayden UI in your product?
              </p>
              <Link
                href="/components"
                className="btn-animated rounded-full bg-black px-5 py-2 text-xs text-white"
              >
                View docs
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

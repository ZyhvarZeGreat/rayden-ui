"use client";
import Reveal from "@/components/animations/Reveal";
import AnimatedCharsHeading from "@/components/animations/AnimatedCharsHeading";

export default function StatsSection() {
  const stats = [
    {
      value: "24+",
      label: "Production‑ready components",
      meta: "Buttons, inputs, tables, overlays, and more.",
    },
    {
      value: "98.8%",
      label: "Accessibility coverage",
      meta: "Keyboard, ARIA, and contrast baked in.",
    },
    {
      value: "3×",
      label: "Faster UI build speed",
      meta: "Ship from idea to layout in one sitting.",
    },
  ];

  return (
    <section className="relative border-y border-white/4 bg-dark py-20">
      <div className="dot-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">
              PERFORMANCE SNAPSHOT
            </p>
            <AnimatedCharsHeading
              as="h2"
              text="Numbers from teams building with Rayden."
              className="mt-2 text-[20px] font-semibold tracking-[-0.03em] text-white"
            />
          </div>
          <p className="max-w-sm text-[11px] text-white/45">
            A quick look at what changes when UI primitives, tokens, and blocks
            are all speaking the same design language.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-linear-to-br from-[#050505] via-[#090909] to-dark-card p-5 md:p-7">
          <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-orange-500/40 to-transparent" />

          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delayMs={80 * i}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 px-5 py-6 text-left"
              >
                <div className="mb-3 flex items-center justify-between text-[11px] text-white/35">
                  <span className="uppercase tracking-[0.18em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-5 w-px bg-white/10" />
                  <span className="rounded-full bg-orange-500/10 px-2 py-0.5 text-[10px] text-orange-300">
                    Rayden metric
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <div className="text-[clamp(2.3rem,3.4vw,3.2rem)] font-semibold tracking-[-0.04em] text-white">
                    {stat.value}
                  </div>
                  <div className="h-5 w-px bg-white/10" />
                  <p className="text-[12px] font-medium text-white/65">
                    {stat.label}
                  </p>
                </div>
                <p className="mt-2.5 text-[11px] leading-relaxed text-white/40">
                  {stat.meta}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={260}>
            <p className="mt-6 text-center text-[11px] uppercase tracking-[0.14em] text-white/40">
              Used by product teams, agencies, and solo builders shipping real
              products — not just design demos.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

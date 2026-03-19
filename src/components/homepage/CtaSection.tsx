import Reveal from "@/components/animations/Reveal";
import AnimatedCharsButton from "@/components/AnimatedCharsButton";
import AnimatedCharsHeading from "@/components/animations/AnimatedCharsHeading";

export default function CtaSection() {
  return (
    <section className="relative bg-[#050505] py-20 sm:py-24 md:py-24" id="contact">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(245,102,48,0.7),transparent)]" />
      <div className="pointer-events-none absolute inset-x-12 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-linear-to-br from-[#050505] via-[#090909] to-dark-card px-5 py-7 sm:px-6 sm:py-8 md:px-10 md:py-10">
          <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-orange-500/18 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-orange-400/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-orange-500/50 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
            {/* Mobile: full CTA content (no desktop reveal/split masks) */}
            <div className="md:hidden w-full">
              <p className="text-[10px] uppercase tracking-[0.2em] text-orange-400/80">
                READY WHEN YOUR NEXT IDEA HITS
              </p>
              <h2 className="mt-3 text-[clamp(1.55rem,5.2vw,3.1rem)] leading-[1.05] tracking-[-0.04em] text-white wrap-break-word text-balance">
                Drop Rayden UI into your stack and start from the good part.
              </h2>
              <p className="mt-4 text-[13px] leading-relaxed text-white/55">
                Install once, then reach for tokens, primitives, and pre‑built blocks whenever you need a dashboard,
                auth flow, or content surface. No design hand‑off, no blank canvas.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/3 p-5">
                <p className="text-[11px] text-white/60">
                  Install the package, import the stylesheet, and you&apos;re ready to ship real product UI—not just
                  playgrounds.
                </p>

                <div className="mt-4 rounded-lg bg-[#080808] px-4 py-3">
                  <code className="text-[13px] text-orange-400">npm install @raydenui/ui</code>
                </div>
                <div className="mt-1 rounded-lg bg-[#080808] px-4 py-3">
                  <code className="text-[13px] text-white/45">
                    <span className="text-orange-400">import</span>
                    <span className="text-white/40"> {"\"@raydenui/ui/styles.css\""}</span>
                  </code>
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  <AnimatedCharsButton
                    href="https://www.npmjs.com/package/@raydenui/ui"
                    label="Install Rayden UI"
                    className="h-11 bg-orange-500 px-5 text-white shadow-soft-md hover:bg-orange-400"
                  />
                  <AnimatedCharsButton
                    href="/components"
                    label="Browse components & blocks"
                    className="h-11 border border-white/15 bg-white/3 text-white/80 hover:bg-white/6 hover:text-white"
                  />
                </div>
              </div>
            </div>

            {/* Desktop: animated reveal */}
            <Reveal className="hidden md:block md:col-span-7 lg:col-span-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-orange-400/80">
                READY WHEN YOUR NEXT IDEA HITS
              </p>
              <AnimatedCharsHeading
                as="h2"
                text="Drop Rayden UI into your stack and start from the good part."
                className="mt-3 text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.05] tracking-[-0.04em] text-white"
              />
              <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-white/55">
                Install once, then reach for tokens, primitives, and pre‑built blocks whenever you need a dashboard,
                auth flow, or content surface. No design hand‑off, no blank canvas.
              </p>
            </Reveal>

            <Reveal delayMs={120} className="hidden md:block md:col-span-5 lg:col-span-4">
              <div className="rounded-2xl border border-white/10 bg-white/3 p-5 md:p-6">
                <p className="text-[11px] text-white/60">
                  Install the package, import the stylesheet, and you&apos;re ready to ship real product UI—not just
                  playgrounds.
                </p>
                <div className="mt-4 rounded-lg bg-[#080808] px-4 py-3">
                  <code className="text-[13px] text-orange-400">npm install @raydenui/ui</code>
                </div>
                <div className="mt-1 rounded-lg bg-[#080808] px-4 py-3">
                  <code className="text-[13px] text-white/45">
                    <span className="text-orange-400">import</span>
                    <span className="text-white/40"> {"\"@raydenui/ui/styles.css\""}</span>
                  </code>
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  <AnimatedCharsButton
                    href="https://www.npmjs.com/package/@raydenui/ui"
                    label="Install Rayden UI"
                    className="h-11 bg-orange-500 px-5 text-white shadow-soft-md hover:bg-orange-400"
                  />
                  <AnimatedCharsButton
                    href="/components"
                    label="Browse components & blocks"
                    className="h-11 border border-white/15 bg-white/3 text-white/80 hover:bg-white/6 hover:text-white"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

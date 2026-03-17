import Reveal from "@/components/animations/Reveal";

export default function IntroSection() {
  return (
    <section className="bg-[#efefef] py-24" id="works">
      <div className="mx-auto max-w-[1400px] px-8">
        <Reveal className="grid grid-cols-12 gap-6 border-b border-black/10 pb-8">
          <div className="col-span-12 md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.14em] text-black/45">
              Highlights
            </p>
          </div>
          <div className="col-span-12 grid grid-cols-3 gap-4 md:col-span-9">
            {[
              ["24+", "Production components"],
              ["0.7", "Latest package version"],
              ["React", "Ready integration"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-2xl font-semibold text-black">{value}</p>
                <p className="text-xs text-black/55">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <h2 className="mt-16 text-[clamp(3rem,8.5vw,6.6rem)] leading-none tracking-[-0.05em] text-black">
            COMPONENTS
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-12 gap-5 text-black">
          <Reveal className="col-span-12 md:col-span-5 lg:col-span-4">
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <p className="text-[10px] uppercase tracking-[0.12em] text-black/45">
                Buttons & inputs
              </p>
              <div className="mt-4 flex flex-col gap-3 text-[13px]">
                <div className="flex gap-2">
                  <button className="h-8 rounded-full bg-black px-4 text-xs font-medium text-white">
                    Primary
                  </button>
                  <button className="h-8 rounded-full border border-black/20 px-4 text-xs text-black/70">
                    Secondary
                  </button>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.14em] text-black/40">
                    Email
                  </span>
                  <div className="h-9 rounded-full border border-black/15 bg-white px-3 text-[12px] text-black/50 flex items-center">
                    you@example.com
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delayMs={80} className="col-span-12 md:col-span-4 lg:col-span-3 lg:mt-8">
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <p className="text-[10px] uppercase tracking-[0.12em] text-black/45">
                Feedback
              </p>
              <div className="mt-4 space-y-2 text-[12px]">
                <div className="rounded-lg bg-[#ecfdf3] px-3 py-2 text-[#14532d]">
                  Success — component saved.
                </div>
                <div className="rounded-lg bg-[#fef3c7] px-3 py-2 text-[#92400e]">
                  Warning — missing label.
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delayMs={140} className="col-span-12 md:col-span-7 lg:col-span-5">
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <p className="text-[10px] uppercase tracking-[0.12em] text-black/45">
                Navigation & layout
              </p>
              <div className="mt-4 space-y-3 text-[12px]">
                <div className="flex items-center justify-between rounded-lg bg-[#f5f5f5] px-4 py-2">
                  <span>Rayden UI</span>
                  <div className="flex gap-3 text-[11px] text-black/60">
                    <span>Docs</span>
                    <span>Components</span>
                    <span>GitHub</span>
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-black/10 bg-white p-3 h-16" />
                  <div className="rounded-lg border border-black/10 bg-white p-3 h-16" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

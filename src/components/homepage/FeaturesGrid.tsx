import Reveal from "@/components/animations/Reveal";

export default function FeaturesGrid() {
  return (
    <section className="bg-[#050505] py-24" id="services">
      <div className="mx-auto max-w-[1400px] px-8">
        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/45">
              PACKAGE CAPABILITIES
            </p>
            <h2 className="mt-3 text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-white">
              Built for developer speed.
              <br />Styled for production.
            </h2>
          </Reveal>
          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-3">
              {[
                "Tree-shakeable React components",
                "Tailwind CSS v4 friendly setup",
                "Type-safe APIs across components",
                "Accessibility-first interaction states",
                "AI-ready structure via @raydenui/ai",
              ].map((item, index) => (
                <Reveal
                  key={item}
                  delayMs={80 * index}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/3 px-5 py-4"
                >
                  <p className="text-sm text-white/85">{item}</p>
                  <span className="text-[11px] text-white/40">0{index + 1}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

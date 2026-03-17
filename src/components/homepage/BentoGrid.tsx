export default function BentoGrid() {
  return (
    <section className="bg-[#050505] py-32 px-6 text-white" id="features">
      <div className="mx-auto max-w-[90%] md:max-w-7xl">
        <div className="mb-16 md:w-1/2">
          <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-6xl">
            Everything you need.
            <br />
            Nothing you don't.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* Large Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#111] p-10 md:col-span-2 md:row-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <h3 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Figma to React
            </h3>
            <p className="mt-4 max-w-sm text-sm text-white/50 leading-relaxed">
              Pixel-perfect implementations of the Rayna UI Figma design system. What designers build, developers ship.
            </p>
            {/* Abstract visual */}
            <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full border-[20px] border-white/5" />
          </div>

          {/* Small Card 1 */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#111] p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <h3 className="font-heading text-xl font-bold tracking-tight text-white">
              Tailwind v4
            </h3>
            <p className="mt-3 text-xs text-white/50 leading-relaxed">
              Built on the latest engine. Utility-first all the way through.
            </p>
          </div>

          {/* Small Card 2 */}
          <div className="group relative overflow-hidden rounded-3xl bg-orange-600 p-8 text-[#0a0a0a]">
            <h3 className="font-heading text-xl font-bold tracking-tight">
              AI Compatible
            </h3>
            <p className="mt-3 text-xs text-black/60 leading-relaxed">
              Supercharge your LLMs to reliably generate UI without hallucination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

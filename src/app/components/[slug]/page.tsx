import { notFound } from "next/navigation";
import { componentRegistry, getComponentBySlug } from "@/lib/component-registry";
import LiveDemo from "@/components/docs/LiveDemo";
import PropsTable from "@/components/docs/PropsTable";

export function generateStaticParams() {
  return componentRegistry.map((c) => ({ slug: c.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ComponentPage({ params }: PageProps) {
  const { slug } = await params;
  const component = getComponentBySlug(slug);

  if (!component) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl py-4">
      {/* Header */}
      <div className="mb-10">
        <div className="section-label mb-3">
          {component.category.replace("-", " ")}
        </div>
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
          {component.name}
        </h1>
        <p className="mt-3 max-w-lg text-[15px] leading-[1.7] text-white/35">
          {component.description}
        </p>
      </div>

      {/* Import */}
      <div className="mb-10 rounded-lg border border-white/[0.04] bg-[#080808] px-5 py-3">
        <code className="text-[13px]">
          <span className="text-orange-400">import</span>
          <span className="text-white/40">{" { "}</span>
          <span className="text-white/70">{component.name}</span>
          <span className="text-white/40">{" } "}</span>
          <span className="text-orange-400">from</span>
          <span className="text-white/40">{' "'}</span>
          <span className="text-green-400/60">@raydenui/ui</span>
          <span className="text-white/40">{'"'}</span>
        </code>
      </div>

      {/* Demo */}
      <div className="mb-12">
        <h2 className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">
          Interactive demo
        </h2>
        <LiveDemo code={component.code} />
      </div>

      {/* Props */}
      <div>
        <h2 className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">
          Props
        </h2>
        <PropsTable props={component.props} />
      </div>
    </div>
  );
}

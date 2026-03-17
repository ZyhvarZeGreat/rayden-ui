import Link from "next/link";
import { componentRegistry, categories } from "@/lib/component-registry";
import ComponentPreview from "@/components/docs/ComponentPreview";
import InView from "@/components/docs/InView";

export default function ComponentsIndex() {
  return (
    <div className="mx-auto max-w-4xl py-4">
      <div className="mb-16">
        <Link
          href="/"
          className="mb-3 inline-flex items-center gap-1 text-[11px] text-white/35 transition-colors hover:text-white/70"
        >
          <span className="text-[14px] leading-none">←</span>
          <span>Back to landing</span>
        </Link>
        <div className="section-label mb-4">Documentation</div>
        <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
          Components
        </h1>
        <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-white/35">
          24+ production-ready components. Install, import, ship.
        </p>
      </div>

      {/* Blocks overview */}
      <div className="mb-16 rounded-xl border border-white/4 bg-dark-card p-6">
        <div className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-orange-400/70">
          Blocks
        </div>
        <p className="mb-4 text-[13px] leading-relaxed text-white/45">
          Pre-built Rayden blocks composed from primitives — drop in complete flows like login,
          notifications, tables, and dashboards.
        </p>
        <div className="mb-4 grid gap-2 text-[12px] text-white/55 sm:grid-cols-2">
          <ul className="space-y-1.5">
            <li>
              <span className="text-white/75">LoginBlock</span>
              <span className="text-white/30"> — Auth layout with social providers</span>
            </li>
            <li>
              <span className="text-white/75">NotificationsBlock</span>
              <span className="text-white/30"> — Notification feed with actions</span>
            </li>
            <li>
              <span className="text-white/75">TableBlock</span>
              <span className="text-white/30"> — Data table with sorting &amp; filters</span>
            </li>
            <li>
              <span className="text-white/75">SearchableTableBlock</span>
              <span className="text-white/30"> — Table + integrated search</span>
            </li>
          </ul>
          <ul className="space-y-1.5">
            <li>
              <span className="text-white/75">QuickSendBlock</span>
              <span className="text-white/30"> — Quick payments / transfer surface</span>
            </li>
            <li>
              <span className="text-white/75">RecentTransactionsBlock</span>
              <span className="text-white/30"> — Transaction history list</span>
            </li>
            <li>
              <span className="text-white/75">EmptyStateBlock</span>
              <span className="text-white/30"> — Empty state with illustration &amp; CTA</span>
            </li>
          </ul>
        </div>
        <div className="rounded-lg bg-[#080808] px-4 py-3">
          <code className="text-[13px] text-white/50">
            <span className="text-orange-400">import</span>
            <span className="text-white/40"> {"{ "}</span>
            <span className="text-white/70">LoginBlock</span>
            <span className="text-white/40">, </span>
            <span className="text-white/70">NotificationsBlock</span>
            <span className="text-white/40"> {"} "}</span>
            <span className="text-orange-400">from</span>
            <span className="text-green-400/60"> {' "@raydenui/ui"'}</span>
          </code>
        </div>
      </div>

      {/* Install block */}
      <div className="mb-16 rounded-xl border border-white/4 bg-dark-card p-6">
        <div className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">
          Quick start
        </div>
        <div className="rounded-lg bg-[#080808] px-4 py-3">
          <code className="text-[13px] text-orange-400">
            npm install @raydenui/ui
          </code>
        </div>
        <div className="mt-3 rounded-lg bg-[#080808] px-4 py-3">
          <code className="text-[13px] text-white/40">
            <span className="text-orange-400">import</span>{" "}
            <span className="text-white/60">{'"@raydenui/ui/styles.css"'}</span>
          </code>
        </div>
      </div>

      {/* AI Package */}
      <div className="mb-16 rounded-xl border border-white/4 bg-dark-card p-6">
        <div className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-orange-500/50">
          AI Compatibility Layer
        </div>
        <div className="mb-4 text-[13px] text-white/40">
          <code className="text-orange-400">@raydenui/ai</code> — Machine-readable manifests, design tokens, composition rules, and layout recipes for LLM code generation.
        </div>
        <div className="rounded-lg bg-[#080808] px-4 py-3 mb-3">
          <code className="text-[13px] text-orange-400">
            npm install @raydenui/ai
          </code>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-[#080808] p-4">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/20">Manifests</div>
            <pre className="text-[12px] leading-[1.6]">
              <code>
                <span className="text-orange-400">{"import"}</span>
                <span className="text-white/40">{" { "}</span>
                <span className="text-white/60">{"getManifest"}</span>
                <span className="text-white/40">{" } "}</span>
                <span className="text-orange-400">{"from"}</span>
                {"\n"}
                <span className="text-green-400/60">{"  \"@raydenui/ai/manifests\""}</span>
                {"\n\n"}
                <span className="text-white/30">{"// Full component schema"}</span>
                {"\n"}
                <span className="text-white/50">{"getManifest(\"Button\")"}</span>
              </code>
            </pre>
          </div>
          <div className="rounded-lg bg-[#080808] p-4">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/20">Tokens</div>
            <pre className="text-[12px] leading-[1.6]">
              <code>
                <span className="text-orange-400">{"import"}</span>
                <span className="text-white/40">{" { "}</span>
                <span className="text-white/60">{"tokens"}</span>
                <span className="text-white/40">{" } "}</span>
                <span className="text-orange-400">{"from"}</span>
                {"\n"}
                <span className="text-green-400/60">{"  \"@raydenui/ai/tokens\""}</span>
                {"\n\n"}
                <span className="text-white/30">{"// Colors, spacing, typography"}</span>
                {"\n"}
                <span className="text-white/50">{"tokens.colors.primary[\"500\"]"}</span>
              </code>
            </pre>
          </div>
          <div className="rounded-lg bg-[#080808] p-4">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/20">Recipes</div>
            <pre className="text-[12px] leading-[1.6]">
              <code>
                <span className="text-orange-400">{"import"}</span>
                <span className="text-white/40">{" { "}</span>
                <span className="text-white/60">{"getAllRecipes"}</span>
                <span className="text-white/40">{" } "}</span>
                <span className="text-orange-400">{"from"}</span>
                {"\n"}
                <span className="text-green-400/60">{"  \"@raydenui/ai/recipes\""}</span>
                {"\n\n"}
                <span className="text-white/30">{"// Pre-built layout patterns"}</span>
                {"\n"}
                <span className="text-white/50">{"getAllRecipes()"}</span>
              </code>
            </pre>
          </div>
          <div className="rounded-lg bg-[#080808] p-4">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/20">Rules</div>
            <pre className="text-[12px] leading-[1.6]">
              <code>
                <span className="text-orange-400">{"import"}</span>
                <span className="text-white/40">{" { "}</span>
                <span className="text-white/60">{"validateComponentUsage"}</span>
                <span className="text-white/40">{" } "}</span>
                {"\n"}
                <span className="text-orange-400">{"from"}</span>
                <span className="text-green-400/60">{" \"@raydenui/ai/rules\""}</span>
                {"\n\n"}
                <span className="text-white/30">{"// Validate component nesting"}</span>
                {"\n"}
                <span className="text-white/50">{"validateNesting(\"Table\", \"TableRow\")"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Component grid by category */}
      {categories.map((cat) => {
        const items = componentRegistry.filter((c) => c.category === cat.key);
        if (items.length === 0) return null;

        return (
          <div key={cat.key} className="mb-12">
            <h2 className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">
              {cat.label}
            </h2>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((comp, index) => (
                <InView key={comp.slug} delayMs={index * 55}>
                  <Link
                    href={`/components/${comp.slug}`}
                    className="group block rounded-lg border border-white/4 bg-dark-card p-4"
                  >
                    <div className="mb-3 flex min-h-[68px] items-center rounded-md border border-white/10 bg-[#0b0f16] p-3">
                      <ComponentPreview slug={comp.slug} />
                    </div>
                    <div className="text-[13px] font-medium text-white">
                      {comp.name}
                    </div>
                    <p className="mt-1 text-[11px] leading-normal text-white/25 line-clamp-2">
                      {comp.description}
                    </p>
                  </Link>
                </InView>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

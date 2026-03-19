import type { Metadata } from "next";
import Link from "next/link";
import { componentRegistry, categories } from "@/lib/component-registry";
import ComponentPreview from "@/components/docs/ComponentPreview";
import InView from "@/components/docs/InView";
import LiveDemo from "@/components/docs/LiveDemo";

export const metadata: Metadata = {
  title: "Rayden UI Components — React Tailwind library",
  description:
    "Browse 24+ Rayden UI React components and blocks — buttons, inputs, tables, sidebars, alerts, and more, all built on Tailwind CSS v4.",
};

const loginBlockCode = `
<div className="w-full max-w-md mx-auto rounded-2xl border border-white/10 bg-[#050505] p-6 space-y-4">
  <div className="space-y-1">
    <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">Login block</p>
    <h3 className="text-lg font-medium text-white">Sign in to your workspace</h3>
    <p className="text-xs text-white/40">Use your email or SSO provider to continue.</p>
  </div>
  <div className="space-y-3">
    <Input label="Email" placeholder="you@company.com" />
    <Input type="password" label="Password" placeholder="••••••••" />
    <div className="flex items-center justify-between text-xs text-white/40">
      <label className="inline-flex items-center gap-2">
        <Checkbox />
        <span>Remember me</span>
      </label>
      <button className="text-orange-400 hover:text-orange-300">Forgot password?</button>
    </div>
    <Button variant="primary" className="w-full">
      Continue
    </Button>
  </div>
  <div className="flex items-center gap-2 pt-1">
    <div className="h-px flex-1 bg-white/10" />
    <span className="text-[10px] uppercase tracking-[0.18em] text-white/30">Or continue with</span>
    <div className="h-px flex-1 bg-white/10" />
  </div>
  <div className="flex gap-2">
    <Button variant="ghost" className="w-full border-white/10 bg-white/5">
      <Icon name="github" className="mr-2 h-3.5 w-3.5" />
      GitHub
    </Button>
    <Button variant="ghost" className="w-full border-white/10 bg-white/5">
      <Icon name="google" className="mr-2 h-3.5 w-3.5" />
      Google
    </Button>
  </div>
</div>
`;

const notificationsBlockCode = `
<div className="w-full max-w-md mx-auto rounded-2xl border border-white/10 bg-[#050505] p-6 space-y-4 overflow-hidden [&_p]:break-words [&_*]:break-words">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">Notifications block</p>
      <h3 className="text-lg font-medium text-white">Latest activity</h3>
    </div>
    <Badge tone="neutral" size="sm">3 new</Badge>
  </div>
  <div className="space-y-2">
    <ActivityItem size="sm">
      <ActivityContent
        title="Payment received"
        description="You were paid $1,250 for March design sprint"
        meta="2m ago • Finance"
      />
    </ActivityItem>
    <Divider />
    <ActivityItem size="sm">
      <ActivityContent
        title="New comment"
        description="Alex left feedback on Onboarding checklist"
        meta="18m ago • Projects"
      />
    </ActivityItem>
    <Divider />
    <ActivityItem size="sm">
      <ActivityContent
        title="Deployment completed"
        description="rayden-ui-web@v1.2.0 deployed to production"
        meta="29m ago • Deploys"
      />
    </ActivityItem>
  </div>
  <button className="mt-1 w-full rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 hover:bg-white/8">
    View all activity
  </button>
</div>
`;

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
      <div id="blocks" className="mb-16 rounded-xl border border-white/4 bg-dark-card p-6">
        <div className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-orange-400/70">
          Blocks
        </div>
        <p className="mb-4 text-[13px] leading-relaxed text-white/45">
          Pre-built Rayden blocks composed from primitives — drop in complete flows like login,
          notifications, tables, and dashboards.
        </p>
        <div className="mb-4 grid gap-2 text-[12px] text-white/55 sm:grid-cols-2">
          <ul className="space-y-1.5">
            <li id="block-login">
              <span className="text-white/75">LoginBlock</span>
              <span className="text-white/30"> — Auth layout with social providers</span>
            </li>
            <li id="block-notifications">
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

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
              Login block playground
            </div>
            <LiveDemo code={loginBlockCode} />
          </div>
          <div>
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
              Notifications block playground
            </div>
            <LiveDemo code={notificationsBlockCode} />
          </div>
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

import type { Metadata } from "next";
import Link from "next/link";
import LiveDemo from "@/components/docs/LiveDemo";

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
      <Checkbox label="Remember me" />
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
    <Button variant="grey" appearance="outlined" size="sm" className="w-full border-white/10 bg-white/5">
      <Icon name="github" className="mr-2 h-3.5 w-3.5" />
      GitHub
    </Button>
    <Button variant="grey" appearance="outlined" size="sm" className="w-full border-white/10 bg-white/5">
      <Icon name="google" className="mr-2 h-3.5 w-3.5" />
      Google
    </Button>
  </div>
</div>
`;

const notificationsBlockCode = `
<div className="w-full max-w-md mx-auto rounded-2xl border border-white/10 bg-[#050505] p-6 space-y-4">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">Notifications block</p>
      <h3 className="text-lg font-medium text-white">Latest activity</h3>
    </div>
    <Badge color="neutral" size="sm">3 new</Badge>
  </div>
  <div className="space-y-2">
    <ActivityItem
      connector="top"
      timestamp="2m ago"
      text={<span className="text-white/75">Payment received <strong>$1,250</strong></span>}
    />
    <Divider />
    <ActivityItem
      connector="middle"
      timestamp="18m ago"
      text={<span className="text-white/75">New comment <strong>onboarding checklist</strong></span>}
    />
    <Divider />
    <ActivityItem
      connector="last"
      timestamp="29m ago"
      text={<span className="text-white/75">Deployment completed <strong>v1.2.0</strong></span>}
    />
  </div>
  <button className="mt-1 w-full rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 hover:bg-white/8">
    View all activity
  </button>
</div>
`;

const tableBlockCode = `
<div className="w-full max-w-3xl mx-auto rounded-2xl border border-white/10 bg-[#050505] p-5 space-y-4">
  <div className="flex items-center justify-between gap-2">
    <div>
      <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">Table block</p>
      <h3 className="text-lg font-medium text-white">Billing overview</h3>
    </div>
    <Button size="sm" variant="grey" appearance="outlined" className="border-white/15 bg-white/5 text-white/80 hover:bg-white/10">
      Export CSV
    </Button>
  </div>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Amount</TableHead>
        <TableHead>Date</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>#INV-2043</TableCell>
        <TableCell>
          <Badge color="success" size="sm">Paid</Badge>
        </TableCell>
        <TableCell>$1,200.00</TableCell>
        <TableCell>Mar 02</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>#INV-2042</TableCell>
        <TableCell>
          <Badge color="warning" size="sm">Pending</Badge>
        </TableCell>
        <TableCell>$890.00</TableCell>
        <TableCell>Feb 27</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>#INV-2041</TableCell>
        <TableCell>
          <Badge color="neutral" size="sm">Draft</Badge>
        </TableCell>
        <TableCell>$420.00</TableCell>
        <TableCell>Feb 19</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</div>
`;

const searchableTableBlockCode = `
<div className="w-full max-w-3xl mx-auto rounded-2xl border border-white/10 bg-[#050505] p-5 space-y-4">
  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">Searchable table block</p>
      <h3 className="text-lg font-medium text-white">Team members</h3>
    </div>
    <div className="flex gap-2">
      <Input size="sm" placeholder="Search by name or email" />
      <Select label="Role" placeholder="Role" defaultValue="all">
        <SelectOption value="all">All</SelectOption>
        <SelectOption value="admin">Admin</SelectOption>
        <SelectOption value="member">Member</SelectOption>
      </Select>
    </div>
  </div>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Role</TableHead>
        <TableHead>Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Alex Carter</TableCell>
        <TableCell>Admin</TableCell>
        <TableCell>
          <Badge color="success" size="sm">Active</Badge>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Mei Chen</TableCell>
        <TableCell>Member</TableCell>
        <TableCell>
          <Badge color="neutral" size="sm">Invited</Badge>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jonas Müller</TableCell>
        <TableCell>Member</TableCell>
        <TableCell>
          <Badge color="warning" size="sm">Suspended</Badge>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</div>
`;

const quickSendBlockCode = `
<div className="w-full max-w-md mx-auto rounded-2xl border border-white/10 bg-[#050505] p-5 space-y-4">
  <div className="space-y-1">
    <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">QuickSend block</p>
    <h3 className="text-lg font-medium text-white">Send funds instantly</h3>
  </div>
  <div className="space-y-3">
    <Input label="Recipient" placeholder="@handle or email" />
    <div className="flex gap-2">
      <Input label="Amount" placeholder="0.00" />
      <Select label="Currency" placeholder="USD" defaultValue="usd">
        <SelectOption value="usd">USD</SelectOption>
        <SelectOption value="eur">EUR</SelectOption>
      </Select>
    </div>
    <Button variant="primary" className="w-full">
      Review transfer
    </Button>
  </div>
  <div className="flex items-center justify-between pt-1 text-[11px] text-white/40">
    <span>Recent: alex@orbit.studio</span>
    <button className="text-orange-400 hover:text-orange-300">View history</button>
  </div>
</div>
`;

const recentTransactionsBlockCode = `
<div className="w-full max-w-md mx-auto rounded-2xl border border-white/10 bg-[#050505] p-5 space-y-3">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">RecentTransactions block</p>
      <h3 className="text-lg font-medium text-white">Recent activity</h3>
    </div>
    <Button size="sm" variant="grey" appearance="outlined" className="text-xs text-white/60 hover:text-white hover:bg-white/10">
      View all
    </Button>
  </div>
  <div className="space-y-2 text-sm">
    <div className="flex items-center justify-between rounded-xl bg-white/3 px-3 py-2">
      <span className="text-white/80">Payout to Stripe</span>
      <span className="text-xs text-white/50">- $420.00</span>
    </div>
    <div className="flex items-center justify-between rounded-xl bg-white/3 px-3 py-2">
      <span className="text-white/80">Refund from Linear</span>
      <span className="text-xs text-white/50">+ $79.00</span>
    </div>
    <div className="flex items-center justify-between rounded-xl bg-white/3 px-3 py-2">
      <span className="text-white/80">Invoice paid</span>
      <span className="text-xs text-white/50">+ $1,200.00</span>
    </div>
  </div>
</div>
`;

const emptyStateBlockCode = `
<div className="w-full max-w-md mx-auto rounded-2xl border border-white/10 bg-[#050505] p-6 space-y-4 text-center">
  <EmptyStateIllustration name="inbox" size={96} colored />
  <div className="space-y-2">
    <h3 className="text-lg font-medium text-white">No data yet</h3>
    <p className="text-xs text-white/45">
      Plug this block into dashboards that start empty — keep the screen feeling intentional while you wait
      for real usage.
    </p>
  </div>
  <Button variant="primary" className="w-full">
    Create your first record
  </Button>
</div>
`;

export const metadata: Metadata = {
  title: "Rayden UI Blocks — Composed flows",
  description:
    "Pre-built Rayden UI blocks composed from primitives — login, notifications, tables, and more.",
};

export default function BlocksPage() {
  return (
    <div className="mx-auto max-w-4xl py-4">
      <div className="mb-16">
        <Link
          href="/components"
          className="mb-3 inline-flex items-center gap-1 text-[11px] text-white/35 transition-colors hover:text-white/70"
        >
          <span className="text-[14px] leading-none">←</span>
          <span>Back to components</span>
        </Link>
        <div className="section-label mb-4">Blocks</div>
        <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
          Composed Rayden UI blocks
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-white/35">
          Opinionated combinations of primitives for common product flows. Copy, tweak, or wire them
          directly into your app while keeping full control over the underlying components.
        </p>
      </div>

      <div className="mb-14 space-y-12">
        <section id="login-block" className="space-y-4">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/35">
              LoginBlock
            </h2>
            <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-white/45">
              Branded auth surface with email/password, remember-me, and SSO buttons. Use it as the
              hero of your authentication route or embed it in a modal.
            </p>
          </div>
          <LiveDemo code={loginBlockCode} />
        </section>

        <section id="notifications-block" className="space-y-4">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/35">
              NotificationsBlock
            </h2>
            <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-white/45">
              A compact activity rail showing payments, comments, and deploys in one place. Ideal
              for sidebars, dashboards, or notification center pages.
            </p>
          </div>
          <LiveDemo code={notificationsBlockCode} />
        </section>

        <section id="table-block" className="space-y-4">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/35">
              TableBlock
            </h2>
            <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-white/45">
              Billing-style data table with status chips and a compact header. Great for payments,
              invoices, and admin dashboards.
            </p>
          </div>
          <LiveDemo code={tableBlockCode} />
        </section>

        <section id="searchable-table-block" className="space-y-4">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/35">
              SearchableTableBlock
            </h2>
            <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-white/45">
              Table plus search and role filter controls wired into the header so you can drop in a
              full people or data directory surface.
            </p>
          </div>
          <LiveDemo code={searchableTableBlockCode} />
        </section>

        <section id="quicksend-block" className="space-y-4">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/35">
              QuickSendBlock
            </h2>
            <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-white/45">
              A focused send form with amount, currency, and recent recipient helper text — ideal
              for the top of a payments dashboard.
            </p>
          </div>
          <LiveDemo code={quickSendBlockCode} />
        </section>

        <section id="recent-transactions-block" className="space-y-4">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/35">
              RecentTransactionsBlock
            </h2>
            <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-white/45">
              A compact list of recent debits and credits. Drop it into sidebars or beneath
              analytics for quick, scannable history.
            </p>
          </div>
          <LiveDemo code={recentTransactionsBlockCode} />
        </section>

        <section id="empty-state-block" className="space-y-4">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/35">
              EmptyStateBlock
            </h2>
            <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-white/45">
              Illustration-driven empty state with a primary CTA — reuse it across tables, cards,
              and entire pages when there is no data yet.
            </p>
          </div>
          <LiveDemo code={emptyStateBlockCode} />
        </section>
      </div>
    </div>
  );
}


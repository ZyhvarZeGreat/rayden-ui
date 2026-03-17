interface ComponentPreviewProps {
  slug: string;
}

function Dot({ className = "" }: { className?: string }) {
  return <span className={`h-2 w-2 rounded-full bg-orange-400/80 ${className}`} />;
}

export default function ComponentPreview({ slug }: ComponentPreviewProps) {
  switch (slug) {
    case "button":
    case "button-group":
      return (
        <div className="flex gap-2">
          <div className="h-7 w-20 rounded-md bg-orange-500/80" />
          <div className="h-7 w-16 rounded-md border border-white/20 bg-white/5" />
        </div>
      );
    case "input":
    case "select":
      return <div className="h-8 w-full rounded-md border border-white/15 bg-white/5" />;
    case "checkbox":
    case "radio":
    case "toggle":
      return (
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded border border-white/30 bg-white/5" />
          <div className="h-2 w-24 rounded bg-white/20" />
        </div>
      );
    case "chip":
    case "badge":
      return (
        <div className="flex gap-2">
          <div className="h-6 w-16 rounded-full bg-white/10" />
          <div className="h-6 w-14 rounded-full bg-orange-500/20" />
        </div>
      );
    case "file-upload":
      return (
        <div className="flex h-16 w-full items-center justify-center rounded-md border border-dashed border-white/25 bg-white/3 text-[10px] text-white/40">
          Drop files
        </div>
      );
    case "tabs":
      return (
        <div className="flex gap-3 border-b border-white/15 pb-2">
          <div className="h-2 w-12 rounded bg-orange-400/80" />
          <div className="h-2 w-10 rounded bg-white/20" />
          <div className="h-2 w-8 rounded bg-white/20" />
        </div>
      );
    case "breadcrumb":
    case "pagination":
      return (
        <div className="flex items-center gap-2 text-white/35">
          <Dot />
          <Dot className="bg-white/30" />
          <Dot className="bg-white/20" />
        </div>
      );
    case "sidebar-menu":
      return (
        <div className="grid w-full grid-cols-[24px_1fr] gap-2">
          <div className="h-12 rounded bg-white/10" />
          <div className="space-y-2">
            <div className="h-2 w-16 rounded bg-white/30" />
            <div className="h-2 w-20 rounded bg-white/20" />
          </div>
        </div>
      );
    case "dropdown-menu":
      return (
        <div className="w-28 rounded-md border border-white/15 bg-[#0d131d] p-2">
          <div className="h-2 w-12 rounded bg-white/30" />
          <div className="mt-2 h-2 w-16 rounded bg-white/20" />
        </div>
      );
    case "avatar":
    case "activity-feed":
      return (
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-linear-to-br from-orange-300/70 to-orange-600/80" />
          <div className="space-y-1">
            <div className="h-2 w-20 rounded bg-white/30" />
            <div className="h-2 w-14 rounded bg-white/20" />
          </div>
        </div>
      );
    case "table":
    case "metrics-card":
      return (
        <div className="w-full rounded-md border border-white/15 bg-white/3 p-2">
          <div className="mb-2 h-2 w-16 rounded bg-white/30" />
          <div className="h-2 w-full rounded bg-white/10" />
        </div>
      );
    case "empty-state":
      return <div className="h-14 w-14 rounded-xl bg-orange-500/15 ring-1 ring-orange-400/30" />;
    case "alert":
      return <div className="h-8 w-full rounded-md border border-amber-400/25 bg-amber-500/10" />;
    case "progress-bar":
      return (
        <div className="w-full rounded-full bg-white/10">
          <div className="h-2 w-2/3 rounded-full bg-orange-400/80" />
        </div>
      );
    case "progress-circle":
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-orange-400/80 border-r-white/10 text-[10px] text-white/60">
          72%
        </div>
      );
    case "tooltip":
      return (
        <div className="relative">
          <div className="h-7 w-14 rounded-md bg-white/10" />
          <div className="absolute -top-7 left-1/2 h-5 w-16 -translate-x-1/2 rounded bg-[#0d131d] text-center text-[9px] leading-5 text-white/60 ring-1 ring-white/10">
            Tooltip
          </div>
        </div>
      );
    case "divider":
      return <div className="h-px w-full bg-white/20" />;
    case "icon":
      return (
        <div className="flex gap-2">
          <Dot />
          <Dot className="bg-white/50" />
          <Dot className="bg-white/30" />
        </div>
      );
    default:
      return <div className="h-10 w-full rounded-md border border-white/15 bg-white/3" />;
  }
}

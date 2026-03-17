interface PropDef {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export default function PropsTable({ props }: { props: PropDef[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/[0.04]">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="border-b border-white/[0.04] bg-dark-card">
            <th className="px-4 py-2.5 text-left text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">Prop</th>
            <th className="px-4 py-2.5 text-left text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">Type</th>
            <th className="px-4 py-2.5 text-left text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">Default</th>
            <th className="px-4 py-2.5 text-left text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b border-white/[0.03] last:border-0">
              <td className="px-4 py-2.5">
                <code className="rounded bg-orange-500/8 px-1.5 py-0.5 text-[12px] text-orange-400">{prop.name}</code>
              </td>
              <td className="px-4 py-2.5">
                <code className="text-[12px] text-white/35">{prop.type}</code>
              </td>
              <td className="px-4 py-2.5 text-[12px] text-white/25">{prop.default ?? "—"}</td>
              <td className="px-4 py-2.5 text-[12px] text-white/40">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type ScopeItem = {
  key: string
  title: string
  description: string
  status: string
}

type ScopeRowProps = {
  item: ScopeItem
}

export default function ScopeRow({ item }: ScopeRowProps) {
  const isRoadmap = item.status === 'Roadmap'

  return (
    <div className="grid grid-cols-1 items-stretch gap-4 border-b border-ink/10 py-4 md:grid-cols-[120px_1fr_auto] md:items-center">
      <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">{item.key}</div>
      <div>
        <div className="font-medium text-ink">{item.title}</div>
        <div className="mt-1 text-sm leading-normal text-muted">{item.description}</div>
      </div>
      <div
        className={`box-border inline-flex items-center justify-center justify-self-start rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] md:justify-self-auto ${
          isRoadmap
            ? 'border-flag bg-flag-soft text-flag'
            : 'border-verified bg-verified-soft text-verified'
        }`}
      >
        {item.status}
      </div>
    </div>
  )
}

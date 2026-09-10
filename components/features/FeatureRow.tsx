export type Tone = 'verified' | 'flag' | 'muted'

export type ChipLine = {
  text: string
  tone: Tone
}

export type FeatureItem = {
  category: string
  title: string
  description: string
  chips: ChipLine[]
  tone: Tone
}

type FeatureRowProps = {
  item: FeatureItem
}

const dotClasses: Record<Tone, string> = {
  verified: 'bg-verified',
  flag: 'bg-flag',
  muted: 'bg-muted'
}

export default function FeatureRow({ item }: FeatureRowProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-4 border-b border-ink/10 py-6 md:grid-cols-[140px_1fr_280px] md:items-center">
      <div
        className={`font-mono text-[11px] uppercase tracking-[0.08em] ${
          item.tone === 'flag' ? 'text-flag' : 'text-muted'
        }`}
      >
        {item.category}
      </div>

      <div>
        <div className="font-display text-xl font-semibold text-ink">{item.title}</div>
        <p className="m-0 mt-2 max-w-[560px] text-sm leading-[1.6] text-muted">
          {item.description}
        </p>
      </div>

      <div className="box-border flex flex-col gap-3 divide-y divide-ink/10 rounded-lg border border-ink bg-paper p-4">
        {item.chips.map((chip) => (
          <div key={chip.text} className="flex items-center gap-2 pt-3 text-sm text-ink first:pt-0">
            <span className={`h-2 w-2 shrink-0 rounded-full ${dotClasses[chip.tone]}`} />
            <span>{chip.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

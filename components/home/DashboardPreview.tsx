export type DashboardStat = {
  value: string
  label: string
}

export type DashboardRow = {
  label: string
  percent: number
  tone: 'verified' | 'flag' | 'muted'
}

const DEFAULT_STATS: DashboardStat[] = [
  { value: '128', label: 'Assignments open' },
  { value: '94%', label: 'On-time closure' },
  { value: '312', label: 'Follow-ups tracked' }
]

const DEFAULT_ROWS: DashboardRow[] = [
  { label: 'ISO 27001 — Access control review', percent: 88, tone: 'verified' },
  { label: 'Vendor logistics audit — Plant 4', percent: 42, tone: 'flag' },
  { label: 'Franchisee compliance — West zone', percent: 10, tone: 'muted' },
  { label: 'Sales & distribution — Region 2', percent: 100, tone: 'verified' }
]

const dotClasses: Record<DashboardRow['tone'], string> = {
  verified: 'bg-verified',
  flag: 'bg-flag',
  muted: 'bg-muted'
}

const barClasses: Record<DashboardRow['tone'], string> = {
  verified: 'bg-verified',
  flag: 'bg-flag',
  muted: 'bg-muted'
}

type DashboardPreviewProps = {
  stats?: DashboardStat[]
  rows?: DashboardRow[]
}

export default function DashboardPreview({
  stats = DEFAULT_STATS,
  rows = DEFAULT_ROWS
}: DashboardPreviewProps) {
  return (
    <div className="box-border rounded-2xl border-2 border-ink bg-white p-6">
      <div className="flex items-center justify-between border-b border-ink/10 pb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
        <span>ANUGATO AI BHARAT — Live dashboard</span>
        <span>Q3 · IT audit</span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="box-border border border-ink px-3 py-4">
            <div className="font-display text-2xl font-normal leading-none text-ink md:text-[28px]">
              {stat.value}
            </div>
            <div className="mt-2 text-xs leading-snug text-muted">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center gap-3">
            <span className={`h-2 w-2 shrink-0 rounded-full ${dotClasses[row.tone]}`} />
            <span className="flex-1 truncate text-sm text-ink">{row.label}</span>
            <span className="h-1.5 w-24 shrink-0 overflow-hidden rounded-full bg-paper">
              <span
                className={`block h-full rounded-full ${barClasses[row.tone]}`}
                style={{ width: `${row.percent}%` }}
              />
            </span>
            <span className="w-9 shrink-0 text-right text-xs text-muted">{row.percent}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

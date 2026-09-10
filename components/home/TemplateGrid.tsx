import Card from '@/components/ui/Card'

const departments = [
  { code: 'ISO', title: 'ISO Audit', items: ['OH&S', 'ISO 9001 & QMS'] },
  { code: 'IT', title: 'IT Audit', items: ['ISO 27001 audit', 'Security audit'] },
  { code: 'INTERNAL', title: 'Internal Audit', items: ['IC audit', 'Internal audit'] }
]

export default function TemplateGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {departments.map((department) => (
        <Card key={department.code}>
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
            Department / {department.code}
          </div>
          <div className="mt-3 font-display text-2xl font-semibold text-ink">
            {department.title}
          </div>
          <ul className="m-0 mt-4 flex list-none flex-col gap-2 p-0">
            {department.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink">
                <span className="h-2 w-2 shrink-0 bg-verified" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  )
}

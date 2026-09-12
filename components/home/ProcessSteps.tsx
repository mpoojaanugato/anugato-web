const steps = [
  {
    index: '01',
    label: 'Plan',
    title: 'Plan',
    description:
      'Build task banks, checklists and control points. Schedule assignments and allocate resources across the year.'
  },
  {
    index: '02',
    label: 'Execute',
    title: 'Execute',
    description:
      'Score with Yes/No, weights, points or ISO scales. Attach annexures. Audit on-the-go from the mobile app.'
  },
  {
    index: '03',
    label: 'Track',
    title: 'Track',
    description:
      'Custom review workflows per assignment, live dashboards, and one-click history of past observations.'
  },
  {
    index: '04',
    label: 'Report',
    title: 'Report',
    description:
      'One-click, print-ready reports in Word and Excel. Customisable dashboards for your own template.'
  },
  {
    index: '05',
    label: 'Follow-up',
    title: 'Follow-up',
    description:
      'Record auditee responses, raise ATRs, and give auditees limited access to close items directly.'
  }
]

export default function ProcessSteps() {
  return (
    <div className="box-border grid grid-cols-1 divide-y divide-ink border border-ink lg:grid-cols-5 lg:divide-x lg:divide-y-0">
      {steps.map((step) => (
        <div key={step.label} className="box-border p-6">
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-verified">
            {step.index} / {step.label}
          </div>
          <div className="mt-3 font-display text-xl font-semibold text-ink">{step.title}</div>
          <p className="m-0 mt-2 text-sm leading-[1.6] text-muted">{step.description}</p>
        </div>
      ))}
    </div>
  )
}

const cards = [
  {
    label: 'Mission',
    title:
      'Empower managements with digital audit solutions that drive transparency and compliance.',
    description:
      'We are committed to a highly customisable platform that supports diverse audit functions.'
  },
  {
    label: 'Vision',
    title: 'The global platform for customisable audit management.',
    description:
      'Empowering organisations to ensure compliance through smart, digital, flexible and risk-based auditing.'
  }
]

export default function MissionVisionGrid() {
  return (
    <div className="box-border grid grid-cols-1 border border-ink/10 bg-white md:grid-cols-2">
      {cards.map((card, index) => (
        <div
          key={card.label}
          className={`box-border p-10 md:p-12 ${
            index === 0 ? 'border-b border-ink/10 md:border-b-0 md:border-r' : ''
          }`}
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
            {card.label}
          </div>
          <h3 className="m-0 mt-4 font-display text-2xl font-semibold leading-[1.25] text-ink md:text-[28px]">
            {card.title}
          </h3>
          <p className="m-0 mt-4 text-base leading-[1.75] text-muted">{card.description}</p>
        </div>
      ))}
    </div>
  )
}

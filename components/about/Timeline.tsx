import { timelineSteps } from './aboutData'

export default function Timeline() {
  return (
    <div>
      {timelineSteps.map((step, index) => (
        <div
          key={step.label}
          className={`relative border-l border-ink/10 pl-8 ${
            index !== timelineSteps.length - 1 ? 'pb-10' : ''
          }`}
        >
          <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-verified" />
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-verified">
            {step.label}
          </div>
          <div className="mt-2 font-display text-xl font-semibold text-ink">{step.title}</div>
          <p className="m-0 mt-2 max-w-[640px] text-sm leading-[1.6] text-muted">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  )
}

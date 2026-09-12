import { highlights } from './aboutData'

export default function HighlightFrame() {
  return (
    <div className="box-border h-full rounded-[28px] bg-ink p-4">
      <div className="box-border flex h-full flex-col justify-center rounded-[18px] bg-white px-8 py-6">
        {highlights.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 border-b border-ink/10 py-5 text-base text-ink last:border-b-0"
          >
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-verified" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

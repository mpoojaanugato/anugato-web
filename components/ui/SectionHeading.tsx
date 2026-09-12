type SectionHeadingProps = {
  title: string
  intro?: string
}

export default function SectionHeading({ title, intro }: SectionHeadingProps) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
      <h2 className="m-0 font-display text-4xl font-normal leading-[1.05] tracking-[-0.01em] text-ink md:text-[44px]">
        {title}
      </h2>
      {intro ? <p className="m-0 text-base leading-[1.75] text-muted">{intro}</p> : null}
    </div>
  )
}

import type { ReactNode } from 'react'

type NoteCalloutProps = {
  label: string
  children: ReactNode
}

export default function NoteCallout({ label, children }: NoteCalloutProps) {
  return (
    <div className="box-border flex w-full gap-4 border border-ink/10 bg-paper px-5 py-4">
      <div className="shrink-0 font-mono text-[11px] uppercase tracking-[0.08em] text-verified">
        {label}
      </div>
      <div className="text-base leading-[1.75] text-ink">{children}</div>
    </div>
  )
}

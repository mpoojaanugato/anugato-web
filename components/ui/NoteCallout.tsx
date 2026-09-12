import type { ReactNode } from 'react'

type NoteCalloutProps = {
  label: string
  tone?: 'verified' | 'flag'
  children: ReactNode
}

const toneClasses: Record<'verified' | 'flag', { bg: string; label: string }> = {
  verified: { bg: 'bg-paper', label: 'text-verified' },
  flag: { bg: 'bg-flag-soft', label: 'text-flag' }
}

export default function NoteCallout({ label, tone = 'verified', children }: NoteCalloutProps) {
  const { bg, label: labelClass } = toneClasses[tone]

  return (
    <div className={`box-border flex w-full gap-4 border border-ink ${bg} px-5 py-4`}>
      <div className={`shrink-0 font-mono text-[11px] uppercase tracking-[0.08em] ${labelClass}`}>
        {label}
      </div>
      <div className="text-base leading-[1.75] text-ink">{children}</div>
    </div>
  )
}

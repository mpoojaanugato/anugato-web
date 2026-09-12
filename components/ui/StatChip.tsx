import type { ReactNode } from 'react'

type StatChipProps = {
  children: ReactNode
}

export default function StatChip({ children }: StatChipProps) {
  return (
    <div className="box-border inline-flex items-center gap-3 rounded-xl bg-verified-soft px-4 py-3 text-[15px] text-ink">
      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-verified" />
      <span>{children}</span>
    </div>
  )
}

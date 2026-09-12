'use client'

import { forwardRef } from 'react'
import type { KeyboardEvent, MouseEvent, ReactNode } from 'react'

type PillProps = {
  active?: boolean
  children: ReactNode
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void
  value?: string
  className?: string
}

const Pill = forwardRef<HTMLButtonElement, PillProps>(function Pill(
  { active = false, children, onClick, onKeyDown, value, className = '' },
  ref
) {
  return (
    <button
      ref={ref}
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      onKeyDown={onKeyDown}
      value={value}
      className={`box-border inline-flex cursor-pointer items-center justify-center rounded-full border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.08em] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
        active ? 'border-ink bg-ink text-white' : 'border-ink/10 bg-white text-ink hover:bg-paper'
      } ${className}`}
    >
      {children}
    </button>
  )
})

export default Pill

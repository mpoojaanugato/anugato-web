import type { ReactNode } from 'react'

type EyebrowProps = {
  children: ReactNode
  leadingDash?: boolean
  color?: 'green' | 'ink' | 'muted'
  className?: string
}

const colorClasses: Record<string, string> = {
  green: 'text-verified',
  ink: 'text-ink',
  muted: 'text-muted'
}

export default function Eyebrow({
  children,
  leadingDash = false,
  color = 'green',
  className = ''
}: EyebrowProps) {
  return (
    <p
      className={`m-0 font-mono text-[11px] uppercase tracking-[0.08em] ${
        colorClasses[color] ?? colorClasses.muted
      } ${className}`}
    >
      {leadingDash ? '— ' : ''}
      {children}
    </p>
  )
}

import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return <div className={`box-border border border-ink bg-white p-7 ${className}`}>{children}</div>
}

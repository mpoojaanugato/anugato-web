import type { ReactNode } from 'react'

type SectionProps = {
  bg?: 'white' | 'paper' | 'ink'
  className?: string
  children: ReactNode
}

const backgrounds: Record<string, string> = {
  white: 'bg-white',
  paper: 'bg-paper',
  ink: 'bg-ink'
}

export default function Section({ bg = 'white', className = '', children }: SectionProps) {
  return (
    <section className={`${backgrounds[bg] ?? backgrounds.white} py-14 md:py-24 ${className}`}>
      {children}
    </section>
  )
}

'use client'

import Link from 'next/link'
import type { MouseEvent, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'white'
type ButtonSize = 'md' | 'lg'

type ButtonProps = {
  children: ReactNode
  to?: string
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  type?: 'button' | 'submit'
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const sizeClasses: Record<ButtonSize, string> = {
  md: 'h-12 px-5 text-sm',
  lg: 'h-14 px-6 text-base'
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'border-white/25 bg-ink text-white hover:border-white/40 hover:bg-ink-soft',
  secondary: 'border-ink/10 bg-white text-ink hover:bg-paper',
  ghost: 'border-transparent bg-transparent text-ink hover:bg-paper',
  white: 'border-transparent bg-white text-ink hover:bg-paper'
}

const baseClasses =
  'box-border inline-flex items-center justify-center border font-sans font-medium no-underline outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-white'

export default function Button({
  children,
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  onClick
}: ButtonProps) {
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  if (to) {
    return (
      <Link href={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

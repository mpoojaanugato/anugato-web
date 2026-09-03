import type { CSSProperties, ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  maxWidth?: CSSProperties['maxWidth']
  center?: boolean
  className?: string
}

export default function Container({
  children,
  maxWidth = '1200px',
  center = false,
  className = ''
}: ContainerProps) {
  return (
    <div
      className={`mx-auto box-border w-full px-6 ${center ? 'text-center' : ''} ${className}`}
      style={{ maxWidth }}
    >
      {children}
    </div>
  )
}

import type { CSSProperties, ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  maxWidth?: CSSProperties['maxWidth']
  center?: boolean
  className?: string
}

export default function Container({
  children,
  maxWidth,
  center = false,
  className = ''
}: ContainerProps) {
  return (
    <div
      className={`box-border w-full px-6 md:px-10 lg:px-16 xl:px-20 ${center ? 'text-center' : ''} ${className}`}
      style={maxWidth ? { maxWidth } : undefined}
    >
      {children}
    </div>
  )
}

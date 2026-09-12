'use client'

import { useRef } from 'react'
import type { KeyboardEvent } from 'react'
import Pill from './Pill'

type PillGroupProps = {
  options?: string[]
  value?: string
  onChange: (option: string) => void
  ariaLabel?: string
}

export default function PillGroup({
  options = [],
  value,
  onChange,
  ariaLabel = 'Feature categories'
}: PillGroupProps) {
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([])

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    event.preventDefault()

    const step = event.key === 'ArrowRight' ? 1 : -1
    const nextIndex = (currentIndex + step + options.length) % options.length
    buttonsRef.current[nextIndex]?.focus()
    onChange(options[nextIndex])
  }

  return (
    <div role="tablist" aria-label={ariaLabel} className="flex flex-wrap gap-3">
      {options.map((option, index) => (
        <Pill
          key={option}
          ref={(el) => {
            buttonsRef.current[index] = el
          }}
          active={value === option}
          onClick={() => onChange(option)}
          value={option}
          className="cursor-pointer"
          onKeyDown={(event) => handleKeyDown(event, index)}
        >
          {option}
        </Pill>
      ))}
    </div>
  )
}

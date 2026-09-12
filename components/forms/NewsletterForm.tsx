'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { usePathname } from 'next/navigation'
import { newsletterSchema } from '@/lib/validation'

type Status = 'idle' | 'loading' | 'success' | 'error'

type NewsletterFormProps = {
  sourcePage?: string
  variant?: 'pill' | 'compact'
}

const variantClasses = {
  pill: {
    input:
      'box-border h-14 flex-1 rounded-full border border-ink/10 bg-white px-5 font-sans text-sm text-ink outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
    button:
      'box-border h-14 shrink-0 rounded-full border-none bg-ink px-6 text-sm font-medium text-white outline-none transition-colors hover:bg-ink-soft focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:opacity-60'
  },
  compact: {
    input:
      'box-border h-12 flex-1 rounded border border-ink/10 bg-white px-4 font-sans text-base text-ink outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
    button:
      'box-border h-12 shrink-0 rounded-full border-none bg-ink px-6 text-sm font-medium text-white outline-none transition-colors hover:bg-ink-soft focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:opacity-60'
  }
}

export default function NewsletterForm({ sourcePage, variant = 'pill' }: NewsletterFormProps) {
  const pathname = usePathname()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const classes = variantClasses[variant]

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const parsed = newsletterSchema.safeParse({ email, source_page: sourcePage ?? pathname })
    if (!parsed.success) {
      setStatus('error')
      setErrorMessage(parsed.error.issues[0]?.message ?? 'Enter a valid email')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data)
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        setStatus('error')
        setErrorMessage(result.error ?? 'Something went wrong')
        return
      }

      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong — please try again')
    }
  }

  return (
    <div>
      <form className="flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={variant === 'pill' ? 'you@company.com' : 'Work email'}
          className={classes.input}
        />
        <button type="submit" disabled={status === 'loading'} className={classes.button}>
          {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
        </button>
      </form>

      {status === 'success' ? (
        <p className="m-0 mt-3 text-sm text-verified">Subscribed — check your inbox.</p>
      ) : null}
      {status === 'error' ? <p className="m-0 mt-3 text-sm text-flag">{errorMessage}</p> : null}
    </div>
  )
}

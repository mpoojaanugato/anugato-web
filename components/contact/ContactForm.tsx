'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import NoteCallout from '@/components/ui/NoteCallout'
import { leadSchema } from '@/lib/validation'

type Status = 'idle' | 'loading' | 'success' | 'error'

const inputClasses =
  'box-border h-12 w-full rounded border border-ink/10 bg-white px-4 font-sans text-sm text-ink outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-white'
const labelClasses = 'text-sm font-medium text-ink'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const searchParams = new URLSearchParams(window.location.search)

    const payload = {
      first_name: String(formData.get('first_name') ?? ''),
      last_name: String(formData.get('last_name') ?? ''),
      work_email: String(formData.get('work_email') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      company: String(formData.get('company') ?? ''),
      org_type: String(formData.get('org_type') ?? ''),
      message: String(formData.get('message') ?? ''),
      source_page: '/contact',
      utm_source: searchParams.get('utm_source') ?? undefined,
      utm_medium: searchParams.get('utm_medium') ?? undefined,
      utm_campaign: searchParams.get('utm_campaign') ?? undefined
    }

    const parsed = leadSchema.safeParse(payload)
    if (!parsed.success) {
      setStatus('error')
      setErrorMessage(parsed.error.issues[0]?.message ?? 'Please check your details')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/lead', {
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
      form.reset()
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong — please try again')
    }
  }

  return (
    <div>
      <h3 className="m-0 font-display text-2xl font-semibold text-ink">Send a message</h3>

      <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className={labelClasses} htmlFor="firstName">
              First name
            </label>
            <input
              id="firstName"
              name="first_name"
              type="text"
              placeholder="Aditi"
              className={inputClasses}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className={labelClasses} htmlFor="lastName">
              Last name
            </label>
            <input
              id="lastName"
              name="last_name"
              type="text"
              placeholder="Rao"
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className={labelClasses} htmlFor="workEmail">
              Work email
            </label>
            <input
              id="workEmail"
              name="work_email"
              type="email"
              placeholder="aditi@company.com"
              className={inputClasses}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className={labelClasses} htmlFor="phone">
              Phone
            </label>
            <input id="phone" name="phone" type="tel" placeholder="+91" className={inputClasses} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className={labelClasses} htmlFor="company">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Company name"
              className={inputClasses}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className={labelClasses} htmlFor="role">
              I am a
            </label>
            <select
              id="role"
              name="org_type"
              defaultValue="consulting_firm"
              className={inputClasses}
            >
              <option value="consulting_firm">Consulting firm</option>
              <option value="in_house">In-house audit team</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClasses} htmlFor="auditScope">
            What would you like to audit?
          </label>
          <textarea
            id="auditScope"
            name="message"
            rows={4}
            placeholder="e.g. ISO 27001 + Internal Audit across 3 plants"
            className="box-border w-full resize-y rounded border border-ink/10 bg-white px-4 py-3 font-sans text-sm text-ink outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="box-border h-14 w-full rounded border-none bg-ink text-sm font-medium text-white outline-none transition-colors hover:bg-ink-soft focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending…' : 'Request demo'}
        </button>

        {status === 'success' ? (
          <div className="box-border border border-verified bg-verified-soft px-5 py-4 text-sm text-ink">
            Thanks — we&apos;ll be in touch within one business day.
          </div>
        ) : null}
        {status === 'error' ? (
          <div className="box-border border border-flag bg-flag-soft px-5 py-4 text-sm text-ink">
            {errorMessage}
          </div>
        ) : null}

        <NoteCallout label="CRM —" tone="flag">
          Form posts to a webhook that creates/updates a Lead in the CRM (HubSpot/Zoho/Salesforce),
          tagged by source page and UTM params, with a GA4{' '}
          <span className="font-mono text-[13px]">generate_lead</span> event fired on submit.
        </NoteCallout>
      </form>
    </div>
  )
}

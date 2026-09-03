'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import Eyebrow from '@/components/ui/Eyebrow'
import PillGroup from '@/components/ui/PillGroup'
import StatChip from '@/components/ui/StatChip'
import StatBand from '@/components/ui/StatBand'
import CTABand from '@/components/ui/CTABand'
import NoteCallout from '@/components/ui/NoteCallout'
import ScopeRow from '@/components/ui/ScopeRow'

const pillOptions = ['ISO', 'IT', 'Internal']

export default function DesignSystemShowcase() {
  const [pillValue, setPillValue] = useState(pillOptions[0])

  return (
    <Section>
      <Container>
        <Eyebrow leadingDash>Design system showcase — Day 1</Eyebrow>
        <div className="mt-4">
          <SectionHeading
            title="Every ported primitive, one screen"
            intro="Temporary verification page — not a real route. Deleted once real pages land."
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button to="/">Primary (link)</Button>
          <Button variant="secondary" onClick={() => console.log('secondary clicked')}>
            Secondary (onClick)
          </Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="white" className="border border-ink/10">
            White
          </Button>
        </div>

        <div className="mt-10">
          <PillGroup options={pillOptions} value={pillValue} onChange={setPillValue} />
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <StatChip>40+ organisations onboarded</StatChip>
        </div>

        <div className="mt-10">
          <Card>
            <NoteCallout label="Note">
              Cards and callouts share the same border and spacing tokens.
            </NoteCallout>
          </Card>
        </div>

        <div className="mt-10">
          <ScopeRow
            item={{
              key: '01',
              title: 'ISO 9001 audit',
              description: 'Quality management scope.',
              status: 'Live'
            }}
          />
          <ScopeRow
            item={{
              key: '02',
              title: 'ISO 27001 audit',
              description: 'Information security scope.',
              status: 'Roadmap'
            }}
          />
        </div>
      </Container>

      <div className="mt-16">
        <StatBand
          stats={[
            { value: '40+', label: 'Organisations on ANUGATO AI BHARAT' },
            { value: '12', label: 'Audit types supported' },
            { value: '98%', label: 'Report turnaround SLA met' },
            { value: '6 yrs', label: 'Built by practising auditors' }
          ]}
        />
      </div>

      <div className="mt-16">
        <CTABand
          title="Every primitive checks out."
          description="This page is temporary — real pages land Day 2 onward."
          buttons={[{ label: 'Book a demo', to: '/contact' }]}
        />
      </div>
    </Section>
  )
}

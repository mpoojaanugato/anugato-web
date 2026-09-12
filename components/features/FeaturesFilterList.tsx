'use client'

import { useMemo, useState } from 'react'
import PillGroup from '@/components/ui/PillGroup'
import FeatureRow from './FeatureRow'
import type { FeatureItem } from './FeatureRow'

const filterOptions = ['All features', 'Plan', 'Execute', 'Track', 'Report', 'Follow-up']

const features: FeatureItem[] = [
  {
    category: 'PLAN',
    title: 'Customisable templates',
    description:
      'Build screens for tasks, checklists, observations, responses and follow-ups by department. Run several distinct audit templates within a single department.',
    tone: 'verified',
    chips: [
      { text: 'Template library', tone: 'verified' },
      { text: '42 checklists', tone: 'muted' }
    ]
  },
  {
    category: 'PLAN',
    title: 'Comprehensive planning',
    description:
      'Plan quarterly, half-yearly or on any interval your audit committee requires. Consulting firms can record future assignments and contracts.',
    tone: 'verified',
    chips: [{ text: 'FY26 plan — 84% scheduled', tone: 'verified' }]
  },
  {
    category: 'EXECUTE',
    title: 'Comprehensive task bank',
    description:
      'Build a detailed, tagged task list across assignments. Consulting firms can tag tasks by industry to build reusable checklists.',
    tone: 'muted',
    chips: [{ text: '1,204 tasks tagged', tone: 'muted' }]
  },
  {
    category: 'EXECUTE',
    title: 'Working paper management',
    description:
      'Upload and link working papers directly to a task or observation, giving managers on-demand access to build audit quality.',
    tone: 'verified',
    chips: [{ text: 'WP-2291.xlsx attached', tone: 'verified' }]
  },
  {
    category: 'TRACK',
    title: 'Real-time review',
    description:
      'A unique review workflow per assignment. Managers track progress from anywhere — no status calls needed.',
    tone: 'flag',
    chips: [{ text: 'Awaiting reviewer sign-off', tone: 'flag' }]
  },
  {
    category: 'TRACK',
    title: 'History at a click',
    description:
      'See past observations and remarks on the same task instantly, surfacing weak areas across audit cycles.',
    tone: 'muted',
    chips: [{ text: '3 prior cycles found', tone: 'muted' }]
  },
  {
    category: 'TRACK',
    title: 'Track verification of documents',
    description:
      'Auto-generate the list of documents to verify per task, and track received / partially received / verified status.',
    tone: 'verified',
    chips: [{ text: 'Verified 91/104', tone: 'verified' }]
  },
  {
    category: 'REPORT',
    title: 'One-click reporting',
    description:
      'Print-ready standard reports in Word and Excel, or fully customised reports built for your template.',
    tone: 'verified',
    chips: [{ text: 'Report_Q3_IT.docx', tone: 'verified' }]
  },
  {
    category: 'FOLLOW-UP',
    title: 'Follow-up / ATR',
    description:
      'Track open issues to closure through the follow-up module, with corrective-action tracking by function.',
    tone: 'flag',
    chips: [{ text: '6 items open past due', tone: 'flag' }]
  },
  {
    category: 'FOLLOW-UP',
    title: 'Auditee responses',
    description:
      'Capture responses directly in-app with an owner and a target date, so nothing closes without accountability.',
    tone: 'verified',
    chips: [{ text: 'Response logged — target 12 Sep', tone: 'verified' }]
  },
  {
    category: 'PLATFORM',
    title: 'Role-based access',
    description:
      'Create roles and control feature-level access — including restricted, confidential access for part-time auditors.',
    tone: 'muted',
    chips: [{ text: '5 roles configured', tone: 'muted' }]
  }
]

export default function FeaturesFilterList() {
  const [selected, setSelected] = useState(filterOptions[0])

  const visibleFeatures = useMemo(() => {
    if (selected === 'All features') return features
    return features.filter((feature) => feature.category === selected.toUpperCase())
  }, [selected])

  return (
    <div>
      <PillGroup options={filterOptions} value={selected} onChange={setSelected} />

      <div className="mt-10 border-t border-ink/10">
        {visibleFeatures.map((feature) => (
          <FeatureRow key={feature.title} item={feature} />
        ))}
      </div>
    </div>
  )
}

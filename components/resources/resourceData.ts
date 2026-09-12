export type Resource = {
  slug: string
  category: string
  title: string
  description: string
}

export const featuredResource: Resource = {
  slug: 'spreadsheet-audit-tracking-breaks-down',
  category: 'Internal Audit',
  title: 'Why spreadsheet-based audit tracking breaks down past 20 assignments',
  description:
    "A practitioner's look at where manual trackers lose reliability — and what to check for in a replacement system."
}

export const resources: Resource[] = [
  {
    slug: 'iso-27001-internal-audit-checklist',
    category: 'ISO & Compliance',
    title: 'A practical ISO 27001 internal audit checklist for 2026',
    description: 'What auditors actually verify, mapped to the current clause structure.'
  },
  {
    slug: 'risk-based-vs-checklist-it-audits',
    category: 'IT Audit',
    title: 'Risk-based vs checklist-based IT audits: choosing an approach',
    description: 'When a weighted risk matrix outperforms a fixed control list.'
  },
  {
    slug: 'franchisee-audit-programme-from-scratch',
    category: 'Operations',
    title: 'Setting up a franchisee audit programme from scratch',
    description: 'Scheduling, scoring and follow-up design for distributed outlets.'
  },
  {
    slug: 'writing-observations-auditees-act-on',
    category: 'Internal Audit',
    title: 'Writing observations auditees will actually act on',
    description: 'Structuring findings so follow-up closure rates go up, not down.'
  },
  {
    slug: 'multiple-client-audits-without-data-bleed',
    category: 'Consulting',
    title: 'Running multiple client audit engagements without data bleed',
    description: 'How isolated department environments work for consulting firms.'
  },
  {
    slug: 'inside-atr-follow-up-workflow',
    category: 'Product',
    title: "Inside ANUGATO AI BHARAT's follow-up / ATR workflow",
    description: 'A walkthrough of corrective-action tracking to closure.'
  }
]

export const filterOptions = ['All', 'ISO & Compliance', 'IT Audit', 'Internal Audit']

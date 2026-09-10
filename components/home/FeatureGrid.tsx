import {
  KeyRound,
  LayoutDashboard,
  LayoutGrid,
  ShieldCheck,
  Smartphone,
  TrendingUp
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Button from '@/components/ui/Button'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: LayoutDashboard,
    title: 'Insightful dashboards',
    description: 'Visual, real-time dashboards that adapt to your own audit template.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-based audits',
    description: 'Score, photograph and back up field observations right from your phone.'
  },
  {
    icon: ShieldCheck,
    title: 'Certification frameworks',
    description: 'Map tasks across ISO 9001, ISO 27001, COBIT and more in one place.'
  },
  {
    icon: TrendingUp,
    title: 'Risk-based audits',
    description: 'Customise your risk matrix, impact and likelihood scoring by organisation.'
  },
  {
    icon: LayoutGrid,
    title: 'One tool, every department',
    description: 'Internal, ISO, QMS and IT audit — dedicated, data-isolated environments.'
  },
  {
    icon: KeyRound,
    title: 'Role-based access',
    description: 'Grant restricted, confidential access to external and part-time auditors.'
  }
]

// Explicit per-cell borders for a 3-col × 2-row grid: right border on cols 0-1,
// bottom border on row 0 (both breakpoints) and on rows 0-1 while stacked to 1 column.
const cellBorderClasses = [
  'border-b border-ink md:border-b md:border-r',
  'border-b border-ink md:border-b md:border-r',
  'border-b border-ink md:border-b',
  'border-b border-ink md:border-b-0 md:border-r',
  'border-b border-ink md:border-b-0 md:border-r',
  'md:border-b-0'
]

export default function FeatureGrid() {
  return (
    <div>
      <div className="box-border grid grid-cols-1 border border-ink md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={feature.title} className={`box-border p-6 ${cellBorderClasses[index]}`}>
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-verified-soft text-verified">
              <feature.icon size={20} />
            </span>
            <div className="mt-4 font-sans text-base font-semibold text-ink">{feature.title}</div>
            <p className="m-0 mt-2 text-sm leading-[1.6] text-muted">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Button to="/features" variant="ghost" className="border-ink/10">
          See all features
        </Button>
      </div>
    </div>
  )
}

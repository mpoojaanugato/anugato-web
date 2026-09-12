import { IndianRupee } from 'lucide-react'
import Button from '@/components/ui/Button'

type Plan = {
  label: string
  description: string
  features: string[]
  cta: { label: string; to: string }
  highlighted?: boolean
  badge?: string
  custom?: boolean
}

const plans: Plan[] = [
  {
    label: 'Starter',
    description: 'Single department, up to 10 users',
    features: [
      '1 audit department',
      'Customisable templates',
      'Mobile audit app',
      'Standard Word / Excel reports',
      'Email support'
    ],
    cta: { label: 'Talk to sales', to: '/contact' }
  },
  {
    label: 'Professional',
    description: 'Multi-department, up to 50 users',
    features: [
      'Unlimited audit departments',
      'Risk-based audit matrix',
      'Certification framework mapping',
      'Custom reports & dashboards',
      'Role-based access controls',
      'Priority support'
    ],
    cta: { label: 'Book a demo', to: '/contact' },
    highlighted: true,
    badge: 'Most chosen'
  },
  {
    label: 'Enterprise',
    description: 'Unlimited users, dedicated environment',
    features: [
      'Everything in Professional',
      'Data-isolated department environments',
      'CRM & SSO integration',
      'Dedicated onboarding & SLA',
      'Consulting-firm multi-client mode'
    ],
    cta: { label: 'Contact sales', to: '/contact' },
    custom: true
  }
]

export default function PricingTable() {
  return (
    <div className="box-border grid grid-cols-1 gap-6 md:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.label}
          className={`relative box-border border border-ink p-8 md:p-10 ${
            plan.highlighted ? 'bg-ink text-white' : 'bg-white text-ink'
          }`}
        >
          {plan.badge ? (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-verified px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-white">
              {plan.badge}
            </span>
          ) : null}

          <div
            className={`font-mono text-[11px] uppercase tracking-[0.08em] ${
              plan.highlighted ? 'text-white/70' : 'text-muted'
            }`}
          >
            {plan.label}
          </div>

          {plan.custom ? (
            <div className="mt-4 font-display text-4xl font-semibold text-ink">Custom</div>
          ) : (
            <div className="mt-4 flex items-center gap-1 font-display text-4xl font-semibold">
              <IndianRupee size={28} strokeWidth={2.5} />
              <span>—</span>
            </div>
          )}

          <p
            className={`m-0 mt-3 text-sm leading-[1.6] ${
              plan.highlighted ? 'text-white/70' : 'text-muted'
            }`}
          >
            {plan.description}
          </p>

          <ul
            className={`m-0 mt-6 flex list-none flex-col p-0 ${
              plan.highlighted ? 'border-t border-white/10' : 'border-t border-ink/10'
            }`}
          >
            {plan.features.map((feature) => (
              <li
                key={feature}
                className={`py-3 text-sm ${
                  plan.highlighted ? 'border-b border-white/10' : 'border-b border-ink/10'
                } ${plan.highlighted ? 'text-white' : 'text-ink'} last:border-b-0`}
              >
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button
              to={plan.cta.to}
              variant={plan.highlighted ? 'white' : 'secondary'}
              className="w-full"
            >
              {plan.cta.label}
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

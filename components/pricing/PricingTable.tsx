import Button from '@/components/ui/Button'

export type Plan = {
  label: string
  description: string
  price_label: string
  features: string[]
  cta_label: string
  cta_path: string
  highlighted: boolean
  badge: string | null
}

export const fallbackPlans: Plan[] = [
  {
    label: 'Starter',
    description: 'Single department, up to 10 users',
    price_label: 'Custom',
    features: [
      '1 audit department',
      'Customisable templates',
      'Mobile audit app',
      'Standard Word / Excel reports',
      'Email support'
    ],
    cta_label: 'Talk to sales',
    cta_path: '/contact',
    highlighted: false,
    badge: null
  },
  {
    label: 'Professional',
    description: 'Multi-department, up to 50 users',
    price_label: 'Custom',
    features: [
      'Unlimited audit departments',
      'Risk-based audit matrix',
      'Certification framework mapping',
      'Custom reports & dashboards',
      'Role-based access controls',
      'Priority support'
    ],
    cta_label: 'Book a demo',
    cta_path: '/contact',
    highlighted: true,
    badge: 'Most chosen'
  },
  {
    label: 'Enterprise',
    description: 'Unlimited users, dedicated environment',
    price_label: 'Custom',
    features: [
      'Everything in Professional',
      'Data-isolated department environments',
      'CRM & SSO integration',
      'Dedicated onboarding & SLA',
      'Consulting-firm multi-client mode'
    ],
    cta_label: 'Contact sales',
    cta_path: '/contact',
    highlighted: false,
    badge: null
  }
]

type PricingTableProps = {
  plans?: Plan[]
}

export default function PricingTable({ plans = fallbackPlans }: PricingTableProps) {
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

          <div
            className={`mt-4 font-display text-4xl font-semibold ${
              plan.highlighted ? 'text-white' : 'text-ink'
            }`}
          >
            {plan.price_label}
          </div>

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
              to={plan.cta_path}
              variant={plan.highlighted ? 'white' : 'secondary'}
              className="w-full"
            >
              {plan.cta_label}
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

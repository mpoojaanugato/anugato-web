import { Mail, MapPin, Phone } from 'lucide-react'

const details = [
  {
    icon: MapPin,
    label: 'ANUGATO AI BHARAT',
    value: 'Survey#976, 2nd Main, near Manyata Tech Park, Hennur, Bengaluru – 560077'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 86187 01018'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'namaste@sarvinfo.com'
  }
]

export function MapPlaceholder() {
  return (
    <div className="flex h-full min-h-[280px] items-center justify-center bg-paper">
      <p className="m-0 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
        Map embed — Google Maps
      </p>
    </div>
  )
}

export default function LocationPanel() {
  return (
    <div>
      <h3 className="m-0 font-display text-2xl font-semibold text-ink">Visit us</h3>

      <div className="mt-6 flex flex-col">
        {details.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex items-start gap-4 border-b border-ink/10 py-5 first:pt-0 last:border-b-0 last:pb-0"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paper text-ink">
              <Icon size={18} />
            </span>
            <div>
              <div className="text-sm font-semibold text-ink">{label}</div>
              <div className="mt-1 text-sm leading-[1.6] text-muted">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

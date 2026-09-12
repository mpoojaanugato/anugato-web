import ContactForm from './ContactForm'
import BookingCard from './BookingCard'
import LocationPanel, { MapPlaceholder } from './LocationPanel'

// Explicit per-cell borders for a 2-col x 2-row grid.
const cellBorderClasses = [
  'border-b border-ink/10 md:border-b md:border-r',
  'border-b border-ink/10 md:border-b',
  'border-b border-ink/10 md:border-b-0 md:border-r',
  'md:border-b-0'
]

export default function ContactGrid() {
  return (
    <div className="box-border grid grid-cols-1 border border-ink/10 bg-white md:grid-cols-2">
      <div className={`box-border p-8 md:p-12 ${cellBorderClasses[0]}`}>
        <ContactForm />
      </div>
      <div className={`box-border p-8 md:p-12 ${cellBorderClasses[1]}`}>
        <BookingCard />
      </div>
      <div className={`box-border ${cellBorderClasses[2]}`}>
        <MapPlaceholder />
      </div>
      <div className={`box-border p-8 md:p-12 ${cellBorderClasses[3]}`}>
        <LocationPanel />
      </div>
    </div>
  )
}

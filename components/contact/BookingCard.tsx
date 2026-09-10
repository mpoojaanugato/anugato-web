import NoteCallout from '@/components/ui/NoteCallout'

const weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const dates = Array.from({ length: 14 }, (_, index) => index + 1)
const highlightedDates = new Set([3, 5, 9])
const slots = ['Wed 3 Sep · 10:00 AM IST', 'Wed 3 Sep · 2:30 PM IST', 'Fri 5 Sep · 11:00 AM IST']

export default function BookingCard() {
  return (
    <div>
      <h3 className="m-0 font-display text-2xl font-semibold text-ink">Or pick a time directly</h3>

      <div className="mt-6 box-border overflow-hidden border border-ink/10">
        <div className="bg-ink px-6 py-5">
          <p className="m-0 font-mono text-[11px] uppercase tracking-[0.08em] text-white/60">
            Calendly — 30 min demo
          </p>
          <p className="m-0 mt-2 font-display text-lg font-semibold leading-[1.3] text-white">
            Book time with the ANUGATO AI BHARAT team
          </p>
        </div>

        <div className="bg-paper p-5">
          <div className="grid grid-cols-7 gap-2">
            {weekdays.map((day, index) => (
              <div
                key={`${day}-${index}`}
                className="flex h-10 items-center justify-center rounded border border-ink/10 bg-white font-mono text-[11px] uppercase text-muted"
              >
                {day}
              </div>
            ))}
            {dates.map((date) => (
              <div
                key={date}
                className={`flex h-10 items-center justify-center rounded border text-sm ${
                  highlightedDates.has(date)
                    ? 'border-verified bg-verified font-semibold text-white'
                    : 'border-ink/10 bg-white text-ink'
                }`}
              >
                {date}
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-3">
            {slots.map((slot) => (
              <button
                key={slot}
                type="button"
                className="box-border h-12 rounded border border-ink/10 bg-white px-4 text-left text-sm text-ink outline-none transition-colors hover:bg-paper focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <NoteCallout label="Embed —" tone="flag">
          Replace this block with Calendly&apos;s inline widget script on the live build; on submit,
          Calendly&apos;s webhook syncs the booking to the CRM and pushes a GA4{' '}
          <span className="font-mono text-[13px]">book_demo</span> conversion event.
        </NoteCallout>
      </div>
    </div>
  )
}

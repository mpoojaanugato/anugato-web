import NewsletterForm from '@/components/forms/NewsletterForm'

export default function NewsletterBand() {
  return (
    <div className="max-w-xl">
      <h2 className="m-0 font-display text-3xl font-normal leading-[1.1] tracking-[-0.01em] text-ink md:text-4xl">
        Get audit best-practice notes in your inbox.
      </h2>
      <p className="m-0 mt-3 text-base leading-[1.75] text-muted">
        One short email a month. No spam — unsubscribe anytime.
      </p>
      <div className="mt-6">
        <NewsletterForm variant="pill" sourcePage="/resources" />
      </div>
    </div>
  )
}

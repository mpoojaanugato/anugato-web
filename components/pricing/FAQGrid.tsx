export type PricingFaq = {
  question: string
  answer: string
}

export const fallbackFaqs: PricingFaq[] = [
  {
    question: 'Can we run consulting-firm and in-house audits together?',
    answer: "Yes — each department's data stays isolated even on the same account."
  },
  {
    question: 'Is there a mobile app for field audits?',
    answer: 'Yes, included from the Starter plan, with offline capture and photo backup.'
  },
  {
    question: 'Do you support ISO 27001 and COBIT mapping?',
    answer: 'Yes, available from the Professional plan upward.'
  },
  {
    question: 'How is auditee access controlled?',
    answer: 'Auditees get a limited login scoped only to their open follow-up items.'
  }
]

// Explicit per-cell borders for a 2-col × 2-row grid.
const cellBorderClasses = [
  'border-b border-ink md:border-b md:border-r',
  'border-b border-ink md:border-b',
  'border-b border-ink md:border-b-0 md:border-r',
  'md:border-b-0'
]

type FAQGridProps = {
  faqs?: PricingFaq[]
}

export default function FAQGrid({ faqs = fallbackFaqs }: FAQGridProps) {
  return (
    <div className="box-border grid grid-cols-1 border border-ink bg-white md:grid-cols-2">
      {faqs.map((faq, index) => (
        <div key={faq.question} className={`box-border p-8 ${cellBorderClasses[index]}`}>
          <div className="font-display text-lg font-semibold text-ink">{faq.question}</div>
          <p className="m-0 mt-2 text-sm leading-[1.6] text-muted">{faq.answer}</p>
        </div>
      ))}
    </div>
  )
}

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import Eyebrow from '@/components/ui/Eyebrow'
import NoteCallout from '@/components/ui/NoteCallout'
import PricingTable, { fallbackPlans, type Plan } from '@/components/pricing/PricingTable'
import FAQGrid, { fallbackFaqs, type PricingFaq } from '@/components/pricing/FAQGrid'
import { BackendRequestError, requestBackend } from '@/lib/backend/client'

export const revalidate = 60

async function getPricing() {
  try {
    return await requestBackend<{ plans: Plan[]; faqs: PricingFaq[] }>('/pricing', {
      revalidate: 60
    })
  } catch (error) {
    if (error instanceof BackendRequestError) {
      console.error(`Pricing backend unavailable (${error.status})`)
    }

    return { plans: fallbackPlans, faqs: fallbackFaqs }
  }
}

export default async function PricingPage() {
  const { plans, faqs } = await getPricing()

  return (
    <>
      <Section>
        <Container>
          <Eyebrow leadingDash color="green">
            Pricing
          </Eyebrow>
          <h1 className="m-0 mt-4 font-display text-5xl font-normal leading-[1.05] tracking-[-0.01em] text-ink md:text-[56px]">
            Plug-and-play modules — pay for what your audit process needs.
          </h1>
          <p className="m-0 mt-6 max-w-[620px] text-base leading-[1.75] text-muted">
            Every plan includes the full audit lifecycle. Higher tiers add departments, storage and
            review depth.
          </p>
        </Container>
      </Section>

      <Section bg="white" className="pt-0">
        <Container>
          <PricingTable plans={plans} />
          <div className="mt-8">
            <NoteCallout label="Note" tone="flag">
              ANUGATO AI BHARAT is enterprise software; pricing is consultative rather than
              self-serve checkout. Talk to sales and we&apos;ll configure the right tier for your
              audit teams.
            </NoteCallout>
          </div>
        </Container>
      </Section>

      <Section bg="paper">
        <Container>
          <SectionHeading title="Frequently asked." />
          <div className="mt-10">
            <FAQGrid faqs={faqs} />
          </div>
        </Container>
      </Section>
    </>
  )
}

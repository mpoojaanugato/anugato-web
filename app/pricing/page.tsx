import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import Eyebrow from '@/components/ui/Eyebrow'
import NoteCallout from '@/components/ui/NoteCallout'
import PricingTable from '@/components/pricing/PricingTable'
import FAQGrid from '@/components/pricing/FAQGrid'

export default function PricingPage() {
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
          <PricingTable />
          <div className="mt-8">
            <NoteCallout label="Note" tone="flag">
              ANUGATO AI BHARAT is enterprise software; keep pricing consultative (&quot;Talk to
              sales&quot;) rather than self-serve checkout unless the business decides otherwise.
              Table above is a wireframe placeholder for real tiering.
            </NoteCallout>
          </div>
        </Container>
      </Section>

      <Section bg="paper">
        <Container>
          <SectionHeading title="Frequently asked." />
          <div className="mt-10">
            <FAQGrid />
          </div>
        </Container>
      </Section>
    </>
  )
}

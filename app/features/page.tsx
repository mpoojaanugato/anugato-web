import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Eyebrow from '@/components/ui/Eyebrow'
import CTABand from '@/components/ui/CTABand'
import FeaturesFilterList from '@/components/features/FeaturesFilterList'

export default function FeaturesPage() {
  return (
    <>
      <Section>
        <Container>
          <Eyebrow leadingDash color="green">
            Product
          </Eyebrow>
          <h1 className="m-0 mt-4 font-display text-5xl font-normal leading-[1.05] tracking-[-0.01em] text-ink md:text-[56px]">
            Every capability your audit process actually needs.
          </h1>
          <p className="m-0 mt-6 max-w-[620px] text-base leading-[1.75] text-muted">
            From the first task bank to the last follow-up — organised by where it fits in the audit
            lifecycle.
          </p>

          <div className="mt-10">
            <FeaturesFilterList />
          </div>
        </Container>
      </Section>

      <CTABand
        title="See these features on your own audit data."
        description="We'll configure a working sandbox around one of your real audit templates."
        buttons={[{ label: 'Book a demo', to: '/contact', white: true }]}
      />
    </>
  )
}

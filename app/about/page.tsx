import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import CTABand from '@/components/ui/CTABand'
import HighlightFrame from '@/components/about/HighlightFrame'
import MissionVisionGrid from '@/components/about/MissionVisionGrid'
import Timeline from '@/components/about/Timeline'

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="m-0 font-mono text-[11px] tracking-[0.08em] text-verified">
                — About <span className="text-ink">ANUGATO AI BHARAT</span>
              </p>
              <h1 className="m-0 mt-4 font-display text-5xl font-normal leading-[1.05] tracking-[-0.01em] text-ink md:text-[56px]">
                Built by an auditor, for auditors.
              </h1>
              <p className="m-0 mt-6 max-w-[560px] text-base leading-[1.75] text-muted">
                Conceptualised by a Chartered Accountant with years of hands-on experience in
                internal audit and consulting — ANUGATO AI BHARAT exists to close the gaps in
                standardisation, efficiency and impact seen first-hand across hundreds of audit
                assignments.
              </p>
            </div>

            <HighlightFrame />
          </div>
        </Container>
      </Section>

      <Section bg="paper">
        <Container>
          <MissionVisionGrid />
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          <SectionHeading title="How ANUGATO AI BHARAT came together." />
          <div className="mt-12 max-w-[720px]">
            <Timeline />
          </div>
        </Container>
      </Section>

      <CTABand
        title="Meet the team behind ANUGATO AI BHARAT."
        description="Talk to us about your audit process — we'll show you how it maps to the platform."
        buttons={[{ label: 'Book a demo', to: '/contact', white: true }]}
      />
    </>
  )
}

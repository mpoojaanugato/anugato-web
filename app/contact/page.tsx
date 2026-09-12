import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Eyebrow from '@/components/ui/Eyebrow'
import ContactGrid from '@/components/contact/ContactGrid'

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <Eyebrow leadingDash color="green">
          Contact
        </Eyebrow>
        <h1 className="m-0 mt-4 font-display text-5xl font-normal leading-[1.05] tracking-[-0.01em] text-ink md:text-[56px]">
          Let&apos;s map ANUGATO AI BHARAT to your audit process.
        </h1>
        <p className="m-0 mt-6 max-w-[620px] text-base leading-[1.75] text-muted">
          Send us a note, or pick a slot directly — either way you&apos;ll speak with someone who
          understands audit, not just software.
        </p>

        <div className="mt-14">
          <ContactGrid />
        </div>
      </Container>
    </Section>
  )
}

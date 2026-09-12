import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Eyebrow from '@/components/ui/Eyebrow'
import NoteCallout from '@/components/ui/NoteCallout'
import FeaturedResource from '@/components/resources/FeaturedResource'
import ResourcesExplorer from '@/components/resources/ResourcesExplorer'
import NewsletterBand from '@/components/resources/NewsletterBand'
import { featuredResource } from '@/components/resources/resourceData'

export default function ResourcesPage() {
  return (
    <>
      <Section>
        <Container>
          <Eyebrow leadingDash color="green">
            Resources
          </Eyebrow>
          <h1 className="m-0 mt-4 font-display text-5xl font-normal leading-[1.05] tracking-[-0.01em] text-ink md:text-[56px]">
            Guides, templates and thinking on modern audit practice.
          </h1>
          <p className="m-0 mt-6 max-w-[620px] text-base leading-[1.75] text-muted">
            The organic-growth engine for the new site — built for SEO, backlinks and lead capture.
          </p>
        </Container>
      </Section>

      <Section bg="white" className="pt-0">
        <Container>
          <FeaturedResource resource={featuredResource} />

          <div className="mt-14">
            <ResourcesExplorer />
          </div>

          <div className="mt-8">
            <NoteCallout label="SEO note —" tone="flag">
              Each post = its own indexable URL (/resources/slug), H1/meta/schema (Article +
              Organization), internal links to relevant Feature and Solutions pages, and an author
              byline (audit practitioner) for E-E-A-T.
            </NoteCallout>
          </div>
        </Container>
      </Section>

      <Section bg="paper">
        <Container>
          <NewsletterBand />
        </Container>
      </Section>
    </>
  )
}

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import Eyebrow from '@/components/ui/Eyebrow'
import StatBand from '@/components/ui/StatBand'
import CTABand from '@/components/ui/CTABand'
import Hero from '@/components/home/Hero'
import ProcessSteps from '@/components/home/ProcessSteps'
import TemplateGrid from '@/components/home/TemplateGrid'
import FeatureGrid from '@/components/home/FeatureGrid'
import IntegrationsList from '@/components/home/IntegrationsList'
import { createSupabasePublicClient } from '@/lib/supabase/public'

async function getDashboardShowcase() {
  const supabase = createSupabasePublicClient()

  const [{ data: stats }, { data: rows }] = await Promise.all([
    supabase
      .from('dashboard_showcase_stats')
      .select('value, label')
      .order('sort_order', { ascending: true }),
    supabase
      .from('dashboard_showcase_rows')
      .select('label, percent, tone')
      .order('sort_order', { ascending: true })
  ])

  return {
    stats: stats && stats.length > 0 ? stats : undefined,
    rows: rows && rows.length > 0 ? rows : undefined
  }
}

export default async function Home() {
  const { stats: dashboardStats, rows: dashboardRows } = await getDashboardShowcase()

  return (
    <>
      <Section>
        <Hero dashboardStats={dashboardStats} dashboardRows={dashboardRows} />
      </Section>

      <StatBand
        stats={[
          { value: '40+', label: 'Organisations on ANUGATO AI BHARAT' },
          { value: '12', label: 'Audit types supported' },
          { value: '98%', label: 'Report turnaround SLA met' },
          { value: '6 yrs', label: 'Built by practising auditors' }
        ]}
      />

      <Section bg="white">
        <Container>
          <SectionHeading
            title="An end-to-end solution, not a checklist app."
            intro="ANUGATO AI BHARAT digitises the complete audit lifecycle — from the annual plan to the last follow-up — so nothing depends on a spreadsheet or a status call."
          />
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </Container>
      </Section>

      <Section bg="paper">
        <Container>
          <SectionHeading
            title="Customisable templates for every audit department."
            intro="Run distinct, isolated audit environments side by side — each with its own templates, scoring and workflows."
          />
          <div className="mt-10">
            <TemplateGrid />
          </div>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          <SectionHeading
            title="Built for consulting firms and in-house audit teams alike."
            intro="The features that matter, whether you run one audit department or manage dozens of client engagements."
          />
          <div className="mt-10">
            <FeatureGrid />
          </div>
        </Container>
      </Section>

      <Section bg="paper">
        <Container>
          <Eyebrow leadingDash color="green">
            Integrations &amp; extensibility
          </Eyebrow>
          <div className="mt-4">
            <SectionHeading
              title="Built to sit inside your existing stack."
              intro="The revamp is scoped so these connect natively — no separate dev cycle required later."
            />
          </div>
          <div className="mt-10">
            <IntegrationsList />
          </div>
        </Container>
      </Section>

      <CTABand
        title="Ready to take control of your audits?"
        description="See ANUGATO AI BHARAT configured for your own audit types, templates and reporting needs in a 30-minute walkthrough."
        buttons={[
          { label: 'Book a demo', to: '/contact', white: true },
          { label: 'Talk to sales', to: '/contact', variant: 'outline' }
        ]}
      />
    </>
  )
}

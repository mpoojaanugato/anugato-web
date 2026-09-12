import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import DashboardPreview from './DashboardPreview'
import type { DashboardRow, DashboardStat } from './DashboardPreview'

const trustedBy = ['Nirlon', 'Kalpataru', 'Greenply', 'Emcure', '+40 more']

type HeroProps = {
  dashboardStats?: DashboardStat[]
  dashboardRows?: DashboardRow[]
}

export default function Hero({ dashboardStats, dashboardRows }: HeroProps) {
  return (
    <Container>
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.1fr_1fr]">
        <div>
          <Eyebrow leadingDash color="green">
            Audit management, unified
          </Eyebrow>
          <h1 className="m-0 mt-4 font-display text-5xl font-normal leading-[1.05] tracking-[-0.01em] text-ink md:text-[64px]">
            Every audit. One system of record.
          </h1>
          <p className="m-0 mt-6 max-w-[560px] text-base leading-[1.75] text-muted">
            Plan, execute, track, report and follow up on Internal, ISO, IT, Operational and
            Franchisee audits — on a single customisable platform built for consulting firms and
            enterprise audit teams.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button to="/contact" size="lg">
              Book a demo
            </Button>
            <Button to="/resources" variant="secondary" size="lg">
              Download brochure
            </Button>
          </div>

          <div className="mt-10 border-t border-ink/10 pt-6">
            <Eyebrow color="muted">Trusted by audit &amp; compliance teams at</Eyebrow>
            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-base text-muted">
              {trustedBy.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
        </div>

        <DashboardPreview stats={dashboardStats} rows={dashboardRows} />
      </div>
    </Container>
  )
}

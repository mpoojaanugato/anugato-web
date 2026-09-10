import Link from 'next/link'
import NewsletterForm from '@/components/forms/NewsletterForm'

const columnHeadingClasses = 'm-0 text-sm font-medium text-ink'
const listClasses = 'm-0 mt-5 flex list-none flex-col gap-3 p-0 text-base text-muted break-words'
const inlineLinkClasses = 'text-inherit no-underline transition-colors hover:text-ink'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="box-border px-6 py-12 md:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.3fr)]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-ink text-sm font-semibold text-white">
                ✓
              </span>
              <span className="font-display text-[22px] tracking-[0.01em] text-ink">
                ANUGATO AI BHARAT
              </span>
            </div>
            <p className="m-0 mt-5 max-w-[300px] text-base leading-[1.75] text-muted">
              Transform auditing with smart audit management software, by ANUGATO AI BHARAT.
            </p>
            <div className="mt-6">
              <NewsletterForm variant="compact" />
            </div>
          </div>

          <div>
            <h3 className={columnHeadingClasses}>Product</h3>
            <ul className={listClasses}>
              <li>
                <Link href="/features" className={inlineLinkClasses}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className={inlineLinkClasses}>
                  Pricing
                </Link>
              </li>
              <li>
                <a href="#" className={inlineLinkClasses}>
                  Mobile app
                </a>
              </li>
              <li>
                <a href="#" className={inlineLinkClasses}>
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={columnHeadingClasses}>Company</h3>
            <ul className={listClasses}>
              <li>
                <Link href="/about" className={inlineLinkClasses}>
                  About us
                </Link>
              </li>
              <li>
                <Link href="/resources" className={inlineLinkClasses}>
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className={inlineLinkClasses}>
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className={inlineLinkClasses}>
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={columnHeadingClasses}>Contact</h3>
            <ul className={listClasses}>
              <li>+91 90233 41783</li>
              <li>namaste@anugatobharat.com</li>
              <li>Hennur, Bengaluru</li>
              <li>
                <a href="#" className={inlineLinkClasses}>
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-ink/10 pt-6">
          <div className="flex flex-col items-stretch justify-between gap-3 text-sm text-muted sm:flex-row sm:items-center">
            <p className="m-0">© ANUGATO AI BHARAT 2026. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className={inlineLinkClasses}>
                Privacy
              </a>
              <a href="#" className={inlineLinkClasses}>
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

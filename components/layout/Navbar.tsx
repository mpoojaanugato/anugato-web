'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Resources', to: '/resources' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
]

const focusRingClasses =
  'outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-white'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white">
      <div className="box-border flex items-center justify-between gap-4 px-6 py-4 md:px-10 lg:px-16 xl:px-20">
        <Link
          href="/"
          aria-label="ANUGATO AI BHARAT home"
          className="flex min-w-0 items-center gap-2 no-underline"
        >
          <Image
            src="/anugato-logo.png"
            alt=""
            width={48}
            height={48}
            className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
            priority
          />
          <span className="min-w-0 font-display text-[13px] leading-[1.05] tracking-[0.01em] text-ink sm:text-[18px]">
            <span className="block">ANUGATO</span>
            <span className="block text-[9px] tracking-[0.24em] text-verified sm:text-[11px]">
              AI BHARAT
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map(({ label, to }) => {
            const isActive = pathname === to
            return (
              <Link
                key={label}
                href={to}
                className={`relative pb-1 text-sm no-underline transition-colors ${focusRingClasses} ${
                  isActive ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {label}
                {isActive ? (
                  <span className="absolute inset-x-0 -bottom-1.5 block h-0.5 bg-verified" />
                ) : null}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/contact"
            className="text-sm text-muted no-underline transition-colors hover:text-ink"
          >
            Login
          </Link>
          <Link
            href="/contact"
            className={`box-border inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white no-underline transition-colors hover:bg-ink-soft ${focusRingClasses}`}
          >
            Book a demo
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={`box-border inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-transparent text-ink transition-colors lg:hidden ${focusRingClasses}`}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-ink/10 bg-white lg:hidden">
          <div className="box-border flex flex-col gap-3 px-6 py-5 md:px-10 lg:px-16 xl:px-20">
            {navItems.map(({ label, to }) => {
              const isActive = pathname === to
              return (
                <Link
                  key={label}
                  href={to}
                  onClick={() => setOpen(false)}
                  className={`text-base no-underline ${isActive ? 'text-ink' : 'text-muted'}`}
                >
                  {label}
                </Link>
              )
            })}
            <div className="mt-2 flex gap-3 pt-3">
              <Link href="/contact" className="text-sm text-muted no-underline">
                Login
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-ink px-4 py-2 text-sm text-white no-underline"
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

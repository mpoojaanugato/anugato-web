import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Resource } from './resourceData'

export default function FeaturedResource({ resource }: { resource: Resource }) {
  return (
    <div className="box-border grid grid-cols-1 overflow-hidden border border-ink/10 bg-white md:grid-cols-2">
      <div
        className="min-h-[220px] md:min-h-[380px]"
        style={{
          background:
            'radial-gradient(circle at 28% 22%, var(--color-ink-soft), var(--color-ink) 65%)'
        }}
      />
      <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
        <p className="m-0 font-mono text-[11px] uppercase tracking-[0.08em] text-verified">
          Featured <span className="text-ink/30">&middot;</span> {resource.category}
        </p>
        <h3 className="m-0 font-display text-2xl font-normal leading-[1.15] tracking-[-0.01em] text-ink md:text-[32px]">
          {resource.title}
        </h3>
        <p className="m-0 text-base leading-[1.75] text-muted">{resource.description}</p>
        <Link
          href={`/resources/${resource.slug}`}
          className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-ink no-underline hover:underline"
        >
          Read the article
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}

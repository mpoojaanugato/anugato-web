import Link from 'next/link'
import type { Resource } from './resourceData'

export default function ResourceCard({ resource, index }: { resource: Resource; index: number }) {
  return (
    <Link
      href={`/resources/${resource.slug}`}
      className="box-border flex flex-col overflow-hidden border border-ink/10 bg-white no-underline transition-colors hover:border-ink/30"
    >
      <div className="flex h-[180px] items-end bg-paper p-5">
        <span className="font-display text-6xl font-normal leading-none text-ink/10">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="m-0 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
          {resource.category}
        </p>
        <h3 className="m-0 mt-3 font-display text-lg font-normal leading-[1.3] text-ink">
          {resource.title}
        </h3>
        <p className="m-0 mt-2 text-sm leading-[1.6] text-muted">{resource.description}</p>
      </div>
    </Link>
  )
}

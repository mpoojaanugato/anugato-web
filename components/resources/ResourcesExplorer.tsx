'use client'

import { useMemo, useState } from 'react'
import PillGroup from '@/components/ui/PillGroup'
import ResourceCard from './ResourceCard'
import { resources, filterOptions } from './resourceData'

export default function ResourcesExplorer() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(filterOptions[0])

  const visibleResources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return resources.filter((resource) => {
      const matchesCategory = category === 'All' || resource.category === category
      const matchesQuery =
        normalizedQuery.length === 0 ||
        resource.title.toLowerCase().includes(normalizedQuery) ||
        resource.description.toLowerCase().includes(normalizedQuery)

      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search articles — e.g. ISO 27001 checklist"
          className="box-border h-14 flex-1 rounded-full border border-ink/10 bg-paper px-5 font-sans text-sm text-ink outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        />
        <PillGroup
          options={filterOptions}
          value={category}
          onChange={setCategory}
          ariaLabel="Resource categories"
        />
      </div>

      {visibleResources.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {visibleResources.map((resource, index) => (
            <ResourceCard key={resource.slug} resource={resource} index={index} />
          ))}
        </div>
      ) : (
        <p className="m-0 mt-10 text-base leading-[1.75] text-muted">
          No articles match that search yet.
        </p>
      )}
    </div>
  )
}

type Stat = {
  value: string
  label: string
}

type StatBandProps = {
  stats?: Stat[]
}

export default function StatBand({ stats = [] }: StatBandProps) {
  return (
    <div className="bg-ink">
      <div className="box-border grid grid-cols-1 px-6 md:grid-cols-4 md:px-10 lg:px-16 xl:px-20">
        {stats.map((stat, index) => (
          <div
            key={`${stat.label}-${index}`}
            className={`box-border flex min-h-[180px] flex-col justify-center border-t border-white/10 px-8 py-10 md:border-t-0 ${
              index !== 0 ? 'md:border-l' : ''
            }`}
          >
            <div className="font-display text-[40px] font-normal leading-none tracking-[-0.01em] text-white md:text-[54px]">
              {stat.value}
            </div>
            <div className="mt-3 max-w-[220px] text-xs uppercase tracking-[0.08em] text-white/80">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

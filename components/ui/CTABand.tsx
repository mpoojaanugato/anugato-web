import Button from './Button'

type CTAButton = {
  label: string
  to: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'white'
  white?: boolean
}

type CTABandProps = {
  title: string
  description?: string
  buttons?: CTAButton[]
}

export default function CTABand({ title, description, buttons = [] }: CTABandProps) {
  return (
    <div className="box-border bg-ink px-6 py-12 text-white md:p-12">
      <div className="mx-auto flex max-w-[1200px] flex-col items-stretch justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-[720px]">
          <h2 className="m-0 font-display text-4xl font-normal leading-[1.05] tracking-[-0.01em] text-white md:text-[44px]">
            {title}
          </h2>
          {description ? (
            <p className="m-0 mt-4 max-w-[620px] text-base leading-[1.75] text-white/80">
              {description}
            </p>
          ) : null}
        </div>
        {buttons.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {buttons.map((button, index) => (
              <Button
                key={`${button.label}-${index}`}
                to={button.to}
                variant={button.white ? 'white' : button.variant || 'primary'}
                size="lg"
              >
                {button.label}
              </Button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

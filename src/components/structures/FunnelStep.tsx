import type { StructureStep } from '../../content/structures/types'

interface FunnelStepProps {
  step: Extract<StructureStep, { kind: 'funnel' }>
  onSpeak: (romanian: string) => void
}

/** Several English phrasings pouring into one Romanian one — fewer choices than English, not more. */
export function FunnelStep({ step, onSpeak }: FunnelStepProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold">{step.title}</h2>
      <div className="mt-5 flex flex-col items-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">English says</p>
        <div className="mt-2 flex w-full flex-col gap-2">
          {step.english.map((phrase) => (
            <p key={phrase} className="rounded-xl bg-surface-muted px-4 py-2 text-center text-lg">
              {phrase}
            </p>
          ))}
        </div>
        <svg viewBox="0 0 120 48" className="my-2 h-12 w-32 text-flag-blue/50" aria-hidden="true">
          <path d="M10 2 L60 40 M60 2 L60 40 M110 2 L60 40" stroke="currentColor" strokeWidth="3" fill="none" />
          <path d="M52 34 L60 46 L68 34" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Romanian says</p>
        <button
          type="button"
          onClick={() => onSpeak(step.ro)}
          className="mt-2 w-full rounded-2xl border-2 border-flag-blue bg-flag-blue/5 px-4 py-4 text-center text-2xl font-semibold text-flag-blue active:bg-flag-blue/10"
        >
          {step.ro} <span aria-hidden="true">🔊</span>
        </button>
      </div>
      <p className="mt-4 leading-relaxed">{step.caption}</p>
    </div>
  )
}

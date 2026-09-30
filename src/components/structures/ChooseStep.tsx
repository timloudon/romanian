import { useState } from 'react'
import type { StructureStep } from '../../content/structures/types'

interface ChooseStepProps {
  step: Extract<StructureStep, { kind: 'choose' }>
  onComplete: () => void
}

/** "Spot the English habit": the wrong options are the mistakes English speakers really make. */
export function ChooseStep({ step, onComplete }: ChooseStepProps) {
  const [picked, setPicked] = useState<number | null>(null)
  const answered = picked !== null

  function pick(index: number) {
    if (answered) return
    setPicked(index)
    onComplete()
  }

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Spot the English habit</p>
      <h2 className="mt-1 text-xl font-semibold">{step.question}</h2>
      <div className="mt-4 flex flex-col gap-2">
        {step.options.map((option, index) => {
          let style = 'border-border bg-surface-muted'
          if (answered && option.correct) style = 'border-green-600 bg-green-600/10 text-green-800 dark:text-green-300'
          else if (answered && index === picked) style = 'border-flag-red bg-flag-red/10 text-flag-red'
          else if (answered) style = 'border-border bg-surface-muted opacity-50'
          return (
            <button
              key={option.text}
              type="button"
              onClick={() => pick(index)}
              className={`rounded-xl border-2 px-4 py-3 text-left text-lg font-semibold ${style}`}
            >
              {option.text}
              {answered && option.correct && ' ✓'}
            </button>
          )
        })}
      </div>
      {answered && (
        <p className="mt-4 rounded-xl bg-surface-muted px-4 py-3 leading-relaxed">
          {step.options[picked].correct ? 'Right. ' : ''}
          {step.explanation}
        </p>
      )}
    </div>
  )
}

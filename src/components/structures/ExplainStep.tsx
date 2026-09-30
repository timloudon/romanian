import type { StructureStep } from '../../content/structures/types'
import { GlossLine } from './GlossLine'
import { RichText } from './RichText'

interface ExplainStepProps {
  step: Extract<StructureStep, { kind: 'explain' }>
  onSpeak: (romanian: string) => void
}

export function ExplainStep({ step, onSpeak }: ExplainStepProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold">{step.title}</h2>
      <div className="mt-3 flex flex-col gap-3 leading-relaxed">
        {step.body.map((paragraph, index) => (
          <p key={index}>
            <RichText text={paragraph} onSpeak={onSpeak} />
          </p>
        ))}
      </div>
      {step.glosses && (
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Think it as</p>
          <div className="mt-2 flex flex-col gap-2">
            {step.glosses.map((gloss) => (
              <GlossLine key={gloss.ro} gloss={gloss} onSpeak={onSpeak} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

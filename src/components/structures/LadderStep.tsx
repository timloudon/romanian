import { useState } from 'react'
import type { StructureDrill, StructureStep } from '../../content/structures/types'
import { recordOutcome } from '../../engine/recordOutcome'
import { SelfAssessButtons } from '../lesson/SelfAssessButtons'

interface LadderStepProps {
  step: Extract<StructureStep, { kind: 'ladder' }>
  onSpeak: (romanian: string) => void
  onComplete: () => void
}

/**
 * The Michel Thomas build-up: an English cue, time to think it out and say it aloud, then the
 * answer. Rungs already climbed stay visible above, so you can see each sentence grow out of the
 * last. A "not yet" comes back once at the end of the ladder, and every assessment feeds Review.
 */
export function LadderStep({ step, onSpeak, onComplete }: LadderStepProps) {
  const [queue, setQueue] = useState<StructureDrill[]>(step.rungs)
  const [climbed, setClimbed] = useState<StructureDrill[]>([])
  const [revealed, setRevealed] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const rung = queue[0]
  const isRepeat = rung !== undefined && climbed.some((done) => done.id === rung.id)

  function reveal() {
    setRevealed(true)
    onSpeak(rung.answer)
  }

  function assess(outcome: 'got-it' | 'not-yet') {
    void recordOutcome({ kind: 'drill', id: rung.id }, outcome)
    const alreadyRequeued = queue.slice(1).some((later) => later.id === rung.id)
    const rest = queue.slice(1)
    const nextQueue = outcome === 'not-yet' && !alreadyRequeued ? [...rest, rung] : rest
    if (!climbed.some((done) => done.id === rung.id)) setClimbed([...climbed, rung])
    setQueue(nextQueue)
    setRevealed(false)
    setShowHint(false)
    if (nextQueue.length === 0) onComplete()
  }

  return (
    <div>
      <h2 className="text-xl font-semibold">{step.title}</h2>
      {step.intro && <p className="mt-2 leading-relaxed">{step.intro}</p>}

      {climbed.length > 0 && (
        <ol className="mt-4 flex flex-col gap-1 border-l-2 border-flag-blue/30 pl-3">
          {climbed.map((done) => (
            <li key={done.id}>
              <button type="button" onClick={() => onSpeak(done.answer)} className="text-left">
                <span className="font-semibold text-flag-blue">{done.answer}</span>{' '}
                <span className="text-sm text-ink-muted">{done.prompt}</span>
              </button>
            </li>
          ))}
        </ol>
      )}

      {rung ? (
        <div className="mt-4 rounded-2xl border border-border bg-surface-muted p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
            Say it out loud · {isRepeat ? 'once more' : `${climbed.length + 1} of ${step.rungs.length}`}
          </p>
          <p className="mt-2 text-2xl font-semibold">{rung.prompt}</p>

          {!revealed && (
            <>
              {rung.hint &&
                (showHint ? (
                  <p className="mt-3 rounded-lg bg-flag-yellow/20 px-3 py-2 text-sm">{rung.hint}</p>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowHint(true)}
                    className="mt-3 text-sm text-flag-blue underline underline-offset-4"
                  >
                    Show me the pieces
                  </button>
                ))}
              <button
                type="button"
                // Autofocused so Enter reveals, and then Enter again (on "Got it") moves on.
                autoFocus
                onClick={reveal}
                className="mt-4 w-full rounded-xl bg-flag-blue px-4 py-3 font-semibold text-white"
              >
                I've said it — show me
              </button>
            </>
          )}

          {revealed && (
            <>
              <button
                type="button"
                onClick={() => onSpeak(rung.answer)}
                className="mt-4 w-full rounded-xl border border-flag-blue/30 bg-surface px-4 py-3 text-left text-2xl font-semibold text-flag-blue"
              >
                {rung.answer} <span aria-hidden="true">🔊</span>
              </button>
              {rung.teachingNote && <p className="mt-3 text-sm text-ink-muted">{rung.teachingNote}</p>}
              <SelfAssessButtons onAssess={assess} />
            </>
          )}
        </div>
      ) : (
        <p className="mt-4 rounded-xl bg-green-600/10 px-4 py-3 text-green-700">
          That's the ladder. These phrases will come back in Review, so they stick.
        </p>
      )}
    </div>
  )
}

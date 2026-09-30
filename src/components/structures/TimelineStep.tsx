import { Fragment, useState } from 'react'
import type { StructureStep } from '../../content/structures/types'

interface TimelineStepProps {
  step: Extract<StructureStep, { kind: 'timeline' }>
  onSpeak: (romanian: string) => void
}

type When = 'past' | 'present' | 'future'

const TABS: { when: When; label: string }[] = [
  { when: 'past', label: '◀ Yesterday' },
  { when: 'present', label: 'Now' },
  { when: 'future', label: 'Tomorrow ▶' },
]

function normalise(word: string): string {
  return word.toLowerCase().replace(/[.,!?…]/g, '')
}

/** Words in `sentence` that aren't in the "now" version — the part that moved in time. */
function changedWords(sentence: string, present: string): Set<number> {
  const presentWords = new Set(present.split(/\s+/).map(normalise))
  const changed = new Set<number>()
  sentence.split(/\s+/).forEach((word, index) => {
    if (!presentWords.has(normalise(word))) changed.add(index)
  })
  return changed
}

/** One set of sentences, shifted between yesterday / now / tomorrow — to see that only the front
 *  of the sentence moves. "Cover" hides the Romanian so it becomes a self-test. */
export function TimelineStep({ step, onSpeak }: TimelineStepProps) {
  const [when, setWhen] = useState<When>('present')
  const [covered, setCovered] = useState(false)
  const [uncovered, setUncovered] = useState<Set<string>>(new Set())

  function switchTo(next: When) {
    setWhen(next)
    setUncovered(new Set())
  }

  return (
    <div>
      <h2 className="text-xl font-semibold">{step.title}</h2>
      <p className="mt-2 leading-relaxed">{step.intro}</p>

      <div className="mt-4 grid grid-cols-3 rounded-xl border border-border bg-surface-muted p-1" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.when}
            type="button"
            role="tab"
            aria-selected={when === tab.when}
            onClick={() => switchTo(tab.when)}
            className={`rounded-lg px-2 py-2 text-sm font-semibold ${
              when === tab.when ? 'bg-flag-blue text-white' : 'text-ink-muted'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <ul className="mt-3 flex flex-col gap-2">
        {step.sentences.map((sentence) => {
          const { en, ro } = sentence[when]
          const changed = when === 'present' ? new Set<number>() : changedWords(ro, sentence.present.ro)
          const hidden = covered && !uncovered.has(ro)
          return (
            <li key={sentence.present.ro} className="rounded-xl border border-border bg-surface px-4 py-3">
              <p className="text-sm text-ink-muted">{en}</p>
              {hidden ? (
                <button
                  type="button"
                  onClick={() => setUncovered(new Set(uncovered).add(ro))}
                  className="mt-1 w-full rounded-lg bg-surface-muted py-2 text-sm text-ink-muted"
                >
                  Say it, then tap to check
                </button>
              ) : (
                <button type="button" onClick={() => onSpeak(ro)} className="mt-1 text-left text-lg">
                  {ro.split(/\s+/).map((word, index) => (
                    <Fragment key={index}>
                      <span
                        className={changed.has(index) ? 'rounded bg-flag-yellow/40 px-0.5 font-semibold' : 'font-semibold'}
                      >
                        {word}
                      </span>{' '}
                    </Fragment>
                  ))}
                  <span aria-hidden="true">🔊</span>
                </button>
              )}
            </li>
          )
        })}
      </ul>

      <label className="mt-4 flex items-center gap-3 text-sm">
        <input
          type="checkbox"
          checked={covered}
          onChange={(event) => {
            setCovered(event.target.checked)
            setUncovered(new Set())
          }}
          className="size-5 accent-flag-blue"
        />
        Cover the Romanian — test yourself
      </label>
    </div>
  )
}

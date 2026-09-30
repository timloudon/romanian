import { useState } from 'react'
import type { StructureStep } from '../../content/structures/types'
import { isCorrectOrder, tilesFor } from '../../engine/tiles'

interface AssembleStepProps {
  step: Extract<StructureStep, { kind: 'assemble' }>
  onSpeak: (romanian: string) => void
  onComplete: () => void
}

interface Tile {
  id: number
  text: string
}

function shuffle<T>(items: T[]): T[] {
  const result = [...items]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

/** Build the Romanian from tiles — word order is exactly where English instincts misfire, and
 *  seeing the pieces makes the pattern physical. */
export function AssembleStep({ step, onSpeak, onComplete }: AssembleStepProps) {
  const [bank] = useState<Tile[]>(() =>
    shuffle(tilesFor(step.answer, step.distractors).map((text, id) => ({ id, text }))),
  )
  const [chosen, setChosen] = useState<Tile[]>([])
  const [result, setResult] = useState<'right' | 'wrong' | null>(null)

  function check() {
    const right = isCorrectOrder(
      chosen.map((tile) => tile.text),
      step.answer,
    )
    setResult(right ? 'right' : 'wrong')
    onSpeak(step.answer)
    onComplete()
  }

  function retry() {
    setChosen([])
    setResult(null)
  }

  const available = bank.filter((tile) => !chosen.some((picked) => picked.id === tile.id))

  return (
    <div>
      <h2 className="text-xl font-semibold">Put it together</h2>
      <p className="mt-2 text-ink-muted">Tap the words in order. Not every word is needed.</p>
      <p className="mt-4 text-2xl font-semibold">{step.prompt}</p>

      <div className="mt-4 flex min-h-16 flex-wrap content-start gap-2 rounded-xl border-2 border-dashed border-border p-3">
        {chosen.length === 0 && <span className="text-sm text-ink-muted">Your sentence…</span>}
        {chosen.map((tile) => (
          <button
            key={tile.id}
            type="button"
            disabled={result !== null}
            onClick={() => setChosen(chosen.filter((picked) => picked.id !== tile.id))}
            className="rounded-lg bg-flag-blue px-3 py-2 font-semibold text-white"
          >
            {tile.text}
          </button>
        ))}
      </div>

      {result === null && (
        <>
          <div className="mt-4 flex flex-wrap gap-2">
            {available.map((tile) => (
              <button
                key={tile.id}
                type="button"
                onClick={() => setChosen([...chosen, tile])}
                className="rounded-lg border border-border bg-surface-muted px-3 py-2 font-semibold"
              >
                {tile.text}
              </button>
            ))}
          </div>
          <button
            type="button"
            disabled={chosen.length === 0}
            onClick={check}
            className="mt-5 w-full rounded-xl bg-flag-blue px-4 py-3 font-semibold text-white disabled:opacity-40"
          >
            Check
          </button>
        </>
      )}

      {result !== null && (
        <div
          className={`mt-4 rounded-xl px-4 py-3 ${result === 'right' ? 'bg-green-600/10' : 'bg-flag-red/10'}`}
        >
          <p className={`font-semibold ${result === 'right' ? 'text-green-700' : 'text-flag-red'}`}>
            {result === 'right' ? 'Yes — exactly.' : 'Not quite. Here it is:'}
          </p>
          <button type="button" onClick={() => onSpeak(step.answer)} className="mt-1 text-left text-xl font-semibold">
            {step.answer} <span aria-hidden="true">🔊</span>
          </button>
          {step.note && <p className="mt-2 text-sm text-ink-muted">{step.note}</p>}
          {result === 'wrong' && (
            <button type="button" onClick={retry} className="mt-3 text-sm text-flag-blue underline underline-offset-4">
              Try it again
            </button>
          )}
        </div>
      )}
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import type { StructureStep } from '../../content/structures/types'

interface DialogueStepProps {
  step: Extract<StructureStep, { kind: 'dialogue' }>
  onSpeak: (romanian: string) => void | Promise<void>
  onComplete: () => void
}

/**
 * A scripted conversation where you play one side. Their lines arrive in Romanian (with the
 * English one tap away, so you listen first); your lines give the English cue, you say it out
 * loud, then reveal what a Romanian would say. The exchange builds up on screen like a chat.
 */
export function DialogueStep({ step, onSpeak, onComplete }: DialogueStepProps) {
  // How many lines are on screen, and whether the newest "you" line has been revealed yet.
  const [shown, setShown] = useState(1)
  const [revealed, setRevealed] = useState(false)
  const [translated, setTranslated] = useState<Set<number>>(new Set())
  const [playingAll, setPlayingAll] = useState(false)
  const current = step.lines[shown - 1]
  const finished = shown === step.lines.length && (current.who === 'them' || revealed)

  // Their lines play as they arrive; yours play once you've had a go and revealed them.
  useEffect(() => {
    if (current.who === 'them') onSpeak(current.ro)
  }, [current, onSpeak])

  // Once only: the parent's handler is a fresh function every render.
  const completedRef = useRef(false)
  useEffect(() => {
    if (finished && !completedRef.current) {
      completedRef.current = true
      onComplete()
    }
  }, [finished, onComplete])

  function advance() {
    setShown(shown + 1)
    setRevealed(false)
  }

  function reveal() {
    setRevealed(true)
    onSpeak(current.ro)
  }

  const waitingForYou = current.who === 'you' && !revealed

  async function playAll() {
    setPlayingAll(true)
    for (const line of step.lines) {
      await onSpeak(line.ro)
      await new Promise((resolve) => setTimeout(resolve, 400))
    }
    setPlayingAll(false)
  }

  return (
    <div>
      <h2 className="text-xl font-semibold">{step.title}</h2>
      <p className="mt-1 text-sm text-ink-muted">{step.setting}</p>

      <ol className="mt-4 flex flex-col gap-3">
        {step.lines.slice(0, shown).map((line, index) => {
          const isCurrent = index === shown - 1
          if (line.who === 'them') {
            return (
              <li key={index} className="max-w-[85%] self-start">
                <button
                  type="button"
                  onClick={() => {
                    onSpeak(line.ro)
                    setTranslated(new Set(translated).add(index))
                  }}
                  className="rounded-2xl rounded-bl-sm bg-surface-muted px-4 py-3 text-left"
                >
                  <span className="block font-semibold">{line.ro} 🔊</span>
                  {translated.has(index) ? (
                    <span className="mt-1 block text-sm text-ink-muted">{line.en}</span>
                  ) : (
                    <span className="mt-1 block text-xs text-ink-muted">Tap for English</span>
                  )}
                </button>
              </li>
            )
          }
          const hidden = isCurrent && !revealed
          return (
            <li key={index} className="max-w-[85%] self-end">
              <div className="rounded-2xl rounded-br-sm border border-flag-blue/30 bg-flag-blue/5 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">You say</p>
                <p className="mt-1">{line.en}</p>
                {!hidden && (
                  <button
                    type="button"
                    onClick={() => onSpeak(line.ro)}
                    className="mt-1 block text-left font-semibold text-flag-blue"
                  >
                    {line.ro} 🔊
                  </button>
                )}
              </div>
            </li>
          )
        })}
      </ol>

      {!finished && (
        <button
          type="button"
          // Autofocused so Enter carries the conversation forward.
          autoFocus
          key={`${shown}-${revealed}`}
          onClick={waitingForYou ? reveal : advance}
          className="mt-5 w-full rounded-xl bg-flag-blue px-4 py-3 font-semibold text-white"
        >
          {waitingForYou ? "I've said it — show me" : step.lines[shown].who === 'you' ? 'Your turn' : 'Next line'}
        </button>
      )}
      {finished && (
        <>
          <button
            type="button"
            disabled={playingAll}
            onClick={() => void playAll()}
            className="mt-5 w-full rounded-xl border border-flag-blue px-4 py-3 font-semibold text-flag-blue disabled:opacity-50"
          >
            {playingAll ? 'Playing…' : '▶ Listen to the whole conversation'}
          </button>
          <p className="mt-3 rounded-xl bg-green-600/10 px-4 py-3 text-green-700">
            That's the conversation. Listen to it through, then try it again with the English covered — then for real.
          </p>
        </>
      )}
    </div>
  )
}

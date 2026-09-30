import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { SelfAssessButtons } from '../components/lesson/SelfAssessButtons'
import { coreWords } from '../content/vocab/core-words'
import type { VocabItem } from '../content/vocab/types'
import { recordOutcome } from '../engine/recordOutcome'
import { useSpeakRomanian } from '../hooks/useSpeakRomanian'
import { getAllReviewStates, todayISODate } from '../storage/progressRepo'
import type { ReviewState } from '../storage/types'

const BAND_SIZE = 100
const SESSION_SIZE = 25

const bands = Array.from({ length: Math.ceil(coreWords.length / BAND_SIZE) }, (_, index) =>
  coreWords.slice(index * BAND_SIZE, (index + 1) * BAND_SIZE),
)

function shuffle<T>(items: T[]): T[] {
  const result = [...items]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

/** Due words first (the ones you said "not yet" to, coming back), then words never seen. */
function buildSession(band: VocabItem[], states: Map<string, ReviewState>): VocabItem[] {
  const today = todayISODate()
  const due = band.filter((word) => {
    const state = states.get(word.id)
    return state && state.dueDate <= today
  })
  const fresh = band.filter((word) => !states.has(word.id))
  return [...shuffle(due), ...shuffle(fresh)].slice(0, SESSION_SIZE)
}

/**
 * Recognition practice on the most common words: see the Romanian, think of the meaning, check,
 * mark yourself. Understanding fast speech is mostly recognising these words instantly.
 */
export function WordsRoute() {
  const [states, setStates] = useState<Map<string, ReviewState> | null>(null)
  const [session, setSession] = useState<VocabItem[] | null>(null)

  useEffect(() => {
    if (session) return
    let cancelled = false
    void getAllReviewStates().then((rows) => {
      if (cancelled) return
      setStates(new Map(rows.filter((row) => row.kind === 'vocab').map((row) => [row.id, row])))
    })
    return () => {
      cancelled = true
    }
  }, [session])

  if (session) return <WordSession words={session} onExit={() => setSession(null)} />

  return (
    <div className="p-6">
      <Link to="/" className="text-sm text-ink-muted">
        ← Home
      </Link>
      <h1 className="mt-2 text-2xl font-bold text-flag-blue">Common words</h1>
      <p className="mt-1 text-ink-muted">
        The {coreWords.length} most common words in spoken Romanian, in frequency order. See the word,
        think of what it means, then check. The ones you mark "not yet" come back until they stick.
      </p>
      <p className="mt-2 text-sm text-ink-muted">
        This is about recognising words instantly — the key to following fast speech. For saying
        things, Structures and This week do the heavy lifting.
      </p>

      <div className="mt-6 flex flex-col gap-2">
        {bands.map((band, index) => {
          const first = index * BAND_SIZE + 1
          const last = first + band.length - 1
          const known = states ? band.filter((word) => (states.get(word.id)?.box ?? 0) >= 2).length : 0
          const due = states
            ? band.filter((word) => {
                const state = states.get(word.id)
                return state && state.dueDate <= todayISODate()
              }).length
            : 0
          const unseen = states ? band.filter((word) => !states.has(word.id)).length : band.length
          const nothingToDo = states !== null && due === 0 && unseen === 0
          return (
            <button
              key={first}
              type="button"
              disabled={!states || nothingToDo}
              onClick={() => states && setSession(buildSession(band, states))}
              className="rounded-xl border border-border bg-surface-muted px-4 py-3 text-left disabled:opacity-60"
            >
              <p className="font-semibold">
                Words {first}–{last}
              </p>
              <p className="text-sm text-ink-muted">
                {band
                  .slice(0, 6)
                  .map((word) => word.word)
                  .join(', ')}
                …
              </p>
              <p className="mt-1 text-sm">
                {known} of {band.length} known
                {due > 0 && ` · ${due} due`}
                {nothingToDo && ' · nothing due today'}
              </p>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function WordSession({ words, onExit }: { words: VocabItem[]; onExit: () => void }) {
  const speak = useSpeakRomanian()
  const [queue, setQueue] = useState(words)
  const [revealed, setRevealed] = useState(false)
  const [done, setDone] = useState(0)
  const word = queue[0]
  const requeued = useRef(new Set<string>())

  useEffect(() => {
    if (word) speak(word.word)
  }, [word, speak])

  function assess(outcome: 'got-it' | 'not-yet') {
    void recordOutcome({ kind: 'vocab', id: word.id }, outcome)
    const rest = queue.slice(1)
    // A "not yet" comes back once at the end of this session too.
    if (outcome === 'not-yet' && !requeued.current.has(word.id)) {
      requeued.current.add(word.id)
      setQueue([...rest, word])
    } else {
      setQueue(rest)
      setDone(done + 1)
    }
    setRevealed(false)
  }

  if (!word) {
    return (
      <div className="p-6 text-center">
        <p className="text-2xl font-semibold">Done — {done} words.</p>
        <p className="mt-2 text-ink-muted">The ones you didn't know will come back on another day.</p>
        <button
          type="button"
          autoFocus
          onClick={onExit}
          className="mt-6 rounded-xl bg-flag-blue px-6 py-3 font-semibold text-white"
        >
          Back to the word list
        </button>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <button type="button" onClick={onExit} className="text-2xl text-ink-muted" aria-label="Stop">
          ✕
        </button>
        <p className="text-sm text-ink-muted">{queue.length} to go</p>
      </div>

      <button
        type="button"
        onClick={() => speak(word.word)}
        className="mt-10 block w-full text-center text-5xl font-bold text-flag-blue"
      >
        {word.word}
      </button>
      <p className="mt-2 text-center text-sm text-ink-muted">#{word.rank} most common · tap to hear</p>

      {!revealed ? (
        <button
          type="button"
          autoFocus
          onClick={() => setRevealed(true)}
          className="mt-10 w-full rounded-xl bg-flag-blue px-4 py-3 font-semibold text-white"
        >
          Show the meaning
        </button>
      ) : (
        <>
          <p className="mt-8 rounded-2xl bg-surface-muted px-4 py-4 text-center text-xl">{word.translation}</p>
          <SelfAssessButtons onAssess={assess} />
        </>
      )}
    </div>
  )
}

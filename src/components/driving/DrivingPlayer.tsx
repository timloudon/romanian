import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { audioResolver } from '../../audio/AudioResolver'
import { setMediaSessionHandlers, setMediaSessionMetadata, setMediaSessionPlaybackState } from '../../audio/mediaSession'
import { setKeepAlive } from '../../audio/player'
import { getAnswerText, getPromptText, type SessionItem } from '../../engine/session'
import { usePlayerMachine } from '../../engine/usePlayerMachine'
import { useVoices } from '../../hooks/useVoices'
import { sleep } from '../../lib/sleep'
import { getSettings } from '../../storage/settingsRepo'

// Time to attempt an answer out loud before it's revealed, and time to tap a response before
// auto-advancing past it — both deliberately generous, since the whole point is not looking at
// the screen to judge them.
const THINK_PAUSE_MS = 3000
const RESPONSE_WINDOW_MS = 4000

interface DrivingPlayerProps {
  queue: SessionItem[]
  completeMessage: string
  exitHref: string
}

export function DrivingPlayer({ queue, completeMessage, exitHref }: DrivingPlayerProps) {
  const [paused, setPaused] = useState(false)
  const { state, item, selfAssess, dispatch } = usePlayerMachine('driving', queue)

  // Read at speak time rather than as effect dependencies: the device's voice list often
  // arrives a moment after mount, and restarting speech then is exactly what iPhone Safari
  // mishandles (a cancel immediately followed by a new utterance can silently drop the new one).
  const voices = useVoices()
  const voicesRef = useRef(voices)
  useEffect(() => {
    voicesRef.current = voices
  })

  // Lock-screen / Bluetooth media controls.
  useEffect(
    () =>
      setMediaSessionHandlers({
        onPlay: () => setPaused(false),
        onPause: () => setPaused(true),
        onNext: () => dispatch({ type: 'TIMEOUT_ADVANCE' }),
        onPrev: () => dispatch({ type: 'SKIP_BACK' }),
      }),
    [dispatch],
  )

  useEffect(() => {
    if (item) setMediaSessionMetadata(getPromptText(item))
  }, [item])

  useEffect(() => {
    setMediaSessionPlaybackState(paused ? 'paused' : 'playing')
  }, [paused])

  // The keep-alive loop lives exactly as long as this player, so it survives remounts; the
  // "Start" tap has already unlocked the audio element, so starting it here is allowed.
  useEffect(() => {
    setKeepAlive(true)
    return () => {
      setKeepAlive(false)
      audioResolver.stop()
    }
  }, [])

  // The actual hands-free loop: speak the prompt, pause for an attempt, speak the answer, then
  // wait for a tap (or time out and move on with no SRS write either way).
  useEffect(() => {
    if (paused || !item) return
    const controller = new AbortController()
    const rate = getSettings().playbackRate

    void (async () => {
      try {
        if (state.phase.kind === 'prompt') {
          await audioResolver.speak(getPromptText(item), {
            lang: 'en-US',
            voice: voicesRef.current.englishVoice,
            rate,
            signal: controller.signal,
          })
          if (controller.signal.aborted) return
          await sleep(THINK_PAUSE_MS, controller.signal)
          if (controller.signal.aborted) return
          dispatch({ type: 'REVEAL' })
        } else if (state.phase.kind === 'awaiting-self-assessment') {
          await audioResolver.speak(getAnswerText(item), {
            lang: 'ro-RO',
            voice: voicesRef.current.romanianVoice,
            rate,
            signal: controller.signal,
          })
          if (controller.signal.aborted) return
          await sleep(RESPONSE_WINDOW_MS, controller.signal)
          if (controller.signal.aborted) return
          dispatch({ type: 'TIMEOUT_ADVANCE' })
        }
      } catch {
        // A speech error shouldn't hard-stop the session — just move on, as if time ran out.
        if (!controller.signal.aborted) dispatch({ type: 'TIMEOUT_ADVANCE' })
      }
    })()

    return () => controller.abort()
  }, [item, state.phase.kind, paused, dispatch])

  if (state.phase.kind === 'complete') {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-flag-blue p-8 text-center text-white">
        <h1 className="text-2xl font-bold">All done</h1>
        <p className="text-white/80">{completeMessage}</p>
        <Link to={exitHref} className="rounded-xl bg-white px-6 py-3 font-semibold text-flag-blue">
          Done
        </Link>
      </div>
    )
  }

  if (!item) return null

  const assessing = state.phase.kind === 'awaiting-self-assessment'

  return (
    <div
      className="flex min-h-dvh flex-col bg-flag-blue text-white"
      style={{ paddingTop: 'var(--safe-top)', paddingBottom: 'var(--safe-bottom)' }}
    >
      <div className="flex items-center justify-between px-6 pt-4">
        <Link to={exitHref} className="text-white/70">
          Exit
        </Link>
        <p className="text-sm text-white/70">
          {state.index + 1} / {state.queue.length}
        </p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <p className="text-sm uppercase tracking-wide text-white/60">
          {state.phase.kind === 'prompt' ? 'Say it in Romanian' : 'In Romanian'}
        </p>
        <p className="mt-3 text-3xl font-semibold">
          {state.phase.kind === 'prompt' ? getPromptText(item) : getAnswerText(item)}
        </p>
      </div>

      <div className="flex items-center justify-center gap-6 pb-8">
        <button
          type="button"
          onClick={() => dispatch({ type: 'SKIP_BACK' })}
          className="rounded-full border border-white/30 px-5 py-4 text-xl"
          aria-label="Previous"
        >
          ⏮
        </button>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="rounded-full bg-white px-8 py-6 text-3xl text-flag-blue"
          aria-label={paused ? 'Play' : 'Pause'}
        >
          {paused ? '▶' : '⏸'}
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: 'TIMEOUT_ADVANCE' })}
          className="rounded-full border border-white/30 px-5 py-4 text-xl"
          aria-label="Next"
        >
          ⏭
        </button>
      </div>

      <div className="flex">
        <button
          type="button"
          disabled={!assessing}
          onClick={() => selfAssess('not-yet')}
          className="flex-1 bg-flag-red/30 py-6 text-lg font-semibold disabled:opacity-20"
        >
          Not yet
        </button>
        <button
          type="button"
          disabled={!assessing}
          onClick={() => selfAssess('got-it')}
          className="flex-1 bg-green-600/30 py-6 text-lg font-semibold disabled:opacity-20"
        >
          Got it
        </button>
      </div>
    </div>
  )
}

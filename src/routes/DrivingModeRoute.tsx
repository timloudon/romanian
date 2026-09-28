import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { startKeepAlive } from '../audio/silentKeepAlive'
import { DrivingPlayer } from '../components/driving/DrivingPlayer'
import { roCore } from '../content/courses/ro-core'
import { allDrills, type SessionItem } from '../engine/session'
import { getDueItems } from '../storage/progressRepo'
import { getSettings, updateSettings } from '../storage/settingsRepo'

export function DrivingModeRoute() {
  const [queue, setQueue] = useState<SessionItem[] | null>(null)
  const [started, setStarted] = useState(false)
  const [noticeAcknowledged, setNoticeAcknowledged] = useState(() => getSettings().drivingNoticeAcknowledged)

  useEffect(() => {
    let cancelled = false
    void getDueItems().then((due) => {
      if (cancelled) return
      const drillsById = new Map(allDrills(roCore).map((drill) => [drill.id, drill]))
      const items: SessionItem[] = due
        .filter((reviewState) => reviewState.kind === 'drill')
        .map((reviewState) => drillsById.get(reviewState.id))
        .filter((drill) => drill !== undefined)
        .map((drill) => ({ kind: 'drill' as const, drill }))
      setQueue(items)
    })
    return () => {
      cancelled = true
    }
  }, [])

  function handleStart() {
    // Both calls must happen synchronously inside this gesture handler — that's what satisfies
    // iOS's autoplay policy for the rest of the session (the driving player's own effects then
    // speak asynchronously without issue).
    startKeepAlive()
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(''))
    if (!noticeAcknowledged) {
      updateSettings({ drivingNoticeAcknowledged: true })
      setNoticeAcknowledged(true)
    }
    setStarted(true)
  }

  if (queue === null) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-flag-blue text-white">
        <p>Loading…</p>
      </div>
    )
  }

  if (queue.length === 0) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-flag-blue p-6 text-center text-white">
        <p>Nothing due for review right now.</p>
        <Link to="/" className="rounded-xl bg-white px-6 py-3 font-semibold text-flag-blue">
          Back home
        </Link>
      </div>
    )
  }

  if (!started) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-flag-blue p-8 text-center text-white">
        {!noticeAcknowledged && (
          <p className="text-sm text-white/80">
            Driving Mode plays audio automatically and needs no screen interaction to work. Don't
            look at or touch your phone while your vehicle is moving — use lock-screen or
            Bluetooth controls only.
          </p>
        )}
        <p className="text-lg">{queue.length} due for review</p>
        <button
          type="button"
          onClick={handleStart}
          className="rounded-full bg-white px-10 py-5 text-xl font-semibold text-flag-blue"
        >
          {noticeAcknowledged ? 'Start' : 'I understand — start'}
        </button>
        <Link to="/" className="text-white/70 underline">
          Cancel
        </Link>
      </div>
    )
  }

  return <DrivingPlayer queue={queue} />
}

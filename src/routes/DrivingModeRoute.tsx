import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { unlockAudio } from '../audio/player'
import { primeSpeechSynthesis } from '../audio/speechSynthesis'
import { DrivingPlayer } from '../components/driving/DrivingPlayer'
import { findLifeTopic } from '../content/life'
import { drillQueue, dueQueue, type SessionItem } from '../engine/session'
import { getDueItems } from '../storage/progressRepo'
import { getSettings, updateSettings } from '../storage/settingsRepo'

/** Drives either a weekly topic's phrases (`?topic=<id>`, launched from the This week tab) or,
 *  by default, whatever's due for review. */
export function DrivingModeRoute() {
  const [searchParams] = useSearchParams()
  const topicId = searchParams.get('topic')
  const topic = findLifeTopic(topicId)
  const topicQueue = useMemo(() => (topic ? drillQueue(topic.drills) : null), [topic])
  const [dueItems, setDueItems] = useState<SessionItem[] | null>(null)
  const [started, setStarted] = useState(false)
  const [noticeAcknowledged, setNoticeAcknowledged] = useState(() => getSettings().drivingNoticeAcknowledged)

  useEffect(() => {
    if (topicId) return
    let cancelled = false
    void getDueItems().then((due) => {
      if (!cancelled) setDueItems(dueQueue(due))
    })
    return () => {
      cancelled = true
    }
  }, [topicId])

  const queue = topicId ? topicQueue : dueItems
  const exitHref = topicId ? '/week' : '/'

  function handleStart() {
    // These must run synchronously inside this tap — that's what satisfies iOS's autoplay policy
    // for the rest of the session (the driving player's own effects then play on timers).
    unlockAudio()
    primeSpeechSynthesis()
    if (!noticeAcknowledged) {
      updateSettings({ drivingNoticeAcknowledged: true })
      setNoticeAcknowledged(true)
    }
    setStarted(true)
  }

  if (topicId && !topic) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-flag-blue p-6 text-center text-white">
        <p>That topic doesn't exist.</p>
        <Link to="/week" className="rounded-xl bg-white px-6 py-3 font-semibold text-flag-blue">
          Back to This week
        </Link>
      </div>
    )
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
        <Link to={exitHref} className="rounded-xl bg-white px-6 py-3 font-semibold text-flag-blue">
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
        <p className="text-lg">
          {topic ? `${topic.emoji} ${topic.title} · ${queue.length} phrases` : `${queue.length} due for review`}
        </p>
        <button
          type="button"
          onClick={handleStart}
          className="rounded-full bg-white px-10 py-5 text-xl font-semibold text-flag-blue"
        >
          {noticeAcknowledged ? 'Start' : 'I understand — start'}
        </button>
        <Link to={exitHref} className="text-white/70 underline">
          Cancel
        </Link>
      </div>
    )
  }

  return (
    <DrivingPlayer
      queue={queue}
      exitHref={exitHref}
      completeMessage={
        topic ? "That's this week's phrases — now go use them for real." : "You're through everything due for now."
      }
    />
  )
}

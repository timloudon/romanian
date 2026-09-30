import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { unlockAudio } from '../audio/player'
import { primeSpeechSynthesis } from '../audio/speechSynthesis'
import { DrivingPlayer } from '../components/driving/DrivingPlayer'
import { findLifeTopic } from '../content/life'
import { findStructureLesson, structureDrills } from '../content/structures'
import { drillQueue, dueQueue, type SessionItem } from '../engine/session'
import { getDueItems } from '../storage/progressRepo'
import { getSettings, updateSettings } from '../storage/settingsRepo'

/** Drives a weekly topic's phrases (`?topic=<id>`, from This week), a Structures lesson's drills
 *  (`?structure=<id>`), or, by default, whatever's due for review. */
export function DrivingModeRoute() {
  const [searchParams] = useSearchParams()
  const topicId = searchParams.get('topic')
  const structureId = searchParams.get('structure')
  const topic = findLifeTopic(topicId)
  const structure = findStructureLesson(structureId)
  const sourceId = topicId ?? structureId
  const sourceQueue = useMemo(() => {
    if (topic) return drillQueue(topic.drills)
    if (structure) return drillQueue(structureDrills(structure))
    return null
  }, [topic, structure])
  const [dueItems, setDueItems] = useState<SessionItem[] | null>(null)
  const [started, setStarted] = useState(false)
  const [noticeAcknowledged, setNoticeAcknowledged] = useState(() => getSettings().drivingNoticeAcknowledged)

  useEffect(() => {
    if (sourceId) return
    let cancelled = false
    void getDueItems().then((due) => {
      if (!cancelled) setDueItems(dueQueue(due))
    })
    return () => {
      cancelled = true
    }
  }, [sourceId])

  const queue = sourceId ? sourceQueue : dueItems
  let exitHref = '/'
  if (topicId) exitHref = '/week'
  else if (structureId) exitHref = `/structures/${structureId}`

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

  if (sourceId && !topic && !structure) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-flag-blue p-6 text-center text-white">
        <p>That doesn't exist.</p>
        <Link to={topicId ? '/week' : '/structures'} className="rounded-xl bg-white px-6 py-3 font-semibold text-flag-blue">
          Go back
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
          {topic && `${topic.emoji} ${topic.title} · ${queue.length} phrases`}
          {structure && `🧩 ${structure.title} · ${queue.length} phrases`}
          {!sourceId && `${queue.length} due for review`}
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
        topic
          ? "That's this week's phrases — now go use them for real."
          : structure
            ? `That's the lot. The shortcut: ${structure.shortcut}`
            : "You're through everything due for now."
      }
    />
  )
}

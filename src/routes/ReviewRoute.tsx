import { useEffect, useState } from 'react'
import { TypedModePlayer } from '../components/lesson/TypedModePlayer'
import { dueQueue, type SessionItem } from '../engine/session'
import { getDueItems } from '../storage/progressRepo'

export function ReviewRoute() {
  const [queue, setQueue] = useState<SessionItem[] | null>(null)

  useEffect(() => {
    let cancelled = false
    void getDueItems().then((due) => {
      if (!cancelled) setQueue(dueQueue(due))
    })
    return () => {
      cancelled = true
    }
  }, [])

  if (queue === null) {
    return <div className="p-6 text-ink-muted">Loading…</div>
  }

  return (
    <TypedModePlayer
      queue={queue}
      headerLabel="Review"
      completeMessage="You're all caught up for now."
      emptyMessage="Nothing due right now. Start a new lesson from Home, or check back later."
    />
  )
}

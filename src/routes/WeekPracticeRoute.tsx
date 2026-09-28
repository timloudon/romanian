import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { TypedModePlayer } from '../components/lesson/TypedModePlayer'
import { findLifeTopic } from '../content/life'
import { drillQueue } from '../engine/session'

export function WeekPracticeRoute() {
  const { topicId } = useParams<{ topicId: string }>()
  const topic = findLifeTopic(topicId)
  const queue = useMemo(() => (topic ? drillQueue(topic.drills) : []), [topic])

  if (!topic) {
    return (
      <div className="p-6">
        <p className="text-ink-muted">That topic doesn't exist.</p>
        <Link to="/week" className="mt-2 inline-block text-flag-blue">
          Back to This week
        </Link>
      </div>
    )
  }

  return (
    <TypedModePlayer
      key={topic.id}
      queue={queue}
      headerLabel={`${topic.emoji} ${topic.title}`}
      completeMessage="That's this week's phrases. Now the part that matters — go and use them for real."
      exitHref="/week"
      exitLabel="Back to This week"
    />
  )
}

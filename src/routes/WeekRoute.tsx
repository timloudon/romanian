import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PhraseList } from '../components/life/PhraseList'
import { findLifeTopic, lifeTopics, nextLifeTopic } from '../content/life'
import { focusDay } from '../engine/weeklyFocus'
import { getSettings, updateSettings } from '../storage/settingsRepo'
import type { LifeFocus } from '../storage/types'

function dayLabel(day: number): string {
  return day <= 7 ? `Day ${day} of 7` : `Day ${day} — move on whenever you're ready`
}

export function WeekRoute() {
  const [focus, setFocus] = useState<LifeFocus | null>(() => getSettings().lifeFocus)
  const [previewId, setPreviewId] = useState<string | null>(null)
  const focusTopic = findLifeTopic(focus?.topicId)
  const topic = findLifeTopic(previewId) ?? focusTopic ?? lifeTopics[0]
  const isFocus = focusTopic !== undefined && focusTopic.id === topic.id
  const next = nextLifeTopic(topic.id)

  function focusOn(topicId: string) {
    const nextFocus = { topicId, startedAt: new Date().toISOString() }
    updateSettings({ lifeFocus: nextFocus })
    setFocus(nextFocus)
    setPreviewId(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function preview(topicId: string) {
    setPreviewId(topicId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  let status = 'Suggested first week'
  if (isFocus && focus) status = dayLabel(focusDay(focus.startedAt))
  else if (focusTopic) status = `Previewing — this week is ${focusTopic.emoji} ${focusTopic.title}`

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-flag-blue">This week</h1>
      <p className="mt-1 text-ink-muted">
        One real-life topic at a time. Drill it, drive with it — then use it at home, which is the
        part that actually makes it stick.
      </p>

      <section className="mt-6 rounded-2xl border border-flag-blue/30 bg-flag-blue/5 p-5">
        <p className="text-sm text-ink-muted">{status}</p>
        <h2 className="mt-1 text-2xl font-semibold">
          <span aria-hidden="true">{topic.emoji}</span> {topic.title}
        </h2>
        <p className="mt-2 text-ink-muted">{topic.intro}</p>

        {!isFocus && (
          <button
            type="button"
            onClick={() => focusOn(topic.id)}
            className="mt-4 w-full rounded-xl bg-flag-blue px-4 py-3 font-semibold text-white"
          >
            Make this my focus this week
          </button>
        )}

        <div className="mt-4 grid grid-cols-2 gap-3">
          <Link
            to={`/week/${topic.id}/practice`}
            className="rounded-xl border border-flag-blue bg-surface px-4 py-3 text-center font-semibold text-flag-blue"
          >
            Drill it
          </Link>
          <Link
            to={`/driving?topic=${topic.id}`}
            className="rounded-xl border border-flag-blue bg-surface px-4 py-3 text-center font-semibold text-flag-blue"
          >
            🚗 Drive with it
          </Link>
        </div>

        <PhraseList key={topic.id} drills={topic.drills} />

        <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-ink-muted">Try it for real</h3>
        <ul className="mt-2 flex flex-col gap-2">
          {topic.conversationPrompts.map((prompt) => (
            <li key={prompt} className="rounded-xl bg-surface px-4 py-3 text-sm">
              {prompt}
            </li>
          ))}
        </ul>

        {isFocus && next && (
          <button
            type="button"
            onClick={() => focusOn(next.id)}
            className="mt-6 w-full rounded-xl border border-border bg-surface px-4 py-3 text-ink"
          >
            Move on to {next.emoji} {next.title} →
          </button>
        )}
      </section>

      <h2 className="mt-8 text-lg font-semibold">All topics</h2>
      <p className="text-sm text-ink-muted">
        Jump to whatever fits what's actually happening — it doesn't have to be in order.
      </p>
      <div className="mt-3 flex flex-col gap-2">
        {lifeTopics.map((candidate) => (
          <button
            key={candidate.id}
            type="button"
            onClick={() => preview(candidate.id)}
            className={`rounded-xl border px-4 py-3 text-left ${
              candidate.id === topic.id ? 'border-flag-blue/40 bg-flag-blue/5' : 'border-border bg-surface-muted'
            }`}
          >
            <p className="font-medium">
              <span aria-hidden="true">{candidate.emoji}</span> {candidate.title}
              {candidate.id === focusTopic?.id && <span className="text-sm text-flag-blue"> · this week</span>}
            </p>
            <p className="text-sm text-ink-muted">{candidate.summary}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

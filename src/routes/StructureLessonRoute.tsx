import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AssembleStep } from '../components/structures/AssembleStep'
import { ChooseStep } from '../components/structures/ChooseStep'
import { ExplainStep } from '../components/structures/ExplainStep'
import { FunnelStep } from '../components/structures/FunnelStep'
import { LadderStep } from '../components/structures/LadderStep'
import { RichText } from '../components/structures/RichText'
import { TimelineStep } from '../components/structures/TimelineStep'
import { findStructureLesson, nextStructureLesson } from '../content/structures'
import type { StructureLesson, StructureStep } from '../content/structures/types'
import { useSpeakRomanian } from '../hooks/useSpeakRomanian'
import { getSettings, updateSettings } from '../storage/settingsRepo'

/** Steps you have to do something in before moving on; the rest are there to read. */
function isInteractive(step: StructureStep): boolean {
  return step.kind === 'ladder' || step.kind === 'assemble' || step.kind === 'choose'
}

export function StructureLessonRoute() {
  const { lessonId } = useParams<{ lessonId: string }>()
  const lesson = findStructureLesson(lessonId)

  if (!lesson) {
    return (
      <div className="p-6">
        <p className="text-ink-muted">That lesson doesn't exist.</p>
        <Link to="/structures" className="mt-2 inline-block text-flag-blue">
          Back to Structures
        </Link>
      </div>
    )
  }
  // Keyed so moving to the next lesson starts it fresh from its first page.
  return <LessonPlayer key={lesson.id} lesson={lesson} />
}

function LessonPlayer({ lesson }: { lesson: StructureLesson }) {
  const speak = useSpeakRomanian()
  // Page 0 is the "shift" intro, then one page per step, then the finish page.
  const [page, setPage] = useState(0)
  const [completed, setCompleted] = useState<Set<number>>(new Set())
  const nextButton = useRef<HTMLButtonElement>(null)

  const lastPage = lesson.steps.length + 1
  const step = page >= 1 && page <= lesson.steps.length ? lesson.steps[page - 1] : undefined
  const canContinue = !step || !isInteractive(step) || completed.has(page)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [page])

  // Enter moves on whenever moving on is allowed — the lesson flows from the keyboard alone.
  useEffect(() => {
    if (canContinue) nextButton.current?.focus({ preventScroll: true })
  }, [canContinue, page])

  useEffect(() => {
    if (page !== lastPage) return
    const done = getSettings().structuresDone
    if (!done.includes(lesson.id)) updateSettings({ structuresDone: [...done, lesson.id] })
  }, [page, lastPage, lesson.id])

  const markComplete = () => setCompleted((previous) => new Set(previous).add(page))

  return (
    <div className="p-6">
      <div className="flex items-center gap-3">
        <Link to="/structures" className="text-2xl text-ink-muted" aria-label="Back to Structures">
          ✕
        </Link>
        <div className="flex flex-1 gap-1" aria-hidden="true">
          {Array.from({ length: lastPage + 1 }, (_, index) => (
            <span
              key={index}
              className={`h-1.5 flex-1 rounded-full ${index <= page ? 'bg-flag-blue' : 'bg-border'}`}
            />
          ))}
        </div>
      </div>
      {page > 0 && <p className="mt-3 text-sm text-ink-muted">{lesson.title}</p>}

      <div className="mt-4">
        {page === 0 && <ShiftIntro lesson={lesson} onSpeak={speak} />}
        {step && <StepView key={page} step={step} onSpeak={speak} onComplete={markComplete} />}
        {page === lastPage && <Finish lesson={lesson} />}
      </div>

      {page < lastPage && (
        <div className="mt-8 flex gap-3">
          {page > 0 && (
            <button
              type="button"
              onClick={() => setPage(page - 1)}
              className="rounded-xl border border-border px-5 py-3 text-ink-muted"
            >
              Back
            </button>
          )}
          <button
            ref={nextButton}
            type="button"
            disabled={!canContinue}
            onClick={() => setPage(page + 1)}
            className="flex-1 rounded-xl bg-flag-blue px-4 py-3 font-semibold text-white disabled:opacity-30"
          >
            {page === 0 ? 'Start' : page === lesson.steps.length ? 'Finish' : 'Next'}
          </button>
        </div>
      )}
    </div>
  )
}

function StepView({
  step,
  onSpeak,
  onComplete,
}: {
  step: StructureStep
  onSpeak: (romanian: string) => void
  onComplete: () => void
}) {
  switch (step.kind) {
    case 'explain':
      return <ExplainStep step={step} onSpeak={onSpeak} />
    case 'funnel':
      return <FunnelStep step={step} onSpeak={onSpeak} />
    case 'timeline':
      return <TimelineStep step={step} onSpeak={onSpeak} />
    case 'ladder':
      return <LadderStep step={step} onSpeak={onSpeak} onComplete={onComplete} />
    case 'assemble':
      return <AssembleStep step={step} onSpeak={onSpeak} onComplete={onComplete} />
    case 'choose':
      return <ChooseStep step={step} onComplete={onComplete} />
  }
}

function ShiftIntro({ lesson, onSpeak }: { lesson: StructureLesson; onSpeak: (romanian: string) => void }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-flag-blue">{lesson.title}</h1>
      <p className="mt-2 text-lg">{lesson.tagline}</p>
      <div className="mt-6 flex flex-col gap-3">
        <div className="rounded-2xl bg-surface-muted p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">🇬🇧 Where you start</p>
          <p className="mt-2 leading-relaxed">{lesson.shift.english}</p>
        </div>
        <div className="rounded-2xl border border-flag-blue/30 bg-flag-blue/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-flag-blue">🇷🇴 The shift</p>
          <p className="mt-2 leading-relaxed">
            <RichText text={lesson.shift.romanian} onSpeak={onSpeak} />
          </p>
        </div>
      </div>
      <p className="mt-6 text-sm text-ink-muted">
        Tap any <span className="font-semibold text-flag-blue">blue Romanian</span> to hear it.
      </p>
    </div>
  )
}

function Finish({ lesson }: { lesson: StructureLesson }) {
  const next = nextStructureLesson(lesson.id)
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Your shortcut</p>
      <p className="mt-2 rounded-2xl border-2 border-flag-blue bg-flag-blue/5 p-5 text-xl font-semibold leading-snug text-flag-blue">
        {lesson.shortcut}
      </p>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink-muted">Use it today</p>
      <p className="mt-2 rounded-2xl bg-surface-muted p-5 leading-relaxed">{lesson.useItToday}</p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <Link
          to={`/structures/${lesson.id}/practice`}
          className="rounded-xl border border-flag-blue px-4 py-3 text-center font-semibold text-flag-blue"
        >
          Drill it, typed
        </Link>
        <Link
          to={`/driving?structure=${lesson.id}`}
          className="rounded-xl border border-flag-blue px-4 py-3 text-center font-semibold text-flag-blue"
        >
          🚗 Drive with it
        </Link>
      </div>

      {lesson.seeAlso && (
        <Link
          to={`/lesson/${lesson.seeAlso.lessonId}`}
          className="mt-3 block rounded-xl border border-border px-4 py-3 text-sm text-ink-muted"
        >
          More practice → {lesson.seeAlso.label}
        </Link>
      )}

      {next ? (
        <Link
          to={`/structures/${next.id}`}
          className="mt-6 block rounded-xl bg-flag-blue px-4 py-3 text-center font-semibold text-white"
        >
          Next: {next.title} →
        </Link>
      ) : (
        <p className="mt-6 text-ink-muted">That's the last lesson — the shortcuts page has them all in one place.</p>
      )}
      <Link to="/structures" className="mt-3 block text-center text-ink-muted underline underline-offset-4">
        Back to Structures
      </Link>
    </div>
  )
}

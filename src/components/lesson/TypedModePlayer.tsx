import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { audioResolver } from '../../audio/AudioResolver'
import { recordedClipUrl } from '../../audio/recordedAudio'
import { gradeTypedAnswer } from '../../engine/grading'
import type { SessionItem } from '../../engine/session'
import { usePlayerMachine } from '../../engine/usePlayerMachine'
import { useVoices } from '../../hooks/useVoices'
import { getSettings } from '../../storage/settingsRepo'
import { PromptCard } from './PromptCard'
import { RevealCard } from './RevealCard'
import { SelfAssessButtons } from './SelfAssessButtons'
import { TypedAnswerInput } from './TypedAnswerInput'

interface TypedModePlayerProps {
  queue: SessionItem[]
  headerLabel: string
  completeMessage: string
  emptyMessage?: string
  exitHref?: string
  exitLabel?: string
}

/** The typed-mode player shared by lessons, weekly topics, and the Review queue — same engine,
 *  same UI, just a different queue and framing text. */
export function TypedModePlayer({
  queue,
  headerLabel,
  completeMessage,
  emptyMessage,
  exitHref = '/',
  exitLabel = 'Back home',
}: TypedModePlayerProps) {
  const { romanianVoice, status: voiceStatus } = useVoices()
  const { state, item, selfAssess, dispatch } = usePlayerMachine('typed', queue)
  const drill = item?.kind === 'drill' ? item.drill : undefined

  // Read at speak time, not as a dependency, so the voice list arriving late never re-speaks.
  const romanianVoiceRef = useRef(romanianVoice)
  useEffect(() => {
    romanianVoiceRef.current = romanianVoice
  })

  useEffect(() => {
    if (!drill) return
    if (state.phase.kind === 'revealed' || state.phase.kind === 'graded') {
      void audioResolver.speak(drill.answer, {
        lang: 'ro-RO',
        voice: romanianVoiceRef.current,
        rate: getSettings().playbackRate,
      })
    }
  }, [drill, state.phase.kind])

  if (queue.length === 0) {
    return (
      <div className="p-6 text-center">
        <p className="text-ink-muted">{emptyMessage ?? 'Nothing here right now.'}</p>
        <Link to={exitHref} className="mt-4 inline-block text-flag-blue">
          {exitLabel}
        </Link>
      </div>
    )
  }

  if (state.phase.kind === 'complete') {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-flag-blue">All done</h1>
        <p className="mt-2 text-ink-muted">{completeMessage}</p>
        <Link to={exitHref} className="mt-6 inline-block rounded-xl bg-flag-blue px-6 py-3 font-semibold text-white">
          {exitLabel}
        </Link>
      </div>
    )
  }

  if (!drill) return null

  return (
    <div className="p-6">
      <p className="text-sm text-ink-muted">
        {headerLabel} · {state.index + 1} / {state.queue.length}
      </p>
      {voiceStatus === 'no-romanian-voice' && !recordedClipUrl(drill.answer, 'ro') && (
        <p className="mt-2 rounded-lg bg-flag-red/10 p-3 text-sm text-flag-red">
          No Romanian voice found on this device. On iPhone: Settings → Accessibility → Spoken
          Content → Voices, and add Romanian.
        </p>
      )}

      <div className="mt-4">
        <PromptCard prompt={drill.prompt} />
      </div>

      {state.phase.kind === 'prompt' && (
        <TypedAnswerInput
          onSubmit={(value) => {
            const result = gradeTypedAnswer(value, drill)
            dispatch({ type: 'SUBMIT_TYPED', value, correct: result.correct })
          }}
          onDontKnow={() => dispatch({ type: 'REVEAL' })}
        />
      )}

      {state.phase.kind === 'revealed' && (
        <>
          <RevealCard answer={drill.answer} teachingNote={drill.teachingNote} />
          <SelfAssessButtons onAssess={selfAssess} />
        </>
      )}

      {state.phase.kind === 'graded' && (
        <>
          <p className={`mt-4 text-center font-semibold ${state.phase.correct ? 'text-green-700' : 'text-flag-red'}`}>
            {state.phase.correct ? 'Correct!' : `You wrote: "${state.phase.typedAnswer}"`}
          </p>
          <RevealCard answer={drill.answer} teachingNote={drill.teachingNote} />
          <SelfAssessButtons onAssess={selfAssess} suggested={state.phase.correct ? 'got-it' : 'not-yet'} />
        </>
      )}
    </div>
  )
}

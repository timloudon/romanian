import { audioResolver, phraseId } from '../../audio/AudioResolver'
import type { Drill } from '../../content/types'
import { useVoices } from '../../hooks/useVoices'
import { getSettings } from '../../storage/settingsRepo'

interface PhraseListProps {
  drills: Drill[]
}

/** A tap-to-hear reference sheet for the week — collapsed by default so drilling comes first. */
export function PhraseList({ drills }: PhraseListProps) {
  const { romanianVoice } = useVoices()

  function play(drill: Drill) {
    // Without this, tapping several phrases quickly queues them all up behind each other.
    if (window.speechSynthesis.speaking) audioResolver.stop()
    void audioResolver.speak(phraseId(drill.id, 'answer'), drill.answer, {
      lang: 'ro-RO',
      voice: romanianVoice,
      rate: getSettings().playbackRate,
    })
  }

  return (
    <details className="mt-4 rounded-xl border border-border bg-surface px-4 py-3">
      <summary className="cursor-pointer font-medium">All {drills.length} phrases</summary>
      <ul className="mt-2 divide-y divide-border">
        {drills.map((drill) => (
          <li key={drill.id} className="flex items-center gap-3 py-2">
            <button
              type="button"
              onClick={() => play(drill)}
              aria-label={`Hear "${drill.answer}"`}
              className="shrink-0 rounded-full border border-border px-2.5 py-1.5 text-lg"
            >
              🔊
            </button>
            <div className="min-w-0">
              <p className="font-medium">{drill.answer}</p>
              <p className="text-sm text-ink-muted">{drill.prompt}</p>
            </div>
          </li>
        ))}
      </ul>
    </details>
  )
}

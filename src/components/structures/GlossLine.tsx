import type { Gloss } from '../../content/structures/types'

interface GlossLineProps {
  gloss: Gloss
  onSpeak: (romanian: string) => void
}

/** A Romanian sentence with the literal "think it as" English under each word, and the natural
 *  English below — the bridge between how English says it and how Romanian thinks it. */
export function GlossLine({ gloss, onSpeak }: GlossLineProps) {
  return (
    <button
      type="button"
      onClick={() => onSpeak(gloss.ro)}
      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-left active:bg-flag-blue/5"
      aria-label={`Hear "${gloss.ro}"`}
    >
      <span className="flex flex-wrap gap-x-3 gap-y-2">
        {gloss.words.map(([ro, literal], index) => (
          <span key={index} className="flex flex-col">
            <span className="text-lg font-semibold text-flag-blue">{ro}</span>
            <span className="text-xs italic text-ink-muted">{literal}</span>
          </span>
        ))}
        <span className="self-start text-lg" aria-hidden="true">
          🔊
        </span>
      </span>
      <span className="mt-2 block border-t border-border pt-2 text-sm">= {gloss.en}</span>
    </button>
  )
}

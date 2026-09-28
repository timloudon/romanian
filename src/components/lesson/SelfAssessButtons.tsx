interface SelfAssessButtonsProps {
  onAssess: (outcome: 'got-it' | 'not-yet') => void
  suggested?: 'got-it' | 'not-yet'
}

export function SelfAssessButtons({ onAssess, suggested }: SelfAssessButtonsProps) {
  return (
    <div className="mt-4 flex gap-3">
      <button
        type="button"
        onClick={() => onAssess('not-yet')}
        className={`flex-1 rounded-xl border px-4 py-3 font-semibold ${
          suggested === 'not-yet' ? 'border-flag-red bg-flag-red/10 text-flag-red' : 'border-border text-ink-muted'
        }`}
      >
        Not yet
      </button>
      <button
        type="button"
        // Autofocused so Enter immediately activates it (native button behavior) — after
        // submitting a typed answer, the whole lesson can flow forward on the keyboard alone.
        autoFocus
        onClick={() => onAssess('got-it')}
        className={`flex-1 rounded-xl border px-4 py-3 font-semibold ${
          suggested === 'got-it' ? 'border-green-600 bg-green-600/10 text-green-700' : 'border-border text-ink-muted'
        }`}
      >
        Got it
      </button>
    </div>
  )
}

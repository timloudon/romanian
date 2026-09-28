import { useState, type FormEvent } from 'react'

interface TypedAnswerInputProps {
  onSubmit: (value: string) => void
  onDontKnow: () => void
}

export function TypedAnswerInput({ onSubmit, onDontKnow }: TypedAnswerInputProps) {
  const [value, setValue] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!value.trim()) return
    onSubmit(value)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Type your answer in Romanian…"
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck={false}
        // A fresh drill remounts this input — autofocus keeps the whole lesson keyboard-only,
        // matching the "Got it" button autofocusing below once an answer's been checked.
        autoFocus
        className="rounded-xl border border-border bg-surface px-4 py-3 text-lg text-ink"
      />
      <div className="flex gap-3">
        <button type="submit" className="flex-1 rounded-xl bg-flag-blue px-4 py-3 font-semibold text-white">
          Check
        </button>
        <button type="button" onClick={onDontKnow} className="rounded-xl border border-border px-4 py-3 text-ink-muted">
          Show me
        </button>
      </div>
    </form>
  )
}

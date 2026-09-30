import { Fragment, type ReactNode } from 'react'

interface RichTextProps {
  text: string
  onSpeak: (romanian: string) => void
}

const TOKEN = /(\*\*.+?\*\*|\{\{.+?\}\})/g

/** Renders lesson text: **bold**, and {{Romanian}} as a highlighted phrase that plays when tapped. */
export function RichText({ text, onSpeak }: RichTextProps) {
  const parts: ReactNode[] = text.split(TOKEN).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('{{') && part.endsWith('}}')) {
      const romanian = part.slice(2, -2)
      return <RomanianPhrase key={index} text={romanian} onSpeak={onSpeak} />
    }
    return <Fragment key={index}>{part}</Fragment>
  })
  return <>{parts}</>
}

interface RomanianPhraseProps {
  text: string
  onSpeak: (romanian: string) => void
  className?: string
}

export function RomanianPhrase({ text, onSpeak, className = '' }: RomanianPhraseProps) {
  return (
    <button
      type="button"
      onClick={() => onSpeak(text)}
      className={`inline rounded-sm font-semibold text-flag-blue underline decoration-flag-blue/30 decoration-dotted underline-offset-4 active:bg-flag-blue/10 ${className}`}
    >
      {text}
    </button>
  )
}

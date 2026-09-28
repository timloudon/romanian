import { useInstallPrompt } from '../../hooks/useInstallPrompt'

export function InstallBanner() {
  const { guidance, promptInstall, dismiss } = useInstallPrompt()

  if (guidance === 'none') return null

  return (
    <div className="flex items-center gap-3 border-b border-border bg-flag-yellow/15 px-4 py-2 text-sm">
      {guidance === 'ios-manual' ? (
        <p className="flex-1">
          Add this to your Home Screen to keep your progress safe: tap <strong>Share</strong>{' '}
          in Safari, then <strong>Add to Home Screen</strong>.
        </p>
      ) : (
        <p className="flex-1">Install this app so your progress is saved reliably.</p>
      )}
      {guidance === 'android-prompt' && (
        <button type="button" onClick={promptInstall} className="font-semibold text-flag-blue">
          Install
        </button>
      )}
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss"
        className="px-1 text-ink-muted"
      >
        ✕
      </button>
    </div>
  )
}

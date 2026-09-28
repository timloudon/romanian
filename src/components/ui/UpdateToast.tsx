import { usePWAUpdate } from '../../hooks/usePWAUpdate'

export function UpdateToast() {
  const { needRefresh, update } = usePWAUpdate()

  if (!needRefresh) return null

  return (
    <div className="fixed inset-x-4 bottom-20 z-50 flex items-center justify-between gap-3 rounded-xl bg-flag-blue px-4 py-3 text-white shadow-lg">
      <span className="text-sm">A new version is ready.</span>
      <button
        type="button"
        onClick={update}
        className="shrink-0 rounded-lg bg-white/20 px-3 py-1.5 text-sm font-semibold"
      >
        Reload
      </button>
    </div>
  )
}

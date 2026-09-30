interface UpdateToastProps {
  needRefresh: boolean
  onUpdate: () => void
  offlineReady: boolean
  onDismissOfflineReady: () => void
}

export function UpdateToast({ needRefresh, onUpdate, offlineReady, onDismissOfflineReady }: UpdateToastProps) {
  if (needRefresh) {
    return (
      <div className="fixed inset-x-4 bottom-20 z-50 flex items-center justify-between gap-3 rounded-xl bg-flag-blue px-4 py-3 text-white shadow-lg">
        <span className="text-sm">A new version is ready.</span>
        <button
          type="button"
          onClick={onUpdate}
          className="shrink-0 rounded-lg bg-white/20 px-3 py-1.5 text-sm font-semibold"
        >
          Reload
        </button>
      </div>
    )
  }

  if (offlineReady) {
    return (
      <div className="fixed inset-x-4 bottom-20 z-50 flex items-center justify-between gap-3 rounded-xl bg-flag-blue px-4 py-3 text-white shadow-lg">
        <span className="text-sm">Saved to this device — it now works without a connection.</span>
        <button
          type="button"
          onClick={onDismissOfflineReady}
          className="shrink-0 rounded-lg bg-white/20 px-3 py-1.5 text-sm font-semibold"
        >
          OK
        </button>
      </div>
    )
  }

  return null
}

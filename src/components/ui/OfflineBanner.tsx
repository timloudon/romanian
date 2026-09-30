import { useOnlineStatus } from '../../hooks/useConnectivity'

export function OfflineBanner() {
  const online = useOnlineStatus()
  if (online) return null

  return (
    <div className="border-b border-border bg-surface-muted px-4 py-1.5 text-center text-xs text-ink-muted">
      Offline — everything still works, and progress is saved on this device.
    </div>
  )
}

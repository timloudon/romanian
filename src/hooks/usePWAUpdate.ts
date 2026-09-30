import { useEffect, useRef, useState } from 'react'
import { registerSW } from 'virtual:pwa-register'

/** Registers the service worker. Call once at the app root so it happens on every route —
 *  including opening straight into Driving Mode, which renders no other app chrome. */
export function usePWAUpdate() {
  const [needRefresh, setNeedRefresh] = useState(false)
  const [offlineReady, setOfflineReady] = useState(false)
  const updateRef = useRef<((reload?: boolean) => Promise<void>) | null>(null)

  useEffect(() => {
    updateRef.current = registerSW({
      onNeedRefresh: () => setNeedRefresh(true),
      // Fires once, the first time everything has been cached for offline use.
      onOfflineReady: () => setOfflineReady(true),
    })
  }, [])

  return {
    needRefresh,
    offlineReady,
    update: () => void updateRef.current?.(true),
    dismissOfflineReady: () => setOfflineReady(false),
  }
}

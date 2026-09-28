import { useEffect, useRef, useState } from 'react'
import { registerSW } from 'virtual:pwa-register'

export function usePWAUpdate() {
  const [needRefresh, setNeedRefresh] = useState(false)
  const updateRef = useRef<((reload?: boolean) => Promise<void>) | null>(null)

  useEffect(() => {
    updateRef.current = registerSW({
      onNeedRefresh: () => setNeedRefresh(true),
    })
  }, [])

  function update() {
    void updateRef.current?.(true)
  }

  return { needRefresh, update }
}

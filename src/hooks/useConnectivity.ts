import { useSyncExternalStore } from 'react'

function subscribeOnline(onChange: () => void) {
  window.addEventListener('online', onChange)
  window.addEventListener('offline', onChange)
  return () => {
    window.removeEventListener('online', onChange)
    window.removeEventListener('offline', onChange)
  }
}

export function useOnlineStatus(): boolean {
  return useSyncExternalStore(subscribeOnline, () => navigator.onLine)
}

export type OfflineStatus = 'ready' | 'pending' | 'unsupported'

function subscribeController(onChange: () => void) {
  navigator.serviceWorker?.addEventListener('controllerchange', onChange)
  return () => navigator.serviceWorker?.removeEventListener('controllerchange', onChange)
}

function offlineStatus(): OfflineStatus {
  if (!('serviceWorker' in navigator)) return 'unsupported'
  // A controlling service worker only exists once the whole app has been precached, so this is
  // the reliable "will it open with no signal" signal.
  return navigator.serviceWorker.controller ? 'ready' : 'pending'
}

export function useOfflineStatus(): OfflineStatus {
  return useSyncExternalStore(subscribeController, offlineStatus)
}

import { useEffect, useState } from 'react'
import { isIOS, isStandalone } from '../lib/platform'
import { getSettings, updateSettings } from '../storage/settingsRepo'

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export type InstallGuidance = 'none' | 'ios-manual' | 'android-prompt'

/**
 * iOS has no `beforeinstallprompt` event — Safari only supports the manual Share sheet flow —
 * so on iOS we show static instructions instead of a real install button. This matters because
 * progress is stored locally, and only a Home Screen–installed (standalone) app is exempt from
 * Safari's 7-day inactivity storage eviction.
 */
export function useInstallPrompt() {
  const [dismissed, setDismissed] = useState(() => getSettings().installBannerDismissed)
  const [guidance, setGuidance] = useState<InstallGuidance>(() => {
    if (isStandalone() || getSettings().installBannerDismissed) return 'none'
    return isIOS() ? 'ios-manual' : 'none'
  })
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    // iOS is resolved synchronously above (there's no event to wait for); this effect only
    // needs to subscribe Android/Chrome's install-prompt event.
    if (isStandalone() || dismissed || isIOS()) return

    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault()
      setDeferredPrompt(event as BeforeInstallPromptEvent)
      setGuidance('android-prompt')
    }
    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
    return () => window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
  }, [dismissed])

  async function promptInstall() {
    if (!deferredPrompt) return
    await deferredPrompt.prompt()
    await deferredPrompt.userChoice
    setDeferredPrompt(null)
    setGuidance('none')
  }

  function dismiss() {
    updateSettings({ installBannerDismissed: true })
    setDismissed(true)
    setGuidance('none')
  }

  return { guidance, promptInstall, dismiss }
}

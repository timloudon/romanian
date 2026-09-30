import type { Settings } from './types'

const KEY = 'romanian-app:settings'

const DEFAULT_SETTINGS: Settings = {
  drivingNoticeAcknowledged: false,
  installBannerDismissed: false,
  preferredVoiceURI: null,
  playbackRate: 1,
  lifeFocus: null,
  structuresDone: [],
}

export function getSettings(): Settings {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return DEFAULT_SETTINGS
    return { ...DEFAULT_SETTINGS, ...(JSON.parse(raw) as Partial<Settings>) }
  } catch {
    return DEFAULT_SETTINGS
  }
}

export function updateSettings(patch: Partial<Settings>): Settings {
  const next = { ...getSettings(), ...patch }
  try {
    localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    // Safari private mode or full storage: settings just won't persist this session.
  }
  return next
}

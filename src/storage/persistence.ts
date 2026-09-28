/**
 * Best-effort request to opt out of storage-pressure eviction. Complementary to, and not a
 * substitute for, Home Screen installation — see useInstallPrompt.ts for why that part matters
 * specifically on iOS Safari.
 */
export async function requestPersistentStorage(): Promise<boolean> {
  if (!navigator.storage?.persist) return false
  try {
    return await navigator.storage.persist()
  } catch {
    return false
  }
}

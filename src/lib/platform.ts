/** iPhone/iPad, including iPadOS 13+ which disguises itself as a desktop Mac in the UA string. */
export function isIOS(): boolean {
  const ua = navigator.userAgent
  const isAppleTouchDevice = /iPad|iPhone|iPod/.test(ua)
  const isIPadOS13Plus = ua.includes('Macintosh') && navigator.maxTouchPoints > 1
  return isAppleTouchDevice || isIPadOS13Plus
}

/** True once installed to the Home Screen (or otherwise running display-mode: standalone). */
export function isStandalone(): boolean {
  const iosStandaloneFlag = (window.navigator as Navigator & { standalone?: boolean }).standalone
  return window.matchMedia('(display-mode: standalone)').matches || iosStandaloneFlag === true
}

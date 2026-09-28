/** Resolves after `ms`, or immediately once `signal` aborts — for cancelable timed pauses in
 *  Driving Mode's auto-advance loop. */
export function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve) => {
    if (signal?.aborted) {
      resolve()
      return
    }
    const id = setTimeout(() => {
      signal?.removeEventListener('abort', onAbort)
      resolve()
    }, ms)
    const onAbort = () => {
      clearTimeout(id)
      resolve()
    }
    signal?.addEventListener('abort', onAbort, { once: true })
  })
}

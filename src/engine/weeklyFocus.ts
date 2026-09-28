const DAY_MS = 24 * 60 * 60 * 1000

function startOfLocalDay(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
}

/** 1 on the day a topic was picked, 2 the next calendar day, and so on — by local calendar
 *  day, not elapsed hours, so picking a topic at 11pm doesn't make the next morning "day 1". */
export function focusDay(startedAt: string, now: Date = new Date()): number {
  const elapsedDays = Math.round((startOfLocalDay(now) - startOfLocalDay(new Date(startedAt))) / DAY_MS)
  return Math.max(1, elapsedDays + 1)
}

import { aroundTheHouse } from './topics/around-the-house'
import { bedtimeAndMornings } from './topics/bedtime-and-mornings'
import { celebrations } from './topics/celebrations'
import { grandparents } from './topics/grandparents'
import { hisDay } from './topics/his-day'
import { holidays } from './topics/holidays'
import { justUs } from './topics/just-us'
import { mealtimes } from './topics/mealtimes'
import { unwell } from './topics/unwell'
import { weekends } from './topics/weekends'
import type { LifeTopic } from './types'

/** Suggested week-by-week order; any topic can be picked at any time. */
export const lifeTopics: LifeTopic[] = [
  hisDay,
  holidays,
  bedtimeAndMornings,
  justUs,
  grandparents,
  mealtimes,
  unwell,
  weekends,
  aroundTheHouse,
  celebrations,
]

export function findLifeTopic(id: string | null | undefined): LifeTopic | undefined {
  return lifeTopics.find((topic) => topic.id === id)
}

export function nextLifeTopic(id: string): LifeTopic | undefined {
  const index = lifeTopics.findIndex((topic) => topic.id === id)
  return index === -1 ? undefined : lifeTopics[index + 1]
}

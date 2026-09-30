import { aroundTheHouse } from './topics/around-the-house'
import { bedtimeAndMornings } from './topics/bedtime-and-mornings'
import { celebrations } from './topics/celebrations'
import { disagreeing } from './topics/disagreeing'
import { familyHome } from './topics/family-home'
import { grandparents } from './topics/grandparents'
import { growingUp } from './topics/growing-up'
import { hisDay } from './topics/his-day'
import { holidays } from './topics/holidays'
import { inTheCar } from './topics/in-the-car'
import { justUs } from './topics/just-us'
import { market } from './topics/market'
import { mealtimes } from './topics/mealtimes'
import { talkingToHim } from './topics/talking-to-him'
import { unwell } from './topics/unwell'
import { weekends } from './topics/weekends'
import { work } from './topics/work'
import type { LifeTopic } from './types'

/** Suggested week-by-week order; any topic can be picked at any time. */
export const lifeTopics: LifeTopic[] = [
  hisDay,
  talkingToHim,
  holidays,
  bedtimeAndMornings,
  justUs,
  grandparents,
  growingUp,
  mealtimes,
  inTheCar,
  familyHome,
  unwell,
  weekends,
  market,
  disagreeing,
  work,
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

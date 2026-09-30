import { aroundTheHouse } from './topics/around-the-house'
import { arriving } from './topics/arriving'
import { bedtimeAndMornings } from './topics/bedtime-and-mornings'
import { bigFeelings } from './topics/big-feelings'
import { celebrations } from './topics/celebrations'
import { disagreeing } from './topics/disagreeing'
import { doctor } from './topics/doctor'
import { familyHome } from './topics/family-home'
import { feelings } from './topics/feelings'
import { grandparents } from './topics/grandparents'
import { growingUp } from './topics/growing-up'
import { guests } from './topics/guests'
import { hisDay } from './topics/his-day'
import { holidays } from './topics/holidays'
import { inTheCar } from './topics/in-the-car'
import { justUs } from './topics/just-us'
import { market } from './topics/market'
import { mealtimes } from './topics/mealtimes'
import { nursery } from './topics/nursery'
import { plans } from './topics/plans'
import { pottyAndBath } from './topics/potty-and-bath'
import { romanianFood } from './topics/romanian-food'
import { talkingToHim } from './topics/talking-to-him'
import { unwell } from './topics/unwell'
import { weather } from './topics/weather'
import { weekends } from './topics/weekends'
import { work } from './topics/work'
import type { LifeTopic } from './types'

/** Suggested week-by-week order; any topic can be picked at any time. */
export const lifeTopics: LifeTopic[] = [
  hisDay,
  talkingToHim,
  holidays,
  arriving,
  bedtimeAndMornings,
  justUs,
  grandparents,
  growingUp,
  nursery,
  pottyAndBath,
  bigFeelings,
  mealtimes,
  romanianFood,
  inTheCar,
  familyHome,
  guests,
  unwell,
  doctor,
  weekends,
  weather,
  market,
  disagreeing,
  feelings,
  work,
  plans,
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

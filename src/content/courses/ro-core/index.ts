import type { Course } from '../../types'
import { unit01 } from './unit-01-wanting-and-needing'
import { unit02 } from './unit-02-him-her-it'
import { unit03 } from './unit-03-what-happened'
import { unit04 } from './unit-04-family'
import { unit05 } from './unit-05-food-and-meals'

export const roCore: Course = {
  id: 'ro-core',
  title: 'Romanian: Conversational Core',
  units: [unit01, unit02, unit03, unit04, unit05],
}

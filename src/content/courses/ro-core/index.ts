import type { Course } from '../../types'
import { unit01 } from './unit-01-wanting-and-needing'
import { unit02 } from './unit-02-him-her-it'
import { unit03 } from './unit-03-what-happened'
import { unit04 } from './unit-04-family'
import { unit05 } from './unit-05-food-and-meals'
import { unit06 } from './unit-06-liking-things'
import { unit07 } from './unit-07-future'
import { unit08 } from './unit-08-reflexive'
import { unit09 } from './unit-09-polite-and-comparing'
import { unit10 } from './unit-10-daily-life'
import { unit11 } from './unit-11-getting-around'
import { unit13 } from './unit-13-commands'
import { unit14 } from './unit-14-because-if-when'
import { unit15 } from './unit-15-thoughts-and-reports'
import { unit16 } from './unit-16-used-to'
import { unit17 } from './unit-17-would'
import { unit18 } from './unit-18-who-which'
import { unit19 } from './unit-19-giving-it'
import { unit20 } from './unit-20-whose'
import { unit21 } from './unit-21-impersonal-se'
import { unit22 } from './unit-22-glue-words'

// There's deliberately no unit12: its id and drill ids were retired when that content moved to
// the "Just us" weekly topic (which still uses the u12 drill ids), so they can't be reused here.
export const roCore: Course = {
  id: 'ro-core',
  title: 'Romanian: Conversational Core',
  units: [
    unit01,
    unit02,
    unit03,
    unit04,
    unit05,
    unit06,
    unit07,
    unit08,
    unit09,
    unit10,
    unit11,
    unit13,
    unit14,
    unit15,
    unit16,
    unit17,
    unit18,
    unit19,
    unit20,
    unit21,
    unit22,
  ],
}

import { dateUtil } from '@sprucelabs/calendar-utils'
import { generateId } from '@sprucelabs/test-utils'
import { Adventure } from '../adventure.types'
import generateAddressValues from './generateAddressValues'

export default function generateAdventureValues(
    values?: Partial<Adventure>
): Adventure {
    return {
        id: generateId(),
        what: generateId(),
        when: dateUtil.addDays(new Date().getTime(), 1),
        where: generateAddressValues(),
        whosIn: [],
        whosOut: [],
        ...values,
        source: {
            personId: generateId(),
            ...values?.source,
        },
    }
}

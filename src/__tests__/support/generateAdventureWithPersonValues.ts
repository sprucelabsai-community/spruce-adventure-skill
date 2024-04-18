import { generateId } from '@sprucelabs/test-utils'
import { AdventureWithPerson } from '../../adventure.types'
import generateAdventureValues from './generateAdventureValues'
import { generateAvatarValues } from './generateAvatarValues'

export default function generateAdventureWithPersonValues(
    values?: Partial<AdventureWithPerson>
): AdventureWithPerson {
    return {
        ...generateAdventureValues(values),
        personCasualName: generateId(),
        personAvatar: generateAvatarValues(),
    }
}

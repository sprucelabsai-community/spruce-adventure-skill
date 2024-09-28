import { generateId } from '@sprucelabs/test-utils'
import { ListAdventure } from '../../adventure.types'
import generateAdventureValues from './generateAdventureValues'
import { generateAvatarValues } from './generateAvatarValues'

export default function generateAdventureWithPersonValues(
    values?: Partial<ListAdventure>
): ListAdventure {
    return {
        ...generateAdventureValues(values),
        personCasualName: generateId(),
        personAvatar: generateAvatarValues(),
    }
}

import { PostAdventure } from '../../../../adventure.types'
import generateAdventureValues from '../../../support/generateAdventureValues'

export function generatePostAdventureValues(
    values?: Partial<PostAdventure>
): PostAdventure {
    const adventure = generateAdventureValues()

    return {
        what: adventure.what,
        when: values?.when ?? adventure.when,
        where: adventure.where,
    }
}

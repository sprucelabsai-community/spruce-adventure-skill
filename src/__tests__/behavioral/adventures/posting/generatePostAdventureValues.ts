import { PostAdventure } from '../../../../adventure.types'
import generateAdventureValues from '../../../../adventures/generateAdventureValues'

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

import { PostAdventure } from '../../../adventure.types'
import generateAdventureValues from '../../support/generateAdventureValues'

export function generatePostAdventureValues(): PostAdventure {
	const adventure = generateAdventureValues()

	return {
		what: adventure.what,
		when: adventure.when,
		where: adventure.where,
	}
}

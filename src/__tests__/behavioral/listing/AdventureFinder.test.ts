import { generateUploadedImageValues } from '@sprucelabs/spruce-image-utils'
import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'
import AdventureFinder from '../../../listing/AdventureFinder'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import { generatePostAdventureValues } from '../posting/generatePostAdventureValues'

@fake.login()
export default class AdventureFinderTest extends AbstractAdventureTest {
	@test()
	@seed('locations', 1)
	@seed('teammates', 5)
	protected static async finderReturnsNameOfPoster() {
		for (const teammate of this.fakedTeammates) {
			teammate.avatar = {
				...generateUploadedImageValues().sizes,
				name: generateId(),
			}
			await this.adventures.createOne({
				...generatePostAdventureValues(),
				source: {
					personId: teammate.id,
				},
			})
			await this.connections.createOne({
				isConfirmed: true,
				source: { personId: this.fakedPerson.id },
				target: {
					personId: teammate.id,
				},
			})
		}

		const finder = await AdventureFinder.Finder({
			stores: this.stores,
			client: this.fakedClient,
		})

		const adventures = await finder.findForPerson(this.fakedPerson.id)

		for (const teammate of this.fakedTeammates) {
			const match = adventures.find((a) => a.source.personId === teammate.id)
			assert.isTruthy(match, `I could not find an adventure for this teammate.`)
			assert.isEqual(match.personCasualName, teammate.casualName)
			assert.isEqualDeep(match.personAvatar, teammate.avatar)
		}
	}
}

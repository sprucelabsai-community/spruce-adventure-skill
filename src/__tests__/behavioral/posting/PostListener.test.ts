import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test-utils'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import generateAdventureValues from '../../support/generateAdventureValues'

@fake.login()
export default class PostListenerTest extends AbstractAdventureTest {
	@test()
	protected static async postingAdventureSavesUnderCurrentPerson() {
		await this.bootSkill()
		const adventure = this.generatePostAdventureValues()

		const [{ adventure: created }] =
			await this.fakedClient.emitAndFlattenResponses(
				'adventure.post::v2022_09_09',
				{
					payload: {
						adventure,
					},
				}
			)

		const saved = await this.adventures.findOne({})
		assert.doesInclude(saved, {
			...adventure,
			source: { personId: this.fakedPerson.id },
		})
		assert.isEqualDeep(created, saved)
	}

	private static generatePostAdventureValues() {
		const adventure = generateAdventureValues()
		//@ts-ignore
		delete adventure.id
		//@ts-ignore
		delete adventure.source
		return adventure
	}
}

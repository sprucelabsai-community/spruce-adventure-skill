import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'

@fake.login()
export default class ListListenerTest extends AbstractAdventureTest {
	protected static async beforeEach() {
		await super.beforeEach()
		await this.bootSkill()
	}

	@test()
	protected static async skillIsListening() {
		await this.emit()
	}

	@test()
	@seed('adventures', 1, { shouldAttachToFakedPerson: true })
	protected static async returnsOwnsAdventure() {
		await this.assertOnlyLoggedInPersonsAdventure()
	}

	@test()
	@seed('adventures', 1)
	@seed('adventures', 1, { shouldAttachToFakedPerson: true })
	protected static async onlyReturnsYoursWithoutFriends() {
		await this.assertOnlyLoggedInPersonsAdventure()
	}

	@test()
	@seed('adventures', 1)
	@seed('adventures', 1, { shouldAttachToFakedPerson: true })
	@seed('adventures', 1)
	protected static async onlyReturnsYoursWithoutFriendsInTheMiddle() {
		await this.assertOnlyLoggedInPersonsAdventure()
	}

	private static async assertOnlyLoggedInPersonsAdventure() {
		const actual = await this.emit()
		const record = await this.adventures.findOne({
			//@ts-ignore
			'source.personId': this.fakedPerson.id,
		})
		const expected = [record]
		assert.isEqualDeep(actual, expected)
	}

	private static async emit() {
		const [{ adventures }] = await this.fakedClient.emitAndFlattenResponses(
			'adventure.list::v2022_09_09'
		)

		return adventures
	}
}

import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test'
import { AdventureWithPerson } from '../../../adventure.types'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import { generateAvatarValues } from '../../support/generateAdventureValues'

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

	@test()
	@seed('adventures', 1, { shouldAttachToFakedPerson: true })
	protected static async dropsInAvatar() {
		this.fakedPerson.avatar = {
			...generateAvatarValues(),
		}
		await this.assertOnlyLoggedInPersonsAdventure()
	}

	private static async assertOnlyLoggedInPersonsAdventure() {
		const actual = await this.emit()
		const person = this.fakedPerson
		const record = await this.adventures.findOne({
			//@ts-ignore
			'source.personId': person.id,
		})

		assert.isTruthy(
			record,
			`You need '@seed('adventures', 1, { shouldAttachToFakedPerson: true })' to continue.`
		)

		const expected: AdventureWithPerson[] = [
			{
				...record,
				personCasualName: person.casualName,
				personAvatar: person.avatar ?? undefined,
			},
		]
		assert.isEqualDeep(actual, expected)
	}

	private static async emit() {
		const [{ adventures }] = await this.fakedClient.emitAndFlattenResponses(
			'adventure.list::v2022_09_09'
		)

		return adventures
	}
}

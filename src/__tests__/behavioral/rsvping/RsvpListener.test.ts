import { MercuryClient } from '@sprucelabs/mercury-client'
import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId, errorAssert } from '@sprucelabs/test-utils'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'

@fake.login()
export default class RsvpListenerTest extends AbstractAdventureTest {
	@seed('adventures', 1)
	protected static async beforeEach() {
		await super.beforeEach()
		await this.bootSkill()
	}

	@test()
	protected static async throwsNotFoundWithBadAdventureId() {
		const id = generateId()
		const err = await assert.doesThrowAsync(() => this.emitRsvp({ id }))
		errorAssert.assertError(err, 'NOT_FOUND')
	}

	@test()
	protected static async noCrashWithGoodAdventureId() {
		const success = await this.rsvpFirstAdventure()
		assert.isTrue(success)
	}

	@test()
	protected static async addsRspToAdventure() {
		await this.rsvpFirstAdventure()
		await this.assertWhoseIn([this.fakedPerson.id])
	}

	@test()
	protected static async canAddManyRsvps() {
		await this.rsvpFirstAdventure()
		const { client, person } = await this.people.loginAsDemoPerson(
			'555-555-1234'
		)

		await this.rsvpFirstAdventure({ client })
		await this.assertWhoseIn([this.fakedPerson.id, person.id])
	}

	private static async assertWhoseIn(expected: string[]) {
		const adventure = await this.getFirstAdventure()
		assert.isEqualDeep(adventure.whosIn, expected)
	}

	private static async rsvpFirstAdventure(options?: {
		client?: MercuryClient
	}) {
		const adventure = await this.getFirstAdventure()
		const success = await this.emitRsvp({ id: adventure.id, ...options })
		return success
	}

	private static async getFirstAdventure() {
		const adventure = await this.adventures.findOne({})
		assert.isTruthy(adventure)
		return adventure
	}

	private static async emitRsvp(options: {
		id: string
		client?: MercuryClient
	}): Promise<boolean> {
		const { id, client } = options

		const [{ success }] = await (
			client ?? this.fakedClient
		).emitAndFlattenResponses('adventure.rsvp::v2022_09_09', {
			target: {
				adventureId: id,
			},
			payload: {
				canIMakeIt: true,
			},
		})

		return success
	}
}

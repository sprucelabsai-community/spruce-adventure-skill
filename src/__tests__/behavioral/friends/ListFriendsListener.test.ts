import { MercuryClient } from '@sprucelabs/mercury-client'
import { fake, SpruceSchemas } from '@sprucelabs/spruce-test-fixtures'
import { assert, generateId, test } from '@sprucelabs/test-utils'
import { Friend } from '../../../adventure.types'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import { ListPeopleTargetAndPayload } from '../../support/EventFaker'
import { generateAvatarValues } from '../../support/generateAdventureValues'

@fake.login()
export default class ListFriendsListenerTest extends AbstractAdventureTest {
	private static passedTargetAndPayload: ListPeopleTargetAndPayload | undefined
	private static client: MercuryClient
	protected static async beforeEach() {
		await super.beforeEach()
		await this.bootSkill()

		this.passedTargetAndPayload = undefined
		this.client = this.fakedClient

		await this.eventFaker.fakeListPeople((targetAndPayload) => {
			this.passedTargetAndPayload = targetAndPayload
			delete this.passedTargetAndPayload?.source
		})
	}

	@test()
	protected static async noResultsByDefault() {
		await this.emitAndAssertFriends([])
	}

	@test()
	protected static async returnsConfirmedFriendsByDefault() {
		const receiver = this.generateFriendValues()

		await this.eventFaker.fakeListPeople(() => {
			return [{ ...receiver, dateCreated: 0 }]
		})

		await this.createConnection(this.fakedPerson.id, receiver.id)
		await this.emitAndAssertFriends([receiver])
	}

	@test()
	protected static async passesExpectedPersonIdsToListPeople() {
		const person1Id = await this.createNewConnectionAndEmit()
		this.assertPersonIdsInLastListPeopleEmit([person1Id])
		const person2Id = await this.createNewConnectionAndEmit()
		this.assertPersonIdsInLastListPeopleEmit([person1Id, person2Id])
		const person3Id = await this.createReversedConnectionWithNewPerson()
		await this.emit()
		this.assertPersonIdsInLastListPeopleEmit([person1Id, person2Id, person3Id])
	}

	@test()
	protected static async listFriendsHonorsSourceEmitting() {
		const friend = this.generateFriendValues()
		await this.createConnectionWithNewPerson(friend.id)

		await this.eventFaker.fakeListPeople(() => {
			return [{ ...friend, dateCreated: 0 }]
		})

		const { client } = await this.people.loginAsDemoPerson('555-555-1234')
		this.client = client

		await this.emitAndAssertFriends([])
	}

	@test()
	protected static async filtersOutPendingToStart() {
		await this.createConnectionWithNewPerson(undefined, false)

		let wasHit = false
		await this.eventFaker.fakeListPeople(() => {
			wasHit = true
		})
		await this.emit()

		assert.isFalse(wasHit)
	}

	@test()
	protected static async canShowPending() {
		await this.createConnectionWithNewPerson(undefined, false)

		let wasHit = false

		await this.eventFaker.fakeListPeople(() => {
			wasHit = true
		})

		await this.emit({
			filter: 'pending',
		})

		assert.isTrue(wasHit)
	}

	private static async createNewConnectionAndEmit() {
		const person1Id = await this.createConnectionWithNewPerson()
		await this.emit()
		return person1Id
	}

	private static assertPersonIdsInLastListPeopleEmit(
		expectedPersonsIds: string[]
	) {
		assert.isEqualDeep(this.passedTargetAndPayload, {
			payload: {
				personIds: expectedPersonsIds,
			},
		})
	}

	private static async createConnectionWithNewPerson(
		personId?: string,
		isConfirmed = true
	) {
		const person1Id = personId ?? generateId()
		await this.createConnection(this.fakedPerson.id, person1Id, isConfirmed)
		return person1Id
	}

	private static async createReversedConnectionWithNewPerson() {
		const person1Id = generateId()
		await this.createConnection(person1Id, this.fakedPerson.id)
		return person1Id
	}

	private static async emitAndAssertFriends(expected: Friend[]) {
		const friends = await this.emit()
		assert.isEqualDeep(friends, expected)
	}

	private static generateFriendValues(): Friend {
		return {
			id: generateId(),
			casualName: generateId(),
			avatar: generateAvatarValues(),
		}
	}

	private static async createConnection(
		sourceId: string,
		targetId: string,
		isConfirmed = true
	) {
		await this.connections.createOne({
			source: { personId: sourceId },
			target: { personId: targetId },
			isConfirmed,
		})
	}

	private static async emit(payload?: ListFriendsPayload) {
		const [{ friends }] = await this.client.emitAndFlattenResponses(
			'adventure.list-friends::v2022_09_09',
			{ payload }
		)

		return friends
	}
}

type ListFriendsPayload =
	SpruceSchemas.Adventure.v2022_09_09.ListFriendsEmitPayload

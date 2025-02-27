import { MercuryClient } from '@sprucelabs/mercury-client'
import { fake, SpruceSchemas } from '@sprucelabs/spruce-test-fixtures'
import {
    assert,
    errorAssert,
    generateId,
    test,
    suite,
} from '@sprucelabs/test-utils'
import { Friend } from '../../../../adventure.types'
import AbstractFriendsTest from '../../../support/AbstractFriendsTest'
import { ListPeopleTargetAndPayload } from '../../../support/EventFaker'

@fake.login()
@suite()
export default class ListFriendsListenerTest extends AbstractFriendsTest {
    private passedTargetAndPayload!: ListPeopleTargetAndPayload | undefined
    private client!: MercuryClient
    private skillId!: string

    protected async beforeEach() {
        await super.beforeEach()
        await this.bootSkill()

        const { skill } = await this.skills.loginAsCurrentSkill()
        this.skillId = skill.id

        this.passedTargetAndPayload = undefined
        this.client = this.fakedClient

        await this.eventFaker.fakeListPeople((targetAndPayload) => {
            this.passedTargetAndPayload = targetAndPayload
            delete this.passedTargetAndPayload.source?.proxyToken
        })
    }

    @test()
    protected async noResultsByDefault() {
        await this.emitAndAssertFriends([])
    }

    @test()
    protected async returnsConfirmedFriendsByDefault() {
        const friends = [this.generateFriendValues()]

        await this.fakeListPeople(friends)

        await this.createConnection(this.fakedPerson.id, friends[0].id)
        await this.emitAndAssertFriends(friends)
    }

    @test()
    protected async passesExpectedPersonIdsToListPeople() {
        const person1Id = await this.createNewConnectionAndEmit()
        this.assertPersonIdsInLastListPeopleEmit([person1Id])
        const person2Id = await this.createNewConnectionAndEmit()
        this.assertPersonIdsInLastListPeopleEmit([person1Id, person2Id])
        const person3Id = await this.createReversedConnectionWithNewPerson()
        await this.emit()
        this.assertPersonIdsInLastListPeopleEmit([
            person1Id,
            person2Id,
            person3Id,
        ])
    }

    @test()
    protected async listFriendsHonorsSourceEmitting() {
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
    protected async filtersOutPendingToStart() {
        await this.createConnectionWithNewPerson(undefined, false)

        let wasHit = false
        await this.eventFaker.fakeListPeople(() => {
            wasHit = true
        })
        await this.emit()

        assert.isFalse(wasHit)
    }

    @test()
    protected async canShowPending() {
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

    @test()
    protected async canTellProperWhoInvitedWhom() {
        const me = this.fakedPerson
        const friend1 = this.generateFriendValues('me')
        const friend2 = this.generateFriendValues('them')

        await this.createConnection(me.id, friend1.id)
        await this.createConnection(friend2.id, me.id)

        const friends = [friend1, friend2]
        await this.fakeListPeople(friends)
        await this.emitAndAssertFriends(friends)
    }

    @test()
    protected async throwsWhenTryingToFilterByGroupNotFound() {
        const err = await assert.doesThrowAsync(() =>
            this.emit({ isInGroupId: generateId() })
        )
        errorAssert.assertError(err, 'NOT_FOUND')
    }

    private async createNewConnectionAndEmit() {
        const person1Id = await this.createConnectionWithNewPerson()
        await this.emit()
        return person1Id
    }

    private assertPersonIdsInLastListPeopleEmit(expectedPersonsIds: string[]) {
        assert.isEqualDeep(this.passedTargetAndPayload, {
            source: {
                skillId: this.skillId,
            },
            payload: {
                personIds: expectedPersonsIds,
            },
        })
    }

    private async createConnectionWithNewPerson(
        personId?: string,
        isConfirmed = true
    ) {
        const person1Id = personId ?? generateId()
        await this.createConnection(this.fakedPerson.id, person1Id, isConfirmed)
        return person1Id
    }

    private async createReversedConnectionWithNewPerson() {
        const person1Id = generateId()
        await this.createConnection(person1Id, this.fakedPerson.id)
        return person1Id
    }

    private async emitAndAssertFriends(expected: Friend[]) {
        const friends = await this.emit()
        assert.isEqualDeep(friends, expected)
    }

    private async emit(payload?: ListFriendsPayload) {
        const [{ friends }] = await this.client.emitAndFlattenResponses(
            'adventure.list-friends::v2022_09_09',
            { payload }
        )

        return friends
    }
}

type ListFriendsPayload =
    SpruceSchemas.Adventure.v2022_09_09.ListFriendsEmitPayload

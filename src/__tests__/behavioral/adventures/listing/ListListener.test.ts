import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { assert, generateId, test } from '@sprucelabs/test-utils'
import { AdventureWithPerson } from '../../../../adventure.types'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'
import { generateAvatarValues } from '../../../support/generateAvatarValues'

@fake.login()
export default class ListListenerTest extends AbstractAdventureTest {
    protected static async beforeEach() {
        await super.beforeEach()
        await this.bootSkill()
        await this.eventFaker.fakeGetPerson(() => this.fakedPerson)
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

    @test()
    protected static async returnsAdventuresFromConnections() {
        const toId = await this.createFriendAdventure()
        await this.createConnection(this.fakedPerson.id, toId)
        await this.assertReturnsOneAdventure()
    }

    @test()
    protected static async canReturnAdventureFromReverseConnection() {
        const fromId = await this.createFriendAdventure()
        await this.createConnection(fromId, this.fakedPerson.id)
        await this.assertReturnsOneAdventure()
    }

    @test()
    protected static async canCheckMultipleConnections() {
        const friend1 = await this.createFriendAdventure()
        const friend2 = await this.createFriendAdventure()
        await this.createConnection(friend1, this.fakedPerson.id)
        await this.createConnection(this.fakedPerson.id, friend2)
        await this.assertTotalAdventures(2)
    }

    @test()
    protected static async ignoresOtherPeoplesConnections() {
        const friend1 = await this.createFriendAdventure()
        await this.createConnection(friend1, generateId())
        await this.assertTotalAdventures(0)
    }

    @test()
    protected static async sortsDateTimeAsc() {
        const adventures = await this.stores.getStore('adventures')
        let passedOptions: Record<string, any> | undefined

        adventures.find = async (_, options) => {
            passedOptions = options
            return []
        }

        await this.emit()

        assert.isEqualDeep(passedOptions, {
            sort: [
                {
                    field: 'when',
                    direction: 'asc',
                },
            ],
        })
    }

    private static async assertReturnsOneAdventure() {
        const expected = 1
        await this.assertTotalAdventures(expected)
    }

    private static async assertTotalAdventures(expected: number) {
        const adventures = await this.emit()
        assert.isLength(adventures, expected)
    }

    private static async createConnection(fromId: string, toId: string) {
        await this.connections.createOne({
            isConfirmed: true,
            source: {
                personId: fromId,
            },
            target: {
                personId: toId,
            },
        })
    }

    private static async createFriendAdventure(when?: number) {
        const personId = generateId()
        const adventure = await this.seedAdventure(personId)
        adventure.when = when ?? adventure.when
        return personId
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

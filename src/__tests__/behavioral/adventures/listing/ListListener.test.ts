import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { assert, generateId, test, suite } from '@sprucelabs/test-utils'
import { ListAdventure } from '../../../../adventure.types'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'
import { generateAvatarValues } from '../../../support/generateAvatarValues'

@fake.login()
@suite()
export default class ListListenerTest extends AbstractAdventureTest {
    protected async beforeEach() {
        await super.beforeEach()
        await this.bootSkill()
        await this.eventFaker.fakeGetPerson(() => this.fakedPerson)
    }

    @test()
    protected async skillIsListening() {
        await this.emit()
    }

    @test()
    @seed('adventures', 1, { shouldPostAsFakedPerson: true })
    protected async returnsOwnsAdventure() {
        await this.assertOnlyLoggedInPersonsAdventure()
    }

    @test()
    @seed('adventures', 1)
    @seed('adventures', 1, { shouldPostAsFakedPerson: true })
    protected async onlyReturnsYoursWithoutFriends() {
        await this.assertOnlyLoggedInPersonsAdventure()
    }

    @test()
    @seed('adventures', 1)
    @seed('adventures', 1, { shouldPostAsFakedPerson: true })
    @seed('adventures', 1)
    protected async onlyReturnsYoursWithoutFriendsInTheMiddle() {
        await this.assertOnlyLoggedInPersonsAdventure()
    }

    @test()
    @seed('adventures', 1, { shouldPostAsFakedPerson: true })
    protected async dropsInAvatar() {
        this.fakedPerson.avatar = {
            ...generateAvatarValues(),
        }
        await this.assertOnlyLoggedInPersonsAdventure()
    }

    @test()
    protected async returnsAdventuresFromConnections() {
        const toId = await this.seedAdventurePostedByFriend()
        await this.createConnection(this.fakedPerson.id, toId)
        await this.assertReturnsOneAdventure()
    }

    @test()
    protected async canReturnAdventureFromReverseConnection() {
        const fromId = await this.seedAdventurePostedByFriend()
        await this.createConnection(fromId, this.fakedPerson.id)
        await this.assertReturnsOneAdventure()
    }

    @test()
    protected async canCheckMultipleConnections() {
        const friend1 = await this.seedAdventurePostedByFriend()
        const friend2 = await this.seedAdventurePostedByFriend()
        await this.createConnection(friend1, this.fakedPerson.id)
        await this.createConnection(this.fakedPerson.id, friend2)
        await this.assertTotalAdventures(2)
    }

    @test()
    protected async ignoresOtherPeoplesConnections() {
        const friend = await this.seedAdventurePostedByFriend()
        await this.createConnection(friend, generateId())
        await this.assertTotalAdventures(0)
    }

    @test()
    protected async sortsDateTimeAsc() {
        let passedOptions: Record<string, any> | undefined

        this.adventures.find = async (_, options) => {
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

    @test()
    @seed('groups', 1, {
        shouldCreateAsFakedPerson: false,
        shouldAddFakedPersonAsMember: true,
    })
    @seed('adventures', 1, {
        shouldPostAsFakedPerson: false,
        shouldPostToGroup: true,
    })
    protected async shouldReturnAdventuresPostedToGroupsImIn() {
        await this.assertTotalAdventures(1)
    }

    @test()
    @seed('groups', 1, {
        shouldCreateAsFakedPerson: false,
        shouldAddFakedPersonAsMember: false,
    })
    @seed('adventures', 1, {
        shouldPostAsFakedPerson: false,
        shouldPostToGroup: true,
    })
    protected async doesNotReturnAdventuresPostedToGroupsImNotIn() {
        await this.assertTotalAdventures(0)
    }

    @test()
    @seed('groups', 1, {
        shouldCreateAsFakedPerson: false,
        shouldAddFakedPersonAsMember: true,
    })
    @seed('adventures', 1, {
        shouldPostAsFakedPerson: false,
        shouldPostToGroup: true,
    })
    @seed('adventures', 1, {
        shouldPostAsFakedPerson: false,
        shouldPostToGroup: true,
    })
    protected async returnsIfPartOfMultipleAdventuresInSameGroup() {
        await this.assertTotalAdventures(2)
    }

    private async assertReturnsOneAdventure() {
        const expected = 1
        await this.assertTotalAdventures(expected)
    }

    private async assertTotalAdventures(expected: number) {
        const adventures = await this.emit()
        assert.isLength(
            adventures,
            expected,
            `Didn't get back the right number of adventures!`
        )
    }

    private async createConnection(fromId: string, toId: string) {
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

    private async seedAdventurePostedByFriend(when?: number) {
        const personId = generateId()
        const adventure = await this.seedAdventure(personId)
        adventure.when = when ?? adventure.when
        return personId
    }

    private async assertOnlyLoggedInPersonsAdventure() {
        const actual = await this.emit()
        const person = this.fakedPerson
        const record = await this.adventures.findOne({
            //@ts-ignore
            'source.personId': person.id,
        })

        assert.isTruthy(
            record,
            `You need '@seed('adventures', 1, { shouldPostAsFakedPerson: true })' to continue.`
        )

        const expected: ListAdventure[] = [
            {
                ...record,
                personCasualName: person.casualName,
                personAvatar: person.avatar ?? undefined,
            },
        ]
        assert.isEqualDeep(actual, expected)
    }

    private async emit() {
        const [{ adventures }] = await this.fakedClient.emitAndFlattenResponses(
            'adventure.list::v2022_09_09'
        )

        return adventures
    }
}

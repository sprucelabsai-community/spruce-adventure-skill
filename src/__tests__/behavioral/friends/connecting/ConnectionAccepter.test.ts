import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { assert, generateId, test } from '@sprucelabs/test-utils'
import { Group } from '../../../../adventure.types'
import ConnectionAccepter from '../../../../friends/connecting/ConnectionAccepter'
import AbstractFriendsTest from '../../../support/AbstractFriendsTest'

@fake.login()
export default class ConnectionAccepterTest extends AbstractFriendsTest {
    private static group: Group
    private static accepter: ConnectionAccepter

    @seed('groups', 1)
    @seed('organizations', 1)
    @seed('guests', 1)
    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()

        this.group = (await this.getNewestGroup()) as Group
        this.accepter = await ConnectionAccepter.Accepter({
            stores: this.stores,
        })
    }

    @test()
    protected static async addsPersonToGroupIfGroupSupplied() {
        await this.createConnectionAndAcceptAsFirstGuest([
            this.fakedGuests[0].id,
        ])
    }

    @test()
    protected static async persistsExistingFriends() {
        const personId = generateId()
        await this.groups.updateOne(
            {},
            {
                people: [personId],
            }
        )
        await this.createConnectionAndAcceptAsFirstGuest([
            personId,
            this.fakedGuests[0].id,
        ])
    }

    @test()
    @seed('groups', 1)
    protected static async updatesTheCorrectGroup() {
        const [group1, group2] = await this.groups.find({})
        const connectionId = await this.connectWithGroup(group2.id)
        await this.accept(connectionId)
        await this.assertGroupsPeopleEqual([], group1.id)
    }

    private static async createConnectionAndAcceptAsFirstGuest(
        expectedPeople: string[]
    ) {
        const connectionId = await this.connectWithGroup(this.group.id)
        await this.accept(connectionId)
        await this.assertGroupsPeopleEqual(expectedPeople)
    }

    private static async accept(connectionId: string) {
        await this.accepter.acceptConnection(
            connectionId,
            this.fakedGuests[0].id
        )
    }

    private static async connectWithGroup(groupId: string) {
        return await this.createConnectionWithGroup({
            fromPersonId: this.myId,
            groupId,
        })
    }

    private static async assertGroupsPeopleEqual(
        expected: string[],
        groupId?: string
    ) {
        const savedGroup = await this.groups.findOne({
            id: groupId ?? this.group.id,
        })
        assert.isTruthy(savedGroup)
        assert.isEqualDeep(savedGroup.people, expected)
    }
}

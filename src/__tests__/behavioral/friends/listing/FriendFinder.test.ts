import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId, errorAssert } from '@sprucelabs/test-utils'
import FriendFinder from '../../../../friends/listing/FriendFinder'
import AbstractFriendsTest from '../../../support/AbstractFriendsTest'

@fake.login()
export default class FriendFinderTest extends AbstractFriendsTest {
    private static finder: FriendFinder
    private static passedPeopleIds?: string[] | null
    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()

        this.finder = await FriendFinder.Finder({
            client: this.fakedClient,
            stores: this.stores,
        })

        await this.eventFaker.fakeListPeople(({ payload }) => {
            this.passedPeopleIds = payload?.personIds
            return this.fakedGuests
        })
    }

    @test()
    @seed('groups', 1)
    protected static async canCreateFriendFinder() {
        await this.connectToOneFriend()

        const group = await this.getFirstGroup()
        await this.assertFirstPersonIsInGroup(group.id, false)
    }

    @test()
    @seed('groups', 1)
    protected static async throwsWithNotFoundWithBadGroupId() {
        const err = await assert.doesThrowAsync(() =>
            this.findInGroup(generateId())
        )

        errorAssert.assertError(err, 'NOT_FOUND')
    }

    @test()
    @seed('groups', 1)
    protected static async returnsInGroupIfInGroup() {
        const friend = await this.connectToOneFriend()
        const match = await this.addPeopleToGroup([friend.id])
        await this.assertFirstPersonIsInGroup(match.id, true)
    }

    @test()
    @seed('groups', 1)
    protected static async canFindIfSecondPersonInGroup() {
        const friend = await this.connectToOneFriend()
        const match = await this.addPeopleToGroup([generateId(), friend.id])
        await this.assertFirstPersonIsInGroup(match.id, true)
    }

    @test()
    @seed('groups', 1)
    @seed('organizations', 1)
    @seed('guests', 1)
    protected static async ifPassingGroupReturnsPeopleInGroupAsWell() {
        const group = await this.setPeopleOnGroup([this.fakedGuests[0].id])

        await this.findInGroup(group.id)
        this.assertPeoplePassedToListPeople([this.fakedGuests[0].id])
    }

    @test()
    @seed('groups', 1)
    @seed('organizations', 1)
    @seed('guests', 1)
    protected static async returnsSelfIfListedInGroup() {
        const group = await this.setPeopleOnGroup(
            [this.fakedPerson.id],
            this.fakedGuests[0].id
        )

        await this.findInGroup(group.id)
        this.assertPeoplePassedToListPeople([this.fakedPerson.id])
    }

    private static assertPeoplePassedToListPeople(expected: string[]) {
        assert.isEqualDeep(this.passedPeopleIds, expected)
    }

    private static async setPeopleOnGroup(
        people: string[],
        sourcePersonId?: string
    ) {
        return await this.groups.updateOne(
            {},
            {
                people,
                source: { personId: sourcePersonId ?? this.fakedPerson.id },
            }
        )
    }

    private static async addPeopleToGroup(peopleIds: string[]) {
        return await this.groups.updateOne(
            {},
            {
                people: peopleIds,
            }
        )
    }

    private static async assertFirstPersonIsInGroup(
        groupId: string,
        isInGroup: boolean
    ) {
        const [match] = await this.findInGroup(groupId)
        assert.isEqual(match.isInGroup, isInGroup)
    }

    private static async connectToOneFriend() {
        const friend = this.generateFriendValues()
        await this.fakeListPeople([friend])
        await this.connectToMe(friend.id)

        return friend
    }

    private static async findInGroup(groupId: string) {
        return await this.finder.findForPerson({
            arePartOfGroupId: groupId,
            personId: this.fakedPerson.id,
        })
    }

    private static async connectToMe(friendId: string) {
        await this.createConnection(this.fakedPerson.id, friendId)
    }
}

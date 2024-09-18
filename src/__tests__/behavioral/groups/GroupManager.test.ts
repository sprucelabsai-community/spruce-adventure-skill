import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId, errorAssert } from '@sprucelabs/test-utils'
import { Group } from '../../../adventure.types'
import GroupFinder from '../../../groups/GroupFinder'
import GroupManagerImpl, {
    GroupManageConstructorOptions,
    SendBeenInvitedMessageOptions,
} from '../../../groups/GroupManager'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import { SendMessageTargetAndPayload } from '../../support/EventFaker'

@fake.login()
export default class GroupManagerTest extends AbstractAdventureTest {
    private static sendMessageTargets: SendMessageTargetAndPayload['target'][] =
        []
    private static sendMessagePayloads: SendMessageTargetAndPayload['payload'][] =
        []
    private static manager: SpyGroupManager
    private static group: Group

    @seed('organizations', 1)
    @seed('guests', 1)
    @seed('groups', 1)
    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()

        this.sendMessageTargets = []
        this.sendMessagePayloads = []

        await this.eventFaker.fakeSendMessage(({ target, payload }) => {
            this.sendMessageTargets.push(target)
            this.sendMessagePayloads.push(payload)
        })

        const finder = await GroupFinder.Finder({ stores: this.stores })

        this.group = await this.getNewestGroup()

        GroupManagerImpl.Class = SpyGroupManager
        this.manager = (await GroupManagerImpl.Manager({
            stores: this.stores,
            finder,
            client: this.fakedClient,
        })) as SpyGroupManager
    }

    @test()
    protected static async creatingGroupSendsMessageToPerson() {
        const { title } = await this.createGroup([this.firstGuestId])

        this.assertMessageSentTo(this.firstGuestId)

        this.assertMessageSentWithContext({
            title,
            toName: this.firstGuest.casualName,
            fromName: this.fakedPerson.casualName,
        })
    }

    @test()
    @seed('guests', 1)
    protected static async creatingAGroupSendsToMoreThanOnePerson() {
        await this.createGroup([this.firstGuestId, this.secondGuestId])
        assert.isEqualDeep(this.sendMessageTargets, [
            {
                personId: this.firstGuestId,
            },
            {
                personId: this.secondGuestId,
            },
        ])
    }

    @test()
    protected static async doesNotTryAndLoadTheSamePersonMoreThanOnce() {
        let hitCount = 0
        await this.eventFaker.fakeGetPerson(() => {
            hitCount++
        })

        await this.sendBeenInvitedMessageTo()
        assert.isEqual(hitCount, 2)
        await this.sendBeenInvitedMessageTo()
        assert.isEqual(hitCount, 3)
    }

    @test()
    protected static async loadingPersonForInviteIsRaceConditionSafe() {
        let hitCount = 0
        await this.eventFaker.fakeGetPerson(() => {
            hitCount++
        })

        const to = generateId()

        await Promise.all([
            this.sendBeenInvitedMessageTo(to),
            this.sendBeenInvitedMessageTo(to),
            this.sendBeenInvitedMessageTo(to),
            this.sendBeenInvitedMessageTo(to),
            this.sendBeenInvitedMessageTo(to),
            this.sendBeenInvitedMessageTo(to),
        ])
        assert.isEqual(hitCount, 2)
    }

    @test()
    protected static async addingFriendRetainsOriginalFriends() {
        const friend1Id = generateId()
        const friend2Id = generateId()

        await this.setFriendsOnGroup([friend1Id])
        await this.addFriendToGroup(friend2Id)

        const updated = await this.getNewestGroup()
        assert.isEqualDeep(updated.people, [friend1Id, friend2Id])
    }

    @test()
    protected static async addingFriendThatAlreadyExistsThrows() {
        const friendId = generateId()
        await this.setFriendsOnGroup([friendId])
        await this.assertAddingFriendThrowsAlreadyInGroup(friendId)
    }

    @test()
    protected static async throwsAlreadyInGroupIfIsSecondPersonInGroup() {
        const friendId = generateId()
        await this.setFriendsOnGroup([generateId(), friendId])
        await this.assertAddingFriendThrowsAlreadyInGroup(friendId)
    }

    @test()
    protected static async messageOwnerIfOwnerAddedFriend() {
        await this.addFriendToGroup(this.firstGuestId)
        this.assertMessageSentTo(this.fakedPerson.id)
    }

    @test()
    protected static async messagesOwnerIfOwnerNotTheOneWhoAddedFriend() {
        const sourcePersonId = generateId()
        await this.setGroupsSourcePersonAndAddSelfToGroup(sourcePersonId)

        await this.addFriendToGroup(this.firstGuestId)
        this.assertMessageSentTo(sourcePersonId)
    }

    @test()
    protected static async canAddPersonToGroupIfInGroupButNotFirstPersonInIt() {
        await this.groups.updateOne(
            {},
            {
                people: [generateId(), this.fakedPerson.id],
                source: { personId: generateId() },
            }
        )
        await this.addFriendToGroup(this.firstGuestId)
    }

    @test()
    @seed('guests', 1)
    protected static async sendsWithExpectedContext() {
        const expected = {
            groupTitle: this.group.title,
            invitersName: this.firstGuest.casualName,
            invitedsName: this.secondGuest.casualName,
        }

        await this.setGroupsSourcePersonAndAddSelfToGroup(this.firstGuestId)
        await this.addFriendToGroup(this.secondGuestId)

        this.assertMessageSentWithContext(expected)
    }

    private static async setGroupsSourcePersonAndAddSelfToGroup(
        sourcePersonId: string
    ) {
        await this.groups.updateOne(
            {},
            {
                people: [this.fakedPerson.id],
                source: { personId: sourcePersonId },
            }
        )
    }

    private static assertMessageSentTo(toId: string) {
        assert.isEqualDeep(this.sendMessageTargets[0], {
            personId: toId,
        })
    }

    private static get firstGuest() {
        return this.fakedGuests[0]
    }

    private static async assertAddingFriendThrowsAlreadyInGroup(
        friendId: string
    ) {
        const err = await assert.doesThrowAsync(() =>
            this.addFriendToGroup(friendId)
        )

        errorAssert.assertError(err, 'ALREADY_IN_GROUP')
    }

    private static get firstGuestId() {
        return this.firstGuest.id
    }

    private static async setFriendsOnGroup(friends: string[]) {
        await this.groups.updateOne({}, { people: friends })
    }

    private static async addFriendToGroup(friend2Id: string, groupId?: string) {
        await this.manager.addFriendToGroup({
            friendId: friend2Id,
            groupId: groupId ?? this.group.id,
            sourcePersonId: this.fakedPerson.id,
        })
    }

    private static async sendBeenInvitedMessageTo(toId?: string) {
        await this.manager.sendBeenInvitedMessageTo({
            toId: toId ?? generateId(),
            fromId: this.fakedPerson.id,
            title: generateId(),
        })
    }

    private static async createGroup(people: string[]) {
        return await this.manager.createGroup(this.fakedPerson.id, {
            title: generateId(),
            people,
        })
    }

    private static get secondGuestId(): string {
        return this.secondGuest.id
    }

    private static get secondGuest() {
        return this.fakedGuests[1]
    }

    private static assertMessageSentWithContext(context: Record<string, any>) {
        const { message } = this.sendMessagePayloads[0] ?? {}
        assert.isEqual(message?.classification, 'transactional')
        assert.doesInclude(message?.context, context)
    }
}

class SpyGroupManager extends GroupManagerImpl {
    public constructor(options: GroupManageConstructorOptions) {
        super(options)
    }

    public async sendBeenInvitedMessageTo(
        options: SendBeenInvitedMessageOptions
    ) {
        return super.sendBeenInvitedMessageTo(options)
    }
}

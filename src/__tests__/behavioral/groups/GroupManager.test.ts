import { eventFaker, fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId, errorAssert } from '@sprucelabs/test-utils'
import { Group, Person } from '../../../adventure.types'
import GroupFinder from '../../../groups/GroupFinder'
import GroupManagerImpl, {
    GroupManageConstructorOptions,
    SendBeenInvitedMessageOptions,
    UpdateGroupOptions,
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
    @seed('guests', 2)
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

        this.group = await this.getFirstGroup()

        GroupManagerImpl.Class = SpyGroupManager
        this.manager = (await GroupManagerImpl.Manager({
            stores: this.stores,
            finder,
            client: this.fakedClient,
        })) as SpyGroupManager
    }

    @test()
    protected static async creatingGroupSendsMessageToPerson() {
        const { title } = await this.createGroup([this.guest1Id])

        this.assertMessageSentTo(this.guest1Id)

        this.assertMessageSentWithContext({
            title,
            toName: this.guest1.casualName,
            fromName: this.fakedPerson.casualName,
        })
    }

    @test()
    protected static async creatingAGroupSendsToMoreThanOnePerson() {
        await this.createGroup([this.guest1Id, this.guest2Id])
        assert.isEqualDeep(this.sendMessageTargets, [
            {
                personId: this.guest1Id,
            },
            {
                personId: this.guest2Id,
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
        const friend1Id = this.guest1Id
        const friend2Id = this.guest2Id

        await this.setFriendsOnGroup([friend1Id])
        await this.addFriendToGroup(friend2Id)

        const expected = [friend1Id, friend2Id]
        await this.assertPoepleOnGroupEqual(expected)
    }

    @test()
    protected static async addingFriendThatAlreadyExistsThrows() {
        const friendId = this.guest1Id
        await this.setFriendsOnGroup([friendId])
        await this.assertAddingFriendThrowsAlreadyInGroup(friendId)
        this.assertNoMessageSent()
    }

    @test()
    protected static async throwsAlreadyInGroupIfIsSecondPersonInGroup() {
        const friendId = this.guest1Id
        await this.setFriendsOnGroup([this.guest2Id, friendId])
        await this.assertAddingFriendThrowsAlreadyInGroup(friendId)
    }

    @test()
    protected static async messageOwnerIfOwnerAddedFriend() {
        await this.addFriendToGroup(this.guest1Id)
        this.assertMessageSentTo(this.fakedPerson.id)
    }

    @test()
    protected static async messagesOwnerIfOwnerNotTheOneWhoAddedFriend() {
        const sourcePersonId = generateId()
        await this.setGroupsSourcePersonAndAddSelfToGroup(sourcePersonId)

        await this.addFriendToGroup(this.guest1Id)
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
        await this.addFriendToGroup(this.guest1Id)
    }

    @test()
    protected static async sendsWithExpectedContext() {
        await this.setGroupsSourcePersonAndAddSelfToGroup(this.guest1Id)
        await this.addFriendToGroup(this.guest2Id)

        this.assertMessageSentWithContext({
            groupTitle: this.group.title,
            invitersName: this.fakedPerson.casualName,
            invitedsName: this.guest2.casualName,
        })
    }

    @test()
    protected static async doesNotSendIfSavingGroupFails() {
        this.groups.updateOne = async () => assert.fail('forced fail') as any
        await assert.doesThrowAsync(() => this.addFriendToGroup(this.guest2Id))
        this.assertNoMessageSent()
    }

    @test()
    @seed('groups', 1)
    protected static async updatesCorrectGroup() {
        const [, group] = await this.groups.find({})
        this.group = group as Group
        await this.addFriendToGroup(this.guest1Id)
        await this.assertPoepleOnGroupEqual([this.guest1Id])
    }

    @test()
    protected static async sendMessageThrowingDoesNotThrow() {
        await eventFaker.makeEventThrow('send-message::v2020_12_25')
        await this.addFriendToGroup(this.guest1Id)
    }

    @test()
    protected static async updatingGroupSendsMessagesToFirstAddedMember() {
        await this.updateGroup({
            people: [this.guest1Id],
        })
        this.assertSentMessageToWithExpectedContext(this.guest1)
    }

    @test()
    protected static async includesUpdatedTitleInMessage() {
        const newTitle = generateId()
        await this.updateGroup({
            title: newTitle,
            people: [this.guest1Id],
        })

        this.group.title = newTitle
        this.assertSentMessageToWithExpectedContext(this.guest1)
    }

    @test()
    protected static async sendsToMultipleNewPeopleWhenUpdatingGroup() {
        await this.updateGroup({
            people: [this.guest1Id, this.guest2Id],
        })

        this.assertSentMessageToWithExpectedContext(this.guest1)
        this.assertSentMessageToWithExpectedContext(this.guest2, 1)
    }

    @test()
    protected static async doesNotSendIfPersonAlreadyInGroup() {
        await this.updateGroup({
            people: [this.guest1Id],
        })

        await this.updateGroup({
            people: [this.guest1Id],
        })

        this.assertTotalMessagesSent(1)

        await this.updateGroup({
            people: [this.guest2Id, this.guest1Id],
        })

        this.assertTotalMessagesSent(2)

        await this.updateGroup({
            people: [this.guest1Id, this.guest2Id],
        })

        this.assertTotalMessagesSent(2)
    }

    private static async updateGroup(values: UpdateGroupOptions['values']) {
        await this.manager.updateGroup({
            groupId: this.group.id,
            personId: this.fakedPerson.id,
            values,
        })
    }

    private static assertSentMessageToWithExpectedContext(
        guest: Person,
        messageIxd = 0
    ) {
        this.assertMessageSentTo(guest.id, messageIxd)
        this.assertMessageSentWithContext(
            {
                title: this.group.title,
                toName: guest.casualName,
                fromName: this.fakedPerson.casualName,
            },
            messageIxd
        )
    }

    private static assertNoMessageSent() {
        this.assertTotalMessagesSent(0)
    }

    private static assertTotalMessagesSent(expected: number) {
        assert.isLength(
            this.sendMessageTargets,
            expected,
            `You didn't send the right number of messages!`
        )
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

    private static assertMessageSentTo(toId: string, messageIxd = 0) {
        assert.isEqualDeep(this.sendMessageTargets[messageIxd], {
            personId: toId,
        })
    }

    private static get guest1() {
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

    private static get guest1Id() {
        return this.guest1.id
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

    private static get guest2Id(): string {
        return this.guest2.id
    }

    private static get guest2() {
        return this.fakedGuests[1]
    }

    private static assertMessageSentWithContext(
        context: Record<string, any>,
        messageIxd = 0
    ) {
        const { message } = this.sendMessagePayloads[messageIxd] ?? {}
        assert.isEqual(message?.classification, 'transactional')
        assert.isEqualDeep(message?.context, context)
    }

    private static async assertPoepleOnGroupEqual(expected: string[]) {
        const updated = await this.groups.findOne({ id: this.group.id })
        assert.isTruthy(updated)
        assert.isEqualDeep(updated.people, expected)
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

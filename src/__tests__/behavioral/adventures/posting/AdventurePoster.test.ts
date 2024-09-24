import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'

import { Group } from '../../../../adventure.types'
import AdventurePoster from '../../../../adventures/posting/AdventurePoster'
import MessageSenderImpl from '../../../../messaging/MessageSender'
import AbstractFriendsTest from '../../../support/AbstractFriendsTest'
import {
    SendMessageTargetAndPayload,
    GenerateUrlTargetAndPayload,
} from '../../../support/EventFaker'
import { generatePostAdventureValues } from './generatePostAdventureValues'

@fake.login()
export default class AdventurePosterTest extends AbstractFriendsTest {
    private static poster: AdventurePoster
    private static sendMessageTargetAndPayloads: SendMessageTargetAndPayload[] =
        []

    @seed('organizations', 1)
    @seed('teammates', 1)
    protected static async beforeEach() {
        await super.beforeEach()

        this.sendMessageTargetAndPayloads = []

        await this.eventFaker.fakeGenerateUrl()

        const connections = await this.ConnectionManager()
        this.poster = await AdventurePoster.Poster({
            stores: this.stores,
            messageSender: MessageSenderImpl.Sender({
                client: this.fakedClient,
                connections,
            }),
        })

        await this.eventFaker.fakeSendMessage((targetAndPayload) => {
            this.sendMessageTargetAndPayloads.push(targetAndPayload)
        })
    }

    @test()
    protected static async messagesFirstConnection() {
        const id = await this.connect(0)

        await this.post()

        assert.isEqualDeep(
            this.sendMessageTargetAndPayload?.target?.personId,
            id
        )
    }

    @test()
    @seed('teammates', 1)
    protected static async messagesAllConnections() {
        await this.connect(0)
        await this.connect(1)
        await this.post()
        this.assertTotalMessagesSent(2)
    }

    @test()
    protected static async passesGenerateUrlToListView() {
        const url = generateId()

        let passedTargetAndPayload: GenerateUrlTargetAndPayload | undefined
        await this.eventFaker.fakeGenerateUrl((targetAndPayload) => {
            passedTargetAndPayload = targetAndPayload
            return url
        })

        await this.connect(0)
        await this.post()
        assert.isEqual(this.firstMessage.links?.[0]?.uri, url)

        assert.isEqualDeep(passedTargetAndPayload?.target, {
            skillViewId: 'adventure.list',
        })
    }

    @test()
    protected static async passesExpectedTemplateAndContext() {
        await this.connect(0)

        const post = await this.post()

        const message = this.firstMessage

        assert.doesInclude(message.body, '{{formatDateTimeUntil when}}')
        assert.doesInclude(message.body, '{{to}}')
        assert.doesInclude(message.body, '{{from}}')
        assert.doesInclude(message.body, '{{what}}')
        assert.doesInclude(message.body, '{{groupTitle}}')

        assert.isEqualDeep(message.context, {
            when: post.when,
            what: post.what,
            from: this.fakedPerson.casualName,
            to: this.fakedTeammates[0].casualName,
        })
    }

    @test()
    @seed('groups', 1)
    protected static async passesExpectedContextIfSendingToGroup() {
        await this.addTeammatesToGroup()
        const group = await this.getFirstGroup()
        await this.postAndAssertGroupTitleInContext(group)
    }

    @test()
    @seed('groups', 1)
    @seed('teammates', 3)
    protected static async sendsMessageToEveryPersonInTheGroup() {
        const { group, friendIds } = await this.addTeammatesToGroup()
        await this.post(group.id)
        const toPeopleIds = this.sendMessageTargetAndPayloads.map(
            (targetAndPayload) => targetAndPayload.target?.personId
        )

        assert.isEqualDeep(
            toPeopleIds,
            friendIds,
            `Didn't send message to people in group!`
        )
    }

    @test()
    @seed('groups', 2)
    protected static async dropsInTheCorrectGroupTitle() {
        const [, group] = await this.groups.find({})
        await this.addTeammatesToGroup(group.id)
        await this.postAndAssertGroupTitleInContext(group)
    }

    @test()
    @seed('groups', 1)
    protected static async doesNotSendtoSelfIfInGroup() {
        const group = await this.setPeopleOnGroup([this.myId])
        await this.post(group.id)
        this.assertTotalMessagesSent(0)
    }

    @test()
    @seed('groups', 1)
    protected static async sendsNoticeToGroupOwner() {
        const group = await this.setPeopleOnGroup([])
        await this.post(group.id, this.fakedTeammates[0].id)
        this.assertTotalMessagesSent(1)
    }

    private static assertTotalMessagesSent(expected: number) {
        assert.isLength(
            this.sendMessageTargetAndPayloads,
            expected,
            `Total messages sent does not match expected!`
        )
    }

    private static async addTeammatesToGroup(groupId?: string) {
        const friendIds = this.fakedTeammates.map((t) => t.id)
        const group = await this.setPeopleOnGroup(friendIds, { groupId })
        return { group, friendIds }
    }

    private static async postAndAssertGroupTitleInContext(
        group: Omit<Group, 'source'>
    ) {
        await this.post(group.id)
        assert.isEqual(this.firstMessage.context?.groupTitle, group.title)
    }

    private static get firstMessage() {
        return this.sendMessageTargetAndPayload.payload.message!
    }

    private static async post(groupId?: string, posterId?: string) {
        return await this.poster.create({
            personId: posterId ?? this.myId,
            groupId,
            ...generatePostAdventureValues(),
        })
    }

    private static get sendMessageTargetAndPayload() {
        return this.sendMessageTargetAndPayloads[0]
    }
}

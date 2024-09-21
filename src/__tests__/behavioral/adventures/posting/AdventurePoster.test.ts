import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'

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
        assert.isLength(this.sendMessageTargetAndPayloads, 2)
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

        const message = this.sendMessageTargetAndPayloads[0].payload.message
        assert.doesInclude(message.body, '{{formatDateTimeUntil when}}')

        assert.isEqual(message.context?.when, post.when)
    }

    private static get firstMessage() {
        return this.sendMessageTargetAndPayload.payload.message!
    }

    private static async post() {
        return await this.poster.create({
            personId: this.myId,
            ...generatePostAdventureValues(),
        })
    }

    private static get sendMessageTargetAndPayload() {
        return this.sendMessageTargetAndPayloads[0]
    }
}

import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'
import AdventurePoster from '../../../posting/AdventurePoster'
import AbstractFriendsTest from '../../support/AbstractFriendsTest'
import {
    GenerateUrlTargetAndPayload,
    SendMessageTargetAndPayload,
} from '../../support/EventFaker'
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

        this.poster = await AdventurePoster.Poster({
            stores: this.stores,
            connections: await this.ConnectionManager(),
            client: this.fakedClient,
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
            this.lastSendMessageTargetAndPayload?.target?.personId,
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
        assert.isEqual(
            this.lastSendMessageTargetAndPayload.payload.message?.links?.[0]
                ?.uri,
            url
        )

        assert.isEqualDeep(passedTargetAndPayload?.target, {
            skillViewId: 'adventure.list',
        })
    }

    private static async post() {
        await this.poster.create({
            personId: this.myId,
            ...generatePostAdventureValues(),
        })
    }

    private static get lastSendMessageTargetAndPayload() {
        return this.sendMessageTargetAndPayloads[0]
    }
}

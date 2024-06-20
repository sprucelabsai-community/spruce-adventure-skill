import { DurationUtilBuilder, dateAssert } from '@sprucelabs/calendar-utils'
import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'
import MessageSenderImpl from '../../../messaging/MessageSender'
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

    @test()
    protected static async passesRelativeTimeToMessage() {
        const expected = generateId()
        let passedBeginning: number | undefined
        let passedEnd: number | undefined

        DurationUtilBuilder.durationUtil.renderDateTimeUntil = (
            beginning,
            end
        ) => {
            passedBeginning = beginning
            passedEnd = end
            return expected
        }

        await this.connect(0)

        const before = Date.now()
        const post = await this.post()
        const after = Date.now()

        assert.doesInclude(
            this.sendMessageTargetAndPayloads[0].payload.message.body,
            expected
        )

        assert.isEqual(passedEnd, post.when)
        assert.isBetweenInclusive(passedBeginning!, before, after)
    }

    @test()
    protected static async durationUtilShouldDefaultToDenver() {
        await this.connect(0)
        await this.post()

        dateAssert.currentTimezoneEquals(
            DurationUtilBuilder.lastBuiltDurationUtil!,
            'America/Denver'
        )
    }

    private static async post() {
        return await this.poster.create({
            personId: this.myId,
            ...generatePostAdventureValues(),
        })
    }

    private static get lastSendMessageTargetAndPayload() {
        return this.sendMessageTargetAndPayloads[0]
    }
}

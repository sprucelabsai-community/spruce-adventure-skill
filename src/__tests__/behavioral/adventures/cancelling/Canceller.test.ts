import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, errorAssert, generateId } from '@sprucelabs/test-utils'
import AdventureCancellerImpl from '../../../../adventures/cancelling/AdventureCanceller'
import {
    MessageSender,
    SendMessageOptions,
} from '../../../../messaging/MessageSender'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'

@fake.login()
export default class CancellerTest extends AbstractAdventureTest {
    private static spySender: SpySender
    private static canceller: AdventureCancellerImpl

    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()
        this.spySender = new SpySender()

        this.canceller = await AdventureCancellerImpl.Canceller({
            stores: this.stores,
            messageSender: this.spySender,
        })
    }

    @test()
    protected static async throwsWithMissing() {
        const err = await assert.doesThrowAsync(() =>
            //@ts-ignore
            AdventureCancellerImpl.Canceller({})
        )

        errorAssert.assertError(err, 'MISSING_PARAMETERS', {
            parameters: ['stores', 'messageSender'],
        })
    }

    @test()
    @seed('adventures', 1, { shouldPostAsFakedPerson: true })
    protected static async sendsCancelMessageIfMessageIsPassedToCancel() {
        const message = generateId()

        await this.cancel(message)

        assert.isEqual(this.spySender.lastFromPersonId, this.fakedPerson.id)
        assert.isEqualDeep(this.spySender.lastContext, {
            message,
        })
    }

    @test()
    @seed('adventures', 1, { shouldPostAsFakedPerson: true })
    protected static async shouldNotSendMessageIfNoMessagePassed() {
        await this.cancel()
        this.assertNoMessageSent()
    }

    @test()
    protected static async shouldNotSendIfNoAdventureCancelled() {
        await this.cancel(generateId())
        this.assertNoMessageSent()
    }

    private static assertNoMessageSent() {
        assert.isFalsy(this.spySender.lastFromPersonId)
    }

    private static async cancel(message?: string) {
        await this.canceller.cancel(this.fakedPerson.id, message)
    }
}

class SpySender implements MessageSender {
    public lastMessage?: string
    public lastFromPersonId?: string
    public lastContext?: Record<string, any>

    public async sendMessage(options: SendMessageOptions) {
        const { fromPersonId, message, context } = options
        this.lastFromPersonId = fromPersonId
        this.lastMessage = message
        this.lastContext = context
    }
}
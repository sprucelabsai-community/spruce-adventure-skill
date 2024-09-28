import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, errorAssert, generateId } from '@sprucelabs/test-utils'
import { Adventure } from '../../../adventure.types'
import MessageSenderImpl, {
    MessageSender,
    SendMessageOptions,
} from '../../../messaging/MessageSender'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'

@fake.login()
export default class SendReminderListenerTest extends AbstractAdventureTest {
    private static adventure: Adventure

    @seed('adventures', 1)
    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()
        MessageSenderImpl.Class = MockMessageSender
        await this.bootSkill()
        this.adventure = await this.getFirstAdventure()
    }

    @test()
    protected static async throwsIfNoCurrent() {
        const err = await assert.doesThrowAsync(() => this.emit(generateId()))
        errorAssert.assertError(err, 'NOT_FOUND')
    }

    @test()
    protected static async noErrorIfCurrentAdventure() {
        const success = await this.emit()
        assert.isTrue(success)
    }

    @test()
    protected static async callsMessageSenderWithExpectedOptions() {
        await this.emit()
        this.assertMessageSent()
    }

    @test()
    protected static async passesGroupIdToMessageContext() {
        const groupId = generateId()
        await this.adventures.update({}, { target: { groupId } })
        await this.emit()
        this.assertMessageSent(groupId)
    }

    private static assertMessageSent(groupId?: string) {
        MockMessageSender.instance.assertSentWithOptions({
            fromPersonId: this.fakedPerson.id,
            groupId,
            message:
                'Hey {{to}}! {{from}} wanted to remind you about their adventure!\n\n"{{what}}" at {{formatDateTimeUntil when}}!',
            context: {
                what: this.adventure.what,
                when: this.adventure.when,
            },
        })
    }

    private static async emit(adventureId?: string) {
        const [{ success }] = await this.fakedClient.emitAndFlattenResponses(
            'adventure.send-reminder::v2022_09_09',
            {
                target: {
                    adventureId: adventureId ?? this.adventure.id,
                },
            }
        )

        return success
    }
}

class MockMessageSender implements MessageSender {
    public static instance: MockMessageSender
    private sentMessageOptions?: SendMessageOptions

    public constructor() {
        MockMessageSender.instance = this
    }
    public async sendMessage(options: SendMessageOptions): Promise<void> {
        this.sentMessageOptions = options
    }

    public assertSentWithOptions(expected: SendMessageOptions) {
        assert.isEqualDeep(
            this.sentMessageOptions,
            expected,
            `You didn't send with the expected options`
        )
    }
}

import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, suite, assert, generateId } from '@sprucelabs/test-utils'
import Rsvper from '../../../../adventures/rsvping/Rsvper'
import MessageSenderImpl from '../../../../messaging/MessageSender'
import AbstractFriendsTest from '../../../support/AbstractFriendsTest'
import { SendMessageTargetAndPayload } from '../../../support/EventFaker'

@fake.login()
@suite()
export default class RsvperTest extends AbstractFriendsTest {
    private messageTargetAndPayloads: SendMessageTargetAndPayload[] = []
    private rsvper!: Rsvper

    private get lastSendMessageTargetAndPayload() {
        return this.messageTargetAndPayloads[0]
    }

    @seed('organizations', 1)
    @seed('teammates', 1)
    @seed('adventures', 1, { shouldPostAsFakedPerson: true })
    protected async beforeEach() {
        await super.beforeEach()

        const connections = await this.ConnectionManager()
        this.rsvper = await Rsvper.Rsvper({
            stores: this.stores,
            client: this.fakedClient,
            messageSender: await MessageSenderImpl.Sender({
                client: this.fakedClient,
                connections,
                stores: this.stores,
            }),
        })

        this.messageTargetAndPayloads = []

        await this.eventFaker.fakeSendMessage((targetAndPayload) => {
            this.messageTargetAndPayloads.push(targetAndPayload)
        })

        await this.eventFaker.fakeGenerateUrl()
    }

    @test()
    protected async imInMessagesPoster() {
        await this.connect(0)
        await this.rsvpAs(0)
        this.assertMessageSentToPerson(this.fakedPerson.id)
    }

    @test()
    protected async passesExpectedUrl() {
        const url = generateId()
        await this.eventFaker.fakeGenerateUrl(() => url)
        await this.connect(0)
        await this.rsvpAs(0)
        assert.isEqual(
            this.lastSendMessageTargetAndPayload.payload.message.links?.[0]
                ?.uri,
            url
        )
    }

    @test()
    @seed('teammates', 1)
    protected async sendsToAllConnectionsWhenIn() {
        await this.connect(0)
        await this.connect(1)
        await this.rsvpAs(0)
        this.assertMessageSentToPerson(this.teammateId(1))
    }

    @test()
    protected async doesNotSendToRsvper() {
        await this.connect(0)
        await this.rsvpAs(0)
        this.assertMessageNotSentToPerson(this.teammateId(0))
    }

    @test()
    @seed('teammates', 3)
    protected async sendsToEveryConnection() {
        await this.connect(0)
        await this.connect(1)
        await this.connect(2)
        await this.connect(3)
        await this.rsvpAs(0)
        const [, t1, t2, t3] = this.fakedTeammates
        for (const t of [t1, t2, t3]) {
            this.assertMessageSentToPerson(t.id)
        }
    }

    @test()
    @seed('teammates', 3)
    protected async dontMessageTeammatesIfDeclining() {
        await this.connect(0)
        await this.connect(1)
        await this.connect(2)
        await this.connect(3)
        await this.rsvpAs(0, false)
        const [, t1, t2, t3] = this.fakedTeammates
        for (const t of [t1, t2, t3]) {
            this.assertMessageNotSentToPerson(t.id)
        }
    }

    @test()
    @seed('adventures', 1, { shouldPostAsFakedPerson: true })
    protected async updatesCurrentAdventure() {
        await this.connect(0)
        const [a1, a2] = await this.adventures.find({})
        await this.rsvpAs(0, true, a2.id)

        const match = await this.adventures.findOne({
            id: a1.id,
        })

        assert.isTruthy(match)
        assert.isEqualDeep(match.whosIn, [])
    }

    @test()
    @seed('teammates', 2)
    @seed('groups', 1)
    @seed('adventures', 1, {
        shouldPostToGroup: true,
        shouldPostAsFakedPerson: true,
    })
    protected async onlyMessagesGroupIfGroupIsSelected() {
        const [, adventure] = await this.adventures.find({})
        await this.connect(0)
        await this.setPeopleOnGroup([
            this.fakedPerson.id,
            this.teammateId(1),
            this.teammateId(2),
        ])
        await this.rsvpAs(1, true, adventure.id)
        this.assertMessageNotSentToPerson(this.teammateId(0))
        this.assertMessageNotSentToPerson(this.teammateId(1))
        this.assertMessageSentToPerson(this.teammateId(2))
        this.assertMessageSentToPerson(this.fakedPerson.id)
    }

    private assertMessageSentToPerson(personId: string) {
        const matches = this.messageTargetAndPayloads.filter(
            (tap) => tap.target?.personId === personId
        )
        assert.isLength(
            matches,
            1,
            `Did not send the correct number of messages to ${personId}`
        )
    }

    private assertMessageNotSentToPerson(personId: string) {
        assert.isFalsy(
            this.messageTargetAndPayloads.find(
                (tap) => tap.target?.personId === personId
            ),
            `I found a message to person ${personId} and did not expect to!`
        )
    }

    private async rsvpAs(idx: number, canIMakeIt = true, adventureId?: string) {
        const adventure = await this.getFirstAdventure()
        const id = adventure.id
        await this.rsvper.rsvp({
            adventureId: adventureId ?? id,
            canIMakeIt,
            personId: this.teammateId(idx),
        })

        return id
    }
}

import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'
import Rsvper from '../../../../rsvping/Rsvper'
import AbstractFriendsTest from '../../../support/AbstractFriendsTest'
import { SendMessageTargetAndPayload } from '../../../support/EventFaker'

@fake.login()
export default class RsvperTest extends AbstractFriendsTest {
    private static messageTargetAndPayloads: SendMessageTargetAndPayload[] = []
    private static rsvper: Rsvper

    private static get lastSendMessageTargetAndPayload() {
        return this.messageTargetAndPayloads[0]
    }

    @seed('organizations', 1)
    @seed('teammates', 1)
    @seed('adventures', 1, { shouldAttachToFakedPerson: true })
    protected static async beforeEach() {
        await super.beforeEach()

        this.rsvper = await Rsvper.Rsvper({
            stores: this.stores,
            client: this.fakedClient,
            connections: await this.ConnectionManager(),
        })

        this.messageTargetAndPayloads = []

        await this.eventFaker.fakeSendMessage((targetAndPayload) => {
            this.messageTargetAndPayloads.push(targetAndPayload)
        })

        await this.eventFaker.fakeGenerateUrl()
    }

    @test()
    protected static async imInMessagesPoster() {
        await this.connect(0)
        await this.rsvpAs(0)
        this.assertMessageSentToPerson(this.fakedPerson.id)
    }

    @test()
    protected static async passesExpectedUrl() {
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
    protected static async sendsToAllConnectionsWhenIn() {
        await this.connect(0)
        await this.connect(1)
        await this.rsvpAs(0)
        this.assertMessageSentToPerson(this.teammateId(1))
    }

    @test()
    protected static async doesNotSendToRsvper() {
        await this.connect(0)
        await this.rsvpAs(0)
        this.assertMessageNotSentToPerson(this.teammateId(0))
    }

    @test()
    @seed('teammates', 3)
    protected static async sendsToEveryConnection() {
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
    protected static async dontMessageTeammatesIfDeclining() {
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
    @seed('adventures', 1, { shouldAttachToFakedPerson: true })
    protected static async updatesCurrentAdventure() {
        await this.connect(0)
        const [a1, a2] = await this.adventures.find({})
        await this.rsvpAs(0, true, a2.id)

        const match = await this.adventures.findOne({
            id: a1.id,
        })

        assert.isTruthy(match)
        assert.isEqualDeep(match.whosIn, [])
    }

    private static assertMessageSentToPerson(personId: string) {
        assert.isTruthy(
            this.messageTargetAndPayloads.find(
                (tap) => tap.target?.personId === personId
            ),
            `Could not find message sent to person ${personId}`
        )
    }

    private static assertMessageNotSentToPerson(personId: string) {
        assert.isFalsy(
            this.messageTargetAndPayloads.find(
                (tap) => tap.target?.personId === personId
            ),
            `I found a message to person ${personId} and did not expect to!`
        )
    }

    private static async rsvpAs(
        idx: number,
        canIMakeIt = true,
        adventureId?: string
    ) {
        const adventure = await this.getFirstAdventure()
        const id = adventure.id
        await this.rsvper.rsvp({
            adventureId: adventureId ?? id,
            canIMakeIt,
            personId: this.teammateId(idx),
        })

        return id
    }

    private static async getFirstAdventure() {
        const adventure = await this.adventures.findOne({})
        assert.isTruthy(adventure)
        return adventure
    }
}

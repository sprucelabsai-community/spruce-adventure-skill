import { MercuryClient } from '@sprucelabs/mercury-client'
import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId, errorAssert } from '@sprucelabs/test-utils'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'

@fake.login()
export default class RsvpListenerTest extends AbstractAdventureTest {
    @seed('adventures', 1)
    protected static async beforeEach() {
        await super.beforeEach()
        await this.bootSkill()
        await this.eventFaker.fakeSendMessage()
        await this.eventFaker.fakeGenerateUrl()
        await this.eventFaker.fakeGetPerson(() => this.fakedPerson)
    }

    @test()
    protected static async throwsNotFoundWithBadAdventureId() {
        const id = generateId()
        const err = await assert.doesThrowAsync(() => this.emitRsvp({ id }))
        errorAssert.assertError(err, 'NOT_FOUND')
    }

    @test()
    protected static async noCrashWithGoodAdventureId() {
        const success = await this.rsvpFirstAdventure()
        assert.isTrue(success)
    }

    @test()
    protected static async addsRsvpToAdventure() {
        await this.rsvpFirstAdventure()
        await this.assertFakedPersonIsIn()
    }

    @test()
    protected static async canAddManyRsvps() {
        await this.rsvpFirstAdventure()
        const { client, person } =
            await this.people.loginAsDemoPerson('555-555-1234')

        await this.rsvpFirstAdventure({ client })
        await this.assertWhoseIn([this.fakedPerson.id, person.id])
    }

    @test()
    protected static async addsRsvpIfCantAttending() {
        await this.rsvpImOut()
        await this.assertWhoseIn([])
        await this.assertWhoseOut([this.fakedPerson.id])
    }

    @test()
    protected static async canUpdateRsvp() {
        await this.rsvpImOut()
        await this.rsvpFirstAdventure()
        await this.assertFakedPersonIsIn()
        await this.assertWhoseOut([])
        await this.rsvpImOut()
        await this.assertWhoseIn([])
    }

    private static async rsvpImOut() {
        await this.rsvpFirstAdventure({ canIMakeIt: false })
    }

    private static async assertFakedPersonIsIn() {
        await this.assertWhoseIn([this.fakedPerson.id])
    }

    private static async assertWhoseIn(expected: string[]) {
        const adventure = await this.getFirstAdventure()
        assert.isEqualDeep(
            adventure.whosIn,
            expected,
            'Who is in does not match!'
        )
    }

    private static async assertWhoseOut(expected: string[]) {
        const adventure = await this.getFirstAdventure()
        assert.isEqualDeep(
            adventure.whosOut,
            expected,
            'Who is out does not match!'
        )
    }

    private static async rsvpFirstAdventure(options?: {
        client?: MercuryClient
        canIMakeIt?: boolean
    }) {
        const adventure = await this.getFirstAdventure()
        const success = await this.emitRsvp({ id: adventure.id, ...options })
        return success
    }

    private static async emitRsvp(options: {
        id: string
        client?: MercuryClient
        canIMakeIt?: boolean
    }): Promise<boolean> {
        const { id, client, canIMakeIt = true } = options

        const [{ success }] = await (
            client ?? this.fakedClient
        ).emitAndFlattenResponses('adventure.rsvp::v2022_09_09', {
            target: {
                adventureId: id,
            },
            payload: {
                canIMakeIt,
            },
        })

        return success
    }
}

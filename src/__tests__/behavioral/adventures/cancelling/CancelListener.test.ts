import { tomorrowLunch, tomorrowStartOfDay } from '@sprucelabs/calendar-utils'
import { Skill } from '@sprucelabs/spruce-skill-utils'
import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { assert, generateId, test } from '@sprucelabs/test-utils'
import { AdventureCanceller } from '../../../../cancelling/AdventureCanceller'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'

@fake.login()
export default class CancelListenerTest extends AbstractAdventureTest {
    private static skill: Skill

    protected static async beforeEach() {
        await super.beforeEach()
        await this.eventFaker.fakeGenerateUrl()
        const { skill } = await this.bootSkill()
        this.skill = skill
    }

    @test()
    protected static async zeroCancelledToStart() {
        await this.assertCancels(0)
    }

    @test()
    @seed('adventures', 1, { shouldAttachToFakedPerson: true })
    protected static async cancelsMine() {
        await this.assertCancels(1)
        const total = await this.adventures.count({})
        assert.isEqual(total, 0)
    }

    @test()
    @seed('adventures', 1)
    protected static async doesNotDeleteOtherPeoples() {
        await this.assertCancels(0)
    }

    @test()
    @seed('adventures', 2, { shouldAttachToFakedPerson: true })
    protected static async deletesNewestAdventure() {
        const [a1, a2] = await this.adventures.find({})

        await this.updateAdventureWhen(a1.id, tomorrowLunch())
        await this.updateAdventureWhen(a2.id, tomorrowStartOfDay())

        await this.emitCancel()

        await this.assertAdventureExists(a2.id)
        await this.assertAdventureDoesNotExist(a1.id)
    }

    @test()
    @seed('adventures', 1)
    protected static async canOptionallyPassCancelMessageToSendOutToConnections() {
        const canceller = new SpyCanceller()
        this.skill.updateContext('canceller', canceller)

        const message = generateId()
        await this.emitCancel(message)

        assert.isEqual(canceller.lastMessage, message)
    }

    private static async assertAdventureDoesNotExist(id: string) {
        const match2 = await this.findById(id)
        assert.isFalsy(match2)
    }

    private static async assertAdventureExists(id: string) {
        const match = await this.findById(id)
        assert.isTruthy(match)
    }

    private static findById(id: string) {
        return this.adventures.findOne({ id })
    }

    private static async updateAdventureWhen(id: string, when: number) {
        await this.adventures.updateOne({ id }, { when })
    }

    private static async assertCancels(total: number) {
        const totalCancelled = await this.emitCancel()
        assert.isEqual(totalCancelled, total)
    }

    private static async emitCancel(message?: string) {
        const [{ totalCancelled }] =
            await this.fakedClient.emitAndFlattenResponses(
                'adventure.cancel::v2022_09_09',
                {
                    payload: { message },
                }
            )

        return totalCancelled
    }
}

class SpyCanceller implements AdventureCanceller {
    public lastPosterId: string | undefined
    public lastMessage: string | undefined

    public async cancel(
        posterId: string,
        message?: string | undefined
    ): Promise<number> {
        this.lastPosterId = posterId
        this.lastMessage = message
        return 0
    }
}

import { fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, errorAssert, generateId, test } from '@sprucelabs/test-utils'
import AbstractFriendsTest from '../../../support/AbstractFriendsTest'

@fake.login()
export default class AcceptConnectionListenerTest extends AbstractFriendsTest {
    protected static async beforeEach() {
        await super.beforeEach()
        await this.bootSkill()
    }

    @test()
    protected static async setsPersonToSourceBasedOnId() {
        const p1 = this.fakedPerson.id
        const p2 = generateId()
        const id = await this.createConnection(p2, undefined, false)
        await this.emit(id)
        const match = await this.connections.findOne({})
        assert.isEqual(match?.target?.personId, p1)
        assert.isTrue(match?.isConfirmed)
    }

    @test()
    protected static async throwsWithABadId() {
        await this.createConnection(generateId())
        const err = await assert.doesThrowAsync(() => this.emit(generateId()))
        errorAssert.assertError(err, 'NOT_FOUND')
    }

    private static async emit(connectionId?: string) {
        const [{ success }] = await this.fakedClient.emitAndFlattenResponses(
            'adventure.accept-connection::v2022_09_09',
            {
                target: {
                    connectionId: connectionId ?? generateId(),
                },
            }
        )

        assert.isTrue(success)
    }
}

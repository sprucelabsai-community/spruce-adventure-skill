import { fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, generateId, test, suite } from '@sprucelabs/test-utils'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'

@fake.login()
@suite()
export default class CreateConnectionListenerTest extends AbstractAdventureTest {
    protected async beforeEach(): Promise<void> {
        await super.beforeEach()
        await this.bootSkill()
    }

    @test()
    protected async hasCreateConnectionListener() {
        const connectionId = await this.emitCreateConnection()
        const match = await this.getNewestConnection()

        assert.isEqual(match.id, connectionId)
        assert.isEqual(match.source.personId, this.fakedPerson.id)
    }

    @test()
    protected async storesGroupIdIfPassed() {
        const groupId = generateId()
        await this.emitCreateConnection(groupId)
        const match = await this.getNewestConnection()
        assert.isEqual(match.target!.groupId, groupId)
    }

    private async getNewestConnection() {
        const match = await this.connections.findOne({})
        assert.isTruthy(match)
        return match
    }

    private async emitCreateConnection(groupId?: string) {
        const [{ connectionId }] =
            await this.fakedClient.emitAndFlattenResponses(
                'adventure.create-connection::v2022_09_09',
                {
                    target: { groupId },
                }
            )

        return connectionId
    }
}

import { fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, test } from '@sprucelabs/test-utils'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'

@fake.login()
export default class CreateConnectionListenerTest extends AbstractAdventureTest {
    @test()
    protected static async hasCReateConnectionListener() {
        await this.bootSkill()
        const [{ connectionId }] =
            await this.fakedClient.emitAndFlattenResponses(
                'adventure.create-connection::v2022_09_09'
            )

        const match = await this.connections.findOne({})
        assert.isTruthy(match)
        assert.isEqual(match.id, connectionId)
        assert.isEqual(match.source.personId, this.fakedPerson.id)
    }
}

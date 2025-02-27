import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, suite, assert } from '@sprucelabs/test-utils'
import ConnectionManager from '../../../../adventures/listing/ConnectionManager'
import AbstractFriendsTest from '../../../support/AbstractFriendsTest'

@fake.login()
@suite()
export default class ConnectionManagerTest extends AbstractFriendsTest {
    private manager!: ConnectionManager

    @seed('organizations', 1)
    @seed('teammates', 1)
    protected async beforeEach() {
        await super.beforeEach()
        this.manager = await this.ConnectionManager()
    }
    @test()
    protected async listsAllConnectionsOnlyOnce() {
        await this.createConnection(this.myId, this.teammateId(0))
        await this.assertOneResult()
    }

    @test()
    protected async onlyConnectionsOnceOtherDirection() {
        await this.createConnection(this.teammateId(0), this.myId)
        await this.assertOneResult()
    }

    private async assertOneResult() {
        const ids = await this.loadConnections()
        assert.isLength(ids, 1)
    }

    private async loadConnections() {
        return await this.manager.loadConnectionsForPerson(this.myId)
    }
}

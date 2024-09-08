import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test-utils'
import ConnectionManager from '../../../adventures/listing/ConnectionManager'
import AbstractFriendsTest from '../../support/AbstractFriendsTest'

@fake.login()
export default class ConnectionManagerTest extends AbstractFriendsTest {
    private static manager: ConnectionManager

    @seed('organizations', 1)
    @seed('teammates', 1)
    protected static async beforeEach() {
        await super.beforeEach()
        this.manager = await this.ConnectionManager()
    }
    @test()
    protected static async listsAllConnectionsOnlyOnce() {
        await this.createConnection(this.myId, this.teammateId(0))
        await this.assertOneResult()
    }

    @test()
    protected static async onlyConnectionsOnceOtherDirection() {
        await this.createConnection(this.teammateId(0), this.myId)
        await this.assertOneResult()
    }

    private static async assertOneResult() {
        const ids = await this.loadConnections()
        assert.isLength(ids, 1)
    }

    private static async loadConnections() {
        return await this.manager.loadConnectionsForPerson(this.myId)
    }
}

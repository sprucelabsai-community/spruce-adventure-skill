import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import { generateId } from '@sprucelabs/test-utils'
import { Adventure } from '../../adventure.types'
import ConnectionManager from '../../listing/ConnectionManager'
import AdventuresStore from '../../stores/Adventures.store'
import ConnectionsStore from '../../stores/Connections.store'
import { generatePostAdventureValues } from '../behavioral/posting/generatePostAdventureValues'
import EventFaker from './EventFaker'

export default abstract class AbstractAdventureTest extends AbstractSpruceFixtureTest {
    protected static eventFaker: EventFaker
    protected static adventures: AdventuresStore
    protected static connections: ConnectionsStore

    protected static async beforeEach() {
        await super.beforeEach()
        this.eventFaker = new EventFaker()
        this.adventures = await this.stores.getStore('adventures')
        this.connections = await this.stores.getStore('connections')
    }

    protected static async ConnectionManager(): Promise<ConnectionManager> {
        return await ConnectionManager.Manager({
            stores: this.stores,
        })
    }

    protected static async seedAdventure(
        teammateId?: string,
        values?: Partial<Adventure>
    ) {
        return this.adventures.createOne({
            ...generatePostAdventureValues(),
            ...values,
            source: {
                personId: teammateId ?? generateId(),
                ...values?.source,
            },
        })
    }
}

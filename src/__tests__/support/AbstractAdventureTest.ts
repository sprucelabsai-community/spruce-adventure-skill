import {
    MockActiveRecordCard,
    vcDurationAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import { assert, generateId } from '@sprucelabs/test-utils'
import { Adventure, Group } from '../../adventure.types'
import AdventuresStore from '../../adventures/Adventures.store'
import ConnectionManager from '../../adventures/listing/ConnectionManager'
import ConnectionsStore from '../../friends/connecting/Connections.store'
import GroupFinder from '../../groups/GroupFinder'
import GroupsStore from '../../groups/Groups.store'
import { generatePostAdventureValues } from '../behavioral/adventures/posting/generatePostAdventureValues'
import EventFaker from './EventFaker'

export default abstract class AbstractAdventureTest extends AbstractSpruceFixtureTest {
    protected static eventFaker: EventFaker
    protected static adventures: AdventuresStore
    protected static connections: ConnectionsStore
    protected static groups: GroupsStore

    protected static async beforeEach() {
        await super.beforeEach()
        this.views.setController('active-record-card', MockActiveRecordCard)
        this.eventFaker = new EventFaker()
        this.adventures = await this.stores.getStore('adventures')
        this.connections = await this.stores.getStore('connections')
        this.groups = await this.stores.getStore('groups')

        vcDurationAssert.beforeEach(this.views.getFactory())
    }

    protected static async ConnectionManager(): Promise<ConnectionManager> {
        return await ConnectionManager.Manager({
            stores: this.stores,
        })
    }

    protected static GroupFinder(): Promise<GroupFinder> {
        return GroupFinder.Finder({
            stores: this.stores,
        })
    }

    protected static async seedAdventure(
        posterId?: string,
        values?: Partial<Adventure>
    ) {
        return this.adventures.createOne({
            ...generatePostAdventureValues(),
            ...values,
            source: {
                personId: posterId ?? generateId(),
                ...values?.source,
            },
        })
    }

    protected static async getFirstGroup(shouldIncludePrivateFields = true) {
        const match = await this.groups.findOne(
            {},
            { shouldIncludePrivateFields }
        )
        assert.isTruthy(
            match,
            'A group was not created, try @seed("groups", 1)'
        )
        return match as Group
    }

    protected static async getFirstAdventure() {
        const adventure = await this.adventures.findOne({})
        assert.isTruthy(
            adventure,
            `You gotta @seed('adventures', 1') to continue.`
        )
        return adventure
    }
}

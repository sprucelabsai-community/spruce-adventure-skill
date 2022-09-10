import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import AdventuresStore from '../../stores/Adventures.store'
import EventFaker from './EventFaker'

export default abstract class AbstractAdventureTest extends AbstractSpruceFixtureTest {
	protected static eventFaker: EventFaker
	protected static adventures: AdventuresStore

	protected static async beforeEach() {
		await super.beforeEach()
		this.eventFaker = new EventFaker()
		this.adventures = await this.stores.getStore('adventures')
	}
}

import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import EventFaker from './EventFaker'

export default abstract class AbstractAdventureTest extends AbstractSpruceFixtureTest {
	protected static eventFaker: EventFaker

	protected static async beforeEach() {
		await super.beforeEach()
		this.eventFaker = new EventFaker()
	}
}

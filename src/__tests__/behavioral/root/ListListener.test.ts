import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'

@fake.login()
export default class ListListenerTest extends AbstractAdventureTest {
	@test()
	protected static async canCreateListListener() {
		const listListener = new ListListener()
		assert.isTruthy(listListener)
	}

	@test()
	protected static async yourNextTest() {
		assert.isTrue(false)
	}
}

class ListListener {}

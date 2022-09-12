import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { assert, test } from '@sprucelabs/test'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'

@fake.login()
export default class CancelListenerTest extends AbstractAdventureTest {
	protected static async beforeEach() {
		await super.beforeEach()
		await this.bootSkill()
	}

	@test()
	protected static async zeroCancelledToStart() {
		await this.assertCancels(0)
	}

	@test()
	@seed('adventures', 1, { shouldAttachToFakedPerson: true })
	protected static async cancelsMine() {
		await this.assertCancels(1)
		const total = await this.adventures.count({})
		assert.isEqual(total, 0)
	}

	@test()
	@seed('adventures', 1)
	protected static async doesNotDeleteOtherPeoples() {
		await this.assertCancels(0)
	}

	private static async assertCancels(total: number) {
		const [{ totalCancelled }] = await this.fakedClient.emitAndFlattenResponses(
			'adventure.cancel::v2022_09_09'
		)

		assert.isEqual(totalCancelled, total)
	}
}

import { formAssert } from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import { assert, test } from '@sprucelabs/test'
import PostCardViewController from '../../../viewControllers/PostCard.vc'

@fake.login()
export default class PostCardTest extends AbstractSpruceFixtureTest {
	private static vc: SpyPostCard

	protected static async beforeEach() {
		await super.beforeEach()
		this.views.setController('adventure.post-card', SpyPostCard)
		this.vc = this.views.Controller('adventure.post-card', {}) as SpyPostCard
	}

	@test()
	protected static async rendersForm() {
		formAssert.cardRendersForm(this.vc)
	}

	@test()
	protected static async postFormRendersExpectedFields() {
		formAssert.formRendersFields(this.formVc, ['what', 'when', 'where'])
	}

	@test()
	protected static async doesNotRenderCancelButton() {
		assert.isFalse(this.formVc.getShouldShowCancelButton())
	}

	private static get formVc() {
		return this.vc.getFormVc()
	}
}

class SpyPostCard extends PostCardViewController {
	public getFormVc() {
		return this.formVc
	}
}

import { formAssert, vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test'
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
		formAssert.formRendersFields(this.vc.getFormVc(), ['what', 'when', 'where'])
	}
}

class SpyPostCard extends PostCardViewController {
	public getFormVc() {
		return this.formVc
	}
}

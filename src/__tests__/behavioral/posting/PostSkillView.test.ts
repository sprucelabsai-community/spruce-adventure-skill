import { vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test } from '@sprucelabs/test'
import PostSkillViewController from '../../../posting/Post.svc'
import PostCardViewController from '../../../posting/PostCard.vc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import FakePostCard from '../../support/FakePostCard'

@fake.login()
export default class PostSkillViewTest extends AbstractAdventureTest {
	private static vc: SpyPostSkillView
	private static get postCardVc() {
		return this.vc.getPostCard() as FakePostCard
	}

	protected static async beforeEach() {
		await super.beforeEach()
		await this.eventFaker.fakePostAdventure()

		this.views.setController('adventure.post-card', FakePostCard)
		this.views.setController('adventure.post', SpyPostSkillView)
		this.vc = this.views.Controller('adventure.post', {}) as SpyPostSkillView

		await this.views.load(this.vc)
	}

	@test()
	protected static async rendersPostCard() {
		const postVc = vcAssert.assertSkillViewRendersCard(this.vc, 'post')
		vcAssert.assertRendersAsInstanceOf(postVc, PostCardViewController)
	}

	@test()
	protected static async postingAdventureRedirectsToRoot() {
		await this.postCardVc.fillWithRandomValues()

		await vcAssert.assertActionRedirects({
			action: () => this.postCardVc.submitAndConfirm(),
			router: this.views.getRouter(),
			destination: {
				id: 'adventure.root',
			},
		})
	}
}

class SpyPostSkillView extends PostSkillViewController {
	public getPostCard() {
		return this.postCardVc
	}
}

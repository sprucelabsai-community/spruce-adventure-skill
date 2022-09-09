import { interactor, vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { AbstractViewControllerTest } from '@sprucelabs/spruce-view-plugin'
import { test } from '@sprucelabs/test'
import RootSkillViewController from '../../../root/Root.svc'
import PostCardViewController from '../../../viewControllers/PostCard.vc'

export default class RenderingTheRootSkillViewTest extends AbstractViewControllerTest {
	private static vc: SpyRootViewController
	protected static async beforeEach() {
		await super.beforeEach()
		this.views.setController('adventure.root', SpyRootViewController)
		this.vc = this.Controller('adventure.root', {}) as SpyRootViewController
	}

	@test()
	protected static async rendersIntroCardWithTalkingSprucebotToStart() {
		this.assertDoesNotRenderCard('post')
		const cardVc = this.assertRendersCard('intro')
		vcAssert.assertCardRendersTalkingSprucebot(cardVc)
	}

	@test()
	protected static async clickingNextHidesIntroCardAndRendersPostCard() {
		await interactor.clickButton(this.vc.getIntroCard(), 'next')
		this.assertDoesNotRenderCard('intro')
		vcAssert.assertTriggerRenderCount(this.vc, 1)
		const postVc = this.assertRendersCard('post')
		vcAssert.assertRendersAsInstanceOf(postVc, PostCardViewController)
	}

	private static assertDoesNotRenderCard(id: string) {
		vcAssert.assertSkillViewDoesNotRenderCard(this.vc, id)
	}

	private static assertRendersCard(id: string) {
		return vcAssert.assertSkillViewRendersCard(this.vc, id)
	}
}

class SpyRootViewController extends RootSkillViewController {
	public getIntroCard() {
		return this.introCardVc
	}
}

import { interactor, vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { test } from '@sprucelabs/test'
import PostCardViewController from '../../../postingAnAdventure/PostCard.vc'
import RootSkillViewController from '../../../root/Root.svc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import FakePostCard from '../../support/FakePostCard'

export default class RootSkillViewTest extends AbstractAdventureTest {
	private static vc: SpyRootViewController

	protected static async beforeEach() {
		await super.beforeEach()
		await this.eventFaker.fakePostAdventure()

		this.views.setController('adventure.post-card', FakePostCard)
		this.views.setController('adventure.root', SpyRootViewController)
		this.vc = this.views.Controller(
			'adventure.root',
			{}
		) as SpyRootViewController
	}

	@test()
	protected static async rendersIntroCardWithTalkingSprucebotToStart() {
		this.assertDoesNotRenderCard('post')
		const cardVc = this.assertRendersCard('intro')
		vcAssert.assertCardRendersTalkingSprucebot(cardVc)
	}

	@test()
	protected static async clickingNextHidesIntroCardAndRendersPostCard() {
		await this.clickNextOnIntro()
		this.assertDoesNotRenderCard('intro')
		vcAssert.assertTriggerRenderCount(this.vc, 1)
		const postVc = this.assertRendersCard('post')
		vcAssert.assertRendersAsInstanceOf(postVc, PostCardViewController)
	}

	@test()
	protected static async postingAdventureHidesPostCard() {
		await this.skipIntroAndPostAdventure()
		this.assertDoesNotRenderCard('post')
	}

	@test()
	protected static async submittingPostTriggersRenders() {
		await this.skipIntroAndPostAdventure()
		vcAssert.assertTriggerRenderCount(this.vc, 2)
	}

	private static async skipIntroAndPostAdventure() {
		await this.clickNextOnIntro()
		await this.postAdventure()
	}

	private static async postAdventure() {
		await this.postCardVc.fillWithRandomValues()
		await this.postCardVc.submitAndConfirm()
	}

	private static assertDoesNotRenderCard(id: string) {
		vcAssert.assertSkillViewDoesNotRenderCard(this.vc, id)
	}

	private static async clickNextOnIntro() {
		await interactor.clickButton(this.vc.getIntroCard(), 'next')
	}

	private static assertRendersCard(id: string) {
		return vcAssert.assertSkillViewRendersCard(this.vc, id)
	}

	private static get postCardVc() {
		return this.vc.getPostCardVc()
	}
}

class SpyRootViewController extends RootSkillViewController {
	public getPostCardVc() {
		return this.postCardVc as FakePostCard
	}
	public getIntroCard() {
		return this.introCardVc
	}
}

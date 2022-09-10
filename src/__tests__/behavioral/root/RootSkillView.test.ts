import { interactor, vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, test } from '@sprucelabs/test'
import { Adventure } from '../../../adventure.types'
import CurrentAdventureCardViewController from '../../../root/CurrentAdventureCard.vc'
import RootSkillViewController from '../../../root/Root.svc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import FakePostCard from '../../support/FakePostCard'
import generateAdventureValues from '../../support/generateAdventureValues'

@fake.login()
export default class RootSkillViewTest extends AbstractAdventureTest {
	private static vc: SpyRootViewController

	private static currentAdventure: Adventure

	protected static async beforeEach() {
		await super.beforeEach()
		await this.eventFaker.fakeListAdventures()

		this.views.setController('adventure.root', SpyRootViewController)
		this.views.setController(
			'adventure.current-adventure-card',
			SpyCurrentCard as any
		)

		await this.reload()

		this.currentAdventure = generateAdventureValues({
			source: { personId: this.fakedPerson.id },
		})
	}

	@test()
	protected static async rendersIntroCardWithTalkingSprucebotToStart() {
		this.assertDoesNotRenderCard('post')
		const cardVc = this.assertRendersCard('intro')
		vcAssert.assertCardRendersTalkingSprucebot(cardVc)
	}

	@test()
	protected static async clickingSkipRedirectsToAdd() {
		await vcAssert.assertActionRedirects({
			action: () => this.clickNextOnIntro(),
			router: this.views.getRouter(),
			destination: {
				id: 'adventure.post',
			},
		})
	}

	@test()
	protected static async showsCurrentCardIfCurrentAdventure() {
		await this.fakeWithCurrentAndReload()

		vcAssert.assertTriggerRenderCount(this.vc, 1)

		this.assertDoesNotRenderCard('intro')

		const vc = this.assertRendersCard('current')
		vcAssert.assertRendersAsInstanceOf(vc, CurrentAdventureCardViewController)
	}

	@test()
	protected static async currentCardHasProperAdventure() {
		await this.fakeWithCurrentAndReload()
		const cardVc = this.vc.getCurrentCardVc()
		assert.isEqualDeep(cardVc.getAdventure(), this.currentAdventure)
	}

	private static async fakeWithCurrentAndReload() {
		await this.fakeListAdventuresWithCurrent()
		await this.reload()
	}

	private static async fakeListAdventuresWithCurrent() {
		await this.eventFaker.fakeListAdventures(() => [
			RootSkillViewTest.currentAdventure,
		])
	}

	private static async reload() {
		this.vc = this.views.Controller(
			'adventure.root',
			{}
		) as SpyRootViewController
		await this.loadVc()
	}

	private static async loadVc() {
		await this.views.load(this.vc)
	}

	private static assertDoesNotRenderCard(id: string) {
		vcAssert.assertSkillViewDoesNotRenderCard(this.vc, id)
	}

	private static assertRendersCard(id: string) {
		return vcAssert.assertSkillViewRendersCard(this.vc, id)
	}

	private static async clickNextOnIntro() {
		await interactor.clickButton(this.vc.getIntroCard(), 'next')
	}
}

class SpyRootViewController extends RootSkillViewController {
	public getPostCardVc() {
		return this.postCardVc as FakePostCard
	}
	public getIntroCard() {
		return this.introCardVc
	}

	public getCurrentCardVc() {
		return this.currentCardVc as SpyCurrentCard
	}
}

class SpyCurrentCard extends CurrentAdventureCardViewController {
	public getAdventure() {
		return this.adventure
	}
}

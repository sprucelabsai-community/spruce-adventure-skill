import { vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test'
import { Adventure } from '../../../adventure.types'
import CurrentAdventureCardViewController from '../../../root/CurrentAdventureCard.vc'
import ListSkillViewController from '../../../skillViewControllers/List.svc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import generateAdventureValues from '../../support/generateAdventureValues'
import { SpyCurrentCard } from '../root/SpyCurrentCard'

@fake.login()
export default class ListSkillViewTest extends AbstractAdventureTest {
	private static vc: SpyListViewController
	private static currentAdventure: Adventure

	protected static async beforeEach() {
		await super.beforeEach()
		this.currentAdventure = generateAdventureValues({
			source: { personId: this.fakedPerson.id },
		})

		await this.fakeListAdventuresWithCurrent()

		this.views.setController('adventure.list', SpyListViewController)
		this.views.setController(
			'adventure.current-adventure-card',
			SpyCurrentCard as any
		)

		this.vc = this.views.Controller(
			'adventure.list',
			{}
		) as SpyListViewController

		await this.load()
	}

	@test()
	protected static async redirectsIfLoadsAndFindsNoAdventures() {
		await this.eventFaker.fakeListAdventures()
		await vcAssert.assertActionRedirects({
			action: () => this.load(),
			router: this.views.getRouter(),
			destination: {
				id: 'adventure.post',
			},
		})
	}

	@test()
	protected static async showsCurrentCardIfCurrentAdventure() {
		const vc = this.assertRendersCard('current')
		vcAssert.assertRendersAsInstanceOf(vc, CurrentAdventureCardViewController)
	}

	@test()
	protected static async currentCardHasProperAdventure() {
		const cardVc = this.vc.getCurrentCardVc()!
		assert.isEqualDeep(cardVc.getAdventure(), this.currentAdventure)
	}

	@test()
	protected static async listSkillViewRequiresLogin() {
		await vcAssert.assertLoginIsRequired(this.vc)
	}

	private static async load() {
		await this.views.load(this.vc)
	}

	private static async fakeListAdventuresWithCurrent() {
		await this.eventFaker.fakeListAdventures(() => [this.currentAdventure])
	}

	private static assertRendersCard(id: string) {
		return vcAssert.assertSkillViewRendersCard(this.vc, id)
	}
}

class SpyListViewController extends ListSkillViewController {
	public getCurrentCardVc() {
		return this.currentCardVc as SpyCurrentCard
	}
}

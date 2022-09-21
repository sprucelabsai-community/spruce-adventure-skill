import {
	interactor,
	toolBeltAssert,
	vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test-utils'
import { AdventureWithPerson } from '../../../adventure.types'
import FriendsListToolViewController from '../../../friends/FriendsListTool.vc'
import AdventureCardViewController from '../../../listing/AdventureCard.vc'
import CurrentAdventureCardViewController from '../../../listing/CurrentAdventureCard.vc'
import ListSkillViewController from '../../../listing/List.svc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import generateAdventureWithPersonValues from '../../support/generateAdventureWithPersonValues'
import { SpyCurrentCard } from '../../support/SpyCurrentCard'

@fake.login()
export default class ListSkillViewTest extends AbstractAdventureTest {
	private static vc: SpyListViewController
	private static currentAdventure: AdventureWithPerson

	protected static async beforeEach() {
		await super.beforeEach()
		this.currentAdventure = generateAdventureWithPersonValues({
			source: { personId: this.fakedPerson.id },
		})

		await this.fakeListAdventuresWithCurrent()

		this.views.setController('adventure.list', SpyListViewController)
		this.views.setController('adventure.friends-list-tool', MockFriendsTool)
		this.views.setController(
			'adventure.current-adventure-card',
			SpyCurrentCard as any
		)

		await this.reload()
	}

	private static async reload() {
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
	protected static async showsExpectedCardsWithAdventure() {
		const currentVc = this.assertRendersCard('current')
		vcAssert.assertRendersAsInstanceOf(
			currentVc,
			CurrentAdventureCardViewController
		)
	}

	@test()
	protected static async rendersToolBeltWithFriendsTool() {
		toolBeltAssert.rendersToolBelt(this.vc)
		toolBeltAssert.toolInstanceOf(
			this.vc,
			'friends',
			FriendsListToolViewController
		)
	}

	@test()
	protected static async loadsTool() {
		const tool = this.vc.getFriendsTool()
		tool.assertIsLoaded()
	}

	@test()
	protected static async currentCardHasProperAdventure() {
		assert.isEqualDeep(this.currentCardVc.getAdventure(), this.currentAdventure)
	}

	@test()
	protected static async listSkillViewRequiresLogin() {
		await vcAssert.assertLoginIsRequired(this.vc)
	}

	@test()
	protected static async cancellingCurrentRedirectsToAdd() {
		await this.eventFaker.fakeCancelAdventure()
		const confirm = await vcAssert.assertRendersConfirm(
			this.currentCardVc,
			() => interactor.clickButton(this.currentCardVc, 'cancel')
		)
		await vcAssert.assertActionRedirects({
			action: async () => confirm.accept(),
			destination: {
				id: 'adventure.post',
			},
			router: this.views.getRouter(),
		})
	}

	@test()
	protected static async loadsAdventuresFromConnections() {
		const adventure = generateAdventureWithPersonValues()

		await this.eventFaker.fakeListAdventures(() => {
			return [adventure]
		})

		await this.load()

		const vc = vcAssert.assertSkillViewRendersCard(this.vc, adventure.id)
		vcAssert.assertRendersAsInstanceOf(vc, AdventureCardViewController)
	}

	@test()
	protected static async loadsManyAdventuresAndKeepsOwnFirst() {
		const adventure = generateAdventureWithPersonValues()

		await this.eventFaker.fakeListAdventures(() => {
			return [adventure, this.currentAdventure]
		})

		await this.reload()

		const cards = vcAssert.assertSkillViewRendersCards(this.vc)
		assert.isEqual(this.views.render(cards[0]).id, 'current')
		assert.isEqual(this.views.render(cards[1]).id, adventure.id)
	}

	@test()
	protected static async passesProperLoggedInPersonIdToAdventureCard() {
		const adventure = generateAdventureWithPersonValues()
		await this.eventFaker.fakeListAdventures(() => {
			return [adventure]
		})

		await this.reload()
		const [vc] = this.vc.getCards()
		//@ts-ignore
		assert.isEqual(vc.loggedInPersonId, this.fakedPerson.id)
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

	private static get currentCardVc() {
		return this.vc.getCurrentCardVc()!
	}
}

class SpyListViewController extends ListSkillViewController {
	public getCurrentCardVc() {
		return this.currentCardVc as SpyCurrentCard
	}

	public getFriendsTool() {
		return this.friendsToolVc as MockFriendsTool
	}
	public getCards() {
		return this.cards
	}
}

class MockFriendsTool extends FriendsListToolViewController {
	private isLoaded = false
	public async load() {
		this.isLoaded = true
	}

	public assertIsLoaded() {
		assert.isTrue(this.isLoaded, `Your friends tool is not loaded`)
	}
}

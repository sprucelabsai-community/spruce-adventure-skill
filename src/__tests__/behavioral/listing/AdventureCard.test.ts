import { interactor, vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test } from '@sprucelabs/test-utils'
import AdventureCardViewController from '../../../listing/AdventureCard.vc'
import BaseAdventureCardViewController from '../../../listing/BaseAdventureCard.vc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import generateAdventureWithPersonValues from '../../support/generateAdventureWithPersonValues'

@fake.login()
export default class AdventureCardTest extends AbstractAdventureTest {
	private static vc: AdventureCardViewController

	protected static async beforeEach() {
		await super.beforeEach()

		this.vc = this.views.Controller('adventure.adventure-card', {
			adventure: generateAdventureWithPersonValues(),
		})
	}

	@test()
	protected static async adventureCardRendersBase() {
		vcAssert.assertRendersAsInstanceOf(this.vc, BaseAdventureCardViewController)
	}

	@test()
	protected static async adventureCardRendersInOutButtons() {
		vcAssert.assertCardRendersButtons(this.vc, ['in', 'out'])
	}

	@test()
	protected static async clickingImInRendersConfirm() {
		await vcAssert.assertRendersConfirm(this.vc, async () => {
			await interactor.clickButton(this.vc, 'in')
		})
	}

	@test()
	protected static async clickingImOutRendersConfirm() {
		await vcAssert.assertRendersConfirm(this.vc, async () => {
			await interactor.clickButton(this.vc, 'out')
		})
	}
}

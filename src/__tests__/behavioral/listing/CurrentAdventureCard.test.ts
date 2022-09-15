import {
	interactor,
	mapAssert,
	vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test-utils'
import { errorAssert } from '@sprucelabs/test-utils'
import { AdventureWithPerson } from '../../../adventure.types'
import CurrentAdventureCardViewController from '../../../listing/CurrentAdventureCard.vc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import generateAdventureWithPersonValues from '../../support/generateAdventureWithPersonValues'

@fake.login()
export default class CurrentAdventureCardTest extends AbstractAdventureTest {
	private static vc: CurrentAdventureCardViewController
	private static adventure: AdventureWithPerson
	private static didCancelHandlerInvoked: boolean

	protected static async beforeEach() {
		await super.beforeEach()
		this.adventure = generateAdventureWithPersonValues()
		this.didCancelHandlerInvoked = false
		this.vc = this.views.Controller('adventure.current-adventure-card', {
			adventure: this.adventure,
			onDidCancel: () => {
				this.didCancelHandlerInvoked = true
			},
		})
	}

	@test()
	protected static async throwsIfMissingAdventure() {
		const err = assert.doesThrow(() =>
			//@ts-ignore
			this.views.Controller('adventure.current-adventure-card', {})
		)

		errorAssert.assertError(err, 'MISSING_PARAMETERS', {
			parameters: ['adventure', 'onDidCancel'],
		})
	}

	@test()
	protected static async rendersMapWithExpectedPin() {
		const mapVc = mapAssert.assertCardRendersMap(this.vc)
		mapAssert.assertMapHasPin(mapVc, {
			address: this.adventure.where,
		})
	}

	@test()
	protected static async assertCurrentCardRendersCancelButton() {
		vcAssert.assertCardRendersButton(this.vc, 'cancel')
	}

	@test()
	protected static async clickingCancelRendersConfirm() {
		await this.clickCancelAndAssertConfirm()
	}

	@test()
	protected static async confirmingCancelEmitsCancelEvent() {
		let wasHit = false
		await this.eventFaker.fakeCancelAdventure(() => {
			wasHit = true
		})

		const confirm = await this.clickCancelAndAssertConfirm()
		await confirm.accept()
		assert.isTrue(wasHit)
	}

	@test()
	protected static async decliningCancelDoesNotEmit() {
		let wasHit = false
		await this.eventFaker.fakeCancelAdventure(() => {
			wasHit = true
		})

		const confirm = await this.clickCancelAndAssertConfirm()
		await confirm.decline()

		assert.isFalse(wasHit)
		assert.isFalse(this.didCancelHandlerInvoked)
	}

	private static async clickCancelAndAssertConfirm() {
		return vcAssert.assertRendersConfirm(this.vc, () =>
			interactor.clickButton(this.vc, 'cancel')
		)
	}
}

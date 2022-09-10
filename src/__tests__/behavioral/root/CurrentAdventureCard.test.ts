import {
	interactor,
	mapAssert,
	vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test'
import { errorAssert } from '@sprucelabs/test-utils'
import { Adventure } from '../../../adventure.types'
import CurrentAdventureCardViewController from '../../../root/CurrentAdventureCard.vc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import generateAdventureValues from '../../support/generateAdventureValues'

@fake.login()
export default class CurrentAdventureCardTest extends AbstractAdventureTest {
	private static vc: CurrentAdventureCardViewController
	private static adventure: Adventure

	protected static async beforeEach() {
		await super.beforeEach()
		this.adventure = generateAdventureValues()
		this.vc = this.views.Controller('adventure.current-adventure-card', {
			adventure: this.adventure,
		})
	}

	@test()
	protected static async throwsIfMissingAdventure() {
		const err = assert.doesThrow(() =>
			//@ts-ignore
			this.views.Controller('adventure.current-adventure-card', {})
		)

		errorAssert.assertError(err, 'MISSING_PARAMETERS', {
			parameters: ['adventure'],
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
		await vcAssert.assertRendersConfirm(this.vc, () =>
			interactor.clickButton(this.vc, 'cancel')
		)
	}
}

import { interactor, vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, errorAssert, generateId, test } from '@sprucelabs/test-utils'
import { AdventureWithPerson } from '../../../adventure.types'
import AdventureCardViewController from '../../../listing/AdventureCard.vc'
import BaseAdventureCardViewController from '../../../listing/BaseAdventureCard.vc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import generateAdventureWithPersonValues from '../../support/generateAdventureWithPersonValues'

@fake.login()
export default class AdventureCardTest extends AbstractAdventureTest {
	private static vc: AdventureCardViewController

	protected static async beforeEach() {
		await super.beforeEach()
		this.setupVcWithAdventure(generateAdventureWithPersonValues())
	}

	@test()
	protected static async throwsWithMissing() {
		const err = assert.doesThrow(() =>
			//@ts-ignore
			this.views.Controller('adventure.adventure-card', {})
		)

		errorAssert.assertError(err, 'MISSING_PARAMETERS', {
			parameters: ['adventure', 'loggedInPersonId'],
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

	@test()
	protected static inButtonSelectedIfIn() {
		this.setupVcWithWhosIn([this.fakedPerson.id])
		this.assertImInButtonSelected()
	}

	@test()
	protected static inNotSelectedIfPersonNotRsvpd() {
		this.setupVcWithWhosIn([generateId()])
		this.assertNoButtonSelected()
	}

	@test()
	protected static knowsIfPersonIsNotFirstRsvp() {
		this.setupVcWithWhosIn([generateId(), this.fakedPerson.id])
		this.assertImInButtonSelected()
	}

	@test()
	protected static async outButtonSelectedIfOUt() {
		this.setupVcWithWhosOut([this.fakedPerson.id])
		this.assertImOutButtonSelected()
	}

	@test()
	protected static async outButtonMtachesId() {
		this.setupVcWithWhosOut([generateId()])
		this.assertNoButtonSelected()
	}

	@test()
	protected static async canMatchOutWhenNotFirst() {
		this.setupVcWithWhosOut([generateId(), this.fakedPerson.id])
		this.assertImOutButtonSelected()
	}

	private static setupVcWithWhosIn(whosIn: string[]) {
		const adventure = generateAdventureWithPersonValues()
		adventure.whosIn = whosIn
		this.setupVcWithAdventure(adventure)
	}

	private static setupVcWithWhosOut(whosOut: string[]) {
		const adventure = generateAdventureWithPersonValues()
		adventure.whosOut = whosOut
		this.setupVcWithAdventure(adventure)
	}

	private static assertImInButtonSelected() {
		const [inVc, outVc] = this.getRsvpButtons()
		assert.isTrue(this.views.render(inVc).isSelected)
		assert.isFalse(this.views.render(outVc).isSelected)
	}

	private static assertImOutButtonSelected() {
		const [inVc, outVc] = this.getRsvpButtons()
		assert.isFalse(this.views.render(inVc).isSelected)
		assert.isTrue(this.views.render(outVc).isSelected)
	}

	private static assertNoButtonSelected() {
		const [inVc, outVc] = this.getRsvpButtons()
		assert.isFalsy(this.views.render(inVc).isSelected)
		assert.isFalsy(this.views.render(outVc).isSelected)
	}

	private static getRsvpButtons() {
		return vcAssert.assertCardRendersButtons(this.vc, ['in', 'out'])
	}

	private static setupVcWithAdventure(adventure: AdventureWithPerson) {
		this.vc = this.views.Controller('adventure.adventure-card', {
			adventure,
			loggedInPersonId: this.fakedPerson.id,
		})
	}
}

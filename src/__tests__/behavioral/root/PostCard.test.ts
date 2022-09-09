import {
	formAssert,
	interactor,
	vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import { assert, test } from '@sprucelabs/test'
import { generateId } from '@sprucelabs/test-utils'
import PostCardViewController, {
	Adventure,
} from '../../../postingAnAdventure/PostCard.vc'
import EventFaker, { PostTargetAndPayload } from '../../support/EventFaker'

@fake.login()
export default class PostCardTest extends AbstractSpruceFixtureTest {
	private static vc: SpyPostCard
	private static eventFaker: EventFaker

	protected static async beforeEach() {
		await super.beforeEach()
		this.views.setController('adventure.post-card', SpyPostCard)
		this.vc = this.views.Controller('adventure.post-card', {}) as SpyPostCard
		this.eventFaker = new EventFaker()
	}

	@test()
	protected static async rendersForm() {
		formAssert.cardRendersForm(this.vc)
	}

	@test()
	protected static async postFormRendersExpectedFields() {
		this.assertDoesNotRenderSubmitControls()

		this.assertRendersFields(['what'])
		this.assertDoesNotRenderFields(['when', 'where'])

		await this.setToRandomValue('what')

		this.assertRendersFields(['what', 'when'])
		this.assertDoesNotRenderField('where')

		await this.setToRandomValue('when')

		this.assertRendersFields(['where'])
		this.assertDoesNotRenderSubmitControls()

		await this.setRandomAddress()

		this.assertRendersSubmitControls()
	}

	@test()
	protected static async doesNotRenderCancelButton() {
		assert.isFalse(this.formVc.getShouldShowCancelButton())
	}

	@test()
	protected static async submittingFormRendersConfirm() {
		await this.submitAndAssertConfirm()
	}

	@test()
	protected static async confirmingSubmitPostsAdventure() {
		let passedPayload: PostTargetAndPayload['payload'] | undefined

		await this.eventFaker.fakePostAdventure(({ payload }) => {
			passedPayload = payload
		})

		const { what, when, where } = await this.fillOutForm()

		await this.submitAndConfirm()

		assert.isEqualDeep(passedPayload?.adventure, { what, when, where })
	}

	@test()
	protected static async cancellingSaveDoesNotSave() {
		let wasHit = false

		await this.eventFaker.fakePostAdventure(() => {
			wasHit = true
		})

		await this.fillOutForm()
		const confirmVc = await this.submitAndAssertConfirm()
		await confirmVc.decline()
		assert.isFalse(wasHit)
	}

	private static async fillOutForm() {
		const what = await this.setToRandomValue('what')
		const when = await this.setToRandomValue('when')
		const where = await this.setRandomAddress()
		return { what, when, where }
	}

	private static async submitAndConfirm() {
		const confirm = await this.submitAndAssertConfirm()
		await confirm.accept()
	}

	private static generateAddressValues() {
		return this.eventFaker.generateAddressValues()
	}

	private static async submitAndAssertConfirm() {
		return vcAssert.assertRendersConfirm(this.vc, () =>
			interactor.submitForm(this.formVc)
		)
	}

	private static assertDoesNotRenderFields(names: AdventureKey[]) {
		names.forEach((i) => this.assertDoesNotRenderField(i))
	}

	private static async setRandomAddress() {
		const address = this.generateAddressValues()
		await this.formVc.setValue('where', address)

		return address
	}

	private static assertDoesNotRenderSubmitControls() {
		assert.isFalse(
			this.formVc.getShouldShowSubmitControls(),
			'should not render submit countrols'
		)
	}

	private static assertRendersSubmitControls() {
		assert.isTrue(
			this.formVc.getShouldShowSubmitControls(),
			'should render submit countrols'
		)
	}

	private static assertDoesNotRenderField(name: AdventureKey) {
		formAssert.formDoesNotRenderField(this.formVc, name)
	}

	private static assertRendersFields(expected: AdventureKey[]) {
		formAssert.formRendersFields(this.formVc, expected)
	}

	private static async setToRandomValue(key: 'what' | 'when') {
		const value = key === 'when' ? new Date().getTime() : generateId()
		await this.formVc.setValue(key, value)
		return value
	}

	private static get formVc() {
		return this.vc.getFormVc()
	}
}

class SpyPostCard extends PostCardViewController {
	public getFormVc() {
		return this.formVc
	}
}

type AdventureKey = keyof Adventure

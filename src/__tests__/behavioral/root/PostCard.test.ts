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
} from '../../../viewControllers/PostCard.vc'

@fake.login()
export default class PostCardTest extends AbstractSpruceFixtureTest {
	private static vc: SpyPostCard

	protected static async beforeEach() {
		await super.beforeEach()
		this.views.setController('adventure.post-card', SpyPostCard)
		this.vc = this.views.Controller('adventure.post-card', {}) as SpyPostCard
	}

	@test()
	protected static async rendersForm() {
		formAssert.cardRendersForm(this.vc)
	}

	@test()
	protected static async rendersExpectedFields() {
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
		await vcAssert.assertRendersConfirm(this.vc, () =>
			interactor.submitForm(this.formVc)
		)
	}

	private static assertDoesNotRenderFields(names: AdventureKey[]) {
		names.forEach((i) => this.assertDoesNotRenderField(i))
	}

	private static async setRandomAddress() {
		await this.formVc.setValue('where', {
			city: generateId(),
			country: generateId(),
			province: generateId(),
			street1: generateId(),
			zip: generateId(),
		})
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
		await this.formVc.setValue(key, generateId())
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

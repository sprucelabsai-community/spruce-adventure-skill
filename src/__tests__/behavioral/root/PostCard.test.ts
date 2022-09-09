import { formAssert, vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { eventFaker, fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, test } from '@sprucelabs/test'
import { Adventure } from '../../../adventure.types'
import { PostCardOptions } from '../../../postingAnAdventure/PostCard.vc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import { PostTargetAndPayload } from '../../support/EventFaker'
import FakePostCard from '../../support/FakePostCard'

@fake.login()
export default class PostCardTest extends AbstractAdventureTest {
	private static vc: FakePostCard

	protected static async beforeEach() {
		await super.beforeEach()
		this.views.setController('adventure.post-card', FakePostCard)
		this.vc = this.PostCardVc()
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

		const { what, when, where } = await this.fillOutFormSubmitAndAccept()

		assert.isEqualDeep(passedPayload?.adventure, { what, when, where })
	}

	@test()
	protected static async passesBackAdventureToOnPost() {
		const adventure = this.eventFaker.generateAdventureValues()
		let passedAdventure: Adventure | undefined

		this.vc = this.PostCardVc({
			onPost: (adventure) => {
				passedAdventure = adventure
			},
		})
		await this.eventFaker.fakePostAdventure(() => {
			return adventure
		})

		await this.fillOutFormSubmitAndAccept()
		assert.isEqualDeep(passedAdventure, adventure)
	}

	@test()
	protected static async rendersAlertWhenFailingToSave() {
		await eventFaker.makeEventThrow('adventure.post-adventure::v2022_09_09')
		await vcAssert.assertRendersAlert(this.vc, () =>
			this.fillOutFormSubmitAndAccept()
		)
	}

	private static async fillOutFormSubmitAndAccept() {
		const adventure = await this.fillOutForm()
		await this.submitAndConfirm()
		return adventure
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
		return this.vc.fillWithRandomValues()
	}

	private static async submitAndConfirm() {
		return this.vc.submitAndConfirm()
	}

	private static async submitAndAssertConfirm() {
		return this.vc.submitAndAssertConfirm()
	}

	private static assertDoesNotRenderFields(names: AdventureKey[]) {
		names.forEach((i) => this.assertDoesNotRenderField(i))
	}

	private static async setRandomAddress() {
		return this.vc.setRandomAddress()
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

	private static PostCardVc(options?: Partial<PostCardOptions>): FakePostCard {
		return this.views.Controller('adventure.post-card', {
			...options,
		}) as FakePostCard
	}

	private static assertDoesNotRenderField(name: AdventureKey) {
		formAssert.formDoesNotRenderField(this.formVc, name)
	}

	private static assertRendersFields(expected: AdventureKey[]) {
		formAssert.formRendersFields(this.formVc, expected)
	}

	private static async setToRandomValue(key: 'what' | 'when') {
		return this.vc.setToRandomValue(key)
	}

	private static get formVc() {
		return this.vc.getFormVc()
	}
}

type AdventureKey = keyof Adventure

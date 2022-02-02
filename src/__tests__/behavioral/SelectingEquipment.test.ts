import { interactor, vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { AbstractViewControllerTest } from '@sprucelabs/spruce-view-plugin'
import { test } from '@sprucelabs/test'

export default class SelectingEquipmentTest extends AbstractViewControllerTest {
	private static vc: EquipSkillViewController
	protected static async beforeEach(): Promise<void> {
		await super.beforeEach()
		this.vc = this.Controller('adventure.equip', {})
	}

	@test()
	protected static async canRenderVc() {
		await this.load(this.vc)
		this.render(this.vc)
	}

	@test()
	protected static rendersSwipeVc() {
		vcAssert.assertSkillViewRendersSwipeView()
	}

	@test()
	protected static async clickingGemRendersAlert() {
		await vcAssert.assertRendersDialog(this.vc, () =>
			interactor.clickButton(this.vc, 'grapefruit')
		)
	}
}

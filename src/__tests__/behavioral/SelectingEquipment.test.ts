import { interactor, vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { AbstractViewControllerTest } from '@sprucelabs/spruce-view-plugin'
import { assert, test } from '@sprucelabs/test'
import EquipSkillViewController from '../../skillViewControllers/Equip.svc'

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
		const swipeVc = vcAssert.assertSkillViewRendersSwipeCard(this.vc)
		assert.isEqual(swipeVc, this.vc.getSwipeVc())
	}

	@test()
	protected static async clickingGemRendersAlert() {
		await vcAssert.assertRendersDialog(this.vc, () =>
			interactor.clickButtonHint(this.vc.getSwipeVc(), 'grapefruit')
		)
	}
}

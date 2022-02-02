import { AbstractViewControllerTest } from '@sprucelabs/spruce-view-plugin'
import { test } from '@sprucelabs/test'

export default class SelectingEquipmentTest extends AbstractViewControllerTest {
	@test()
	protected static async canRenderVc() {
		const vc = this.Controller('adventure.equip', {})
		await this.load(vc)
		this.render(vc)
	}
}

import { AbstractViewControllerTest } from '@sprucelabs/spruce-view-plugin'
import { test, assert } from '@sprucelabs/test'

export default class RenderingTheRootSkillViewTest extends AbstractViewControllerTest {
	@test()
	protected static async canRenderRootSkillView() {
		const view = this.Controller('adventure.root', {}).render()
		assert.isTruthy(view)
	}
}

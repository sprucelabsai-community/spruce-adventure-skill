import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test } from '@sprucelabs/test-utils'
import ConnectSkillViewController from '../../../friends/Connect.svc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'

@fake.login()
export default class AcceptSkillViewTest extends AbstractAdventureTest {
	private static vc: ConnectSkillViewController
	@test()
	protected static async hasConnectSkillView() {
		this.vc = this.views.Controller('adventure.connect', {})
		this.views.render(this.vc)
	}
}

import { vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test } from '@sprucelabs/test'
import FriendsListToolViewController from '../../../friends/FriendsListTool.vc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'

@fake.login()
export default class FriendsToolTest extends AbstractAdventureTest {
	private static vc: FriendsListToolViewController
	protected static async beforeEach() {
		await super.beforeEach()
		this.vc = this.views.Controller('adventure.friends-list-tool', {})
	}
	@test()
	protected static async friendsToolRendersActiveRecordCard() {
		vcAssert.assertIsActiveRecordCard(this.vc)
	}

	@test()
	protected static async rendersInviteButton() {
		vcAssert.assertCardRendersButton(this.vc, 'invite')
	}

	@test()
	protected static async rendersRowForEachFriend() {}
}

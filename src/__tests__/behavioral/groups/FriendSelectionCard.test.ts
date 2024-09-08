import { vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test-utils'
import FriendsListToolViewController from '../../../friends/FriendsListTool.vc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'

@fake.login()
export default class FriendSelectionCardTest extends AbstractAdventureTest {
    @test()
    protected static async rendersAsFriendListTool() {
        const vc = this.views.Controller('adventure.friend-selection-card', {})
        vcAssert.assertRendersAsInstanceOf(vc, FriendsListToolViewController)
    }
}

import { listAssert, vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test } from '@sprucelabs/test-utils'
import { Friend } from '../../../adventure.types'
import FriendsListToolViewController from '../../../friends/listing/FriendsListTool.vc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import { SpyFriendListTool } from '../friends/SpyFriendListTool'
import { SpyFriendSelectionCard } from './SpyFriendSelectionCard'

@fake.login()
export default class FriendSelectionCardTest extends AbstractAdventureTest {
    private static vc: SpyFriendSelectionCard

    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()

        this.views.setController(
            'adventure.friends-list-tool',
            SpyFriendListTool
        )

        this.views.setController(
            'adventure.friend-selection-card',
            SpyFriendSelectionCard
        )

        this.vc = this.views.Controller(
            'adventure.friend-selection-card',
            {}
        ) as SpyFriendSelectionCard
    }

    @test()
    protected static async rendersAsFriendListTool() {
        vcAssert.assertRendersAsInstanceOf(
            this.vc,
            FriendsListToolViewController
        )
    }

    @test()
    protected static async rendersToggleInFriendRow() {
        const friend: Friend = this.eventFaker.generateFriendValues()
        await this.eventFaker.fakeListFriends(() => [friend])
        await this.vc.load(this.views.getRouter())
        listAssert.rowRendersToggle(
            this.vc.getListVc(),
            friend.id,
            'isSelected'
        )
    }
}

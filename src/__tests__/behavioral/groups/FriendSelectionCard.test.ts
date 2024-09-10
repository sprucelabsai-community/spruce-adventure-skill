import { listAssert, vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test } from '@sprucelabs/test-utils'
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

        await this.eventFaker.fakeListFriends()
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
        const friend = this.eventFaker.seedFriend()
        await this.load()
        listAssert.rowRendersToggle(this.listVc, friend.id, 'isSelected')
    }

    @test()
    protected static async doesNotRenderToggleIfRowRenderingSelf() {
        const friend = this.eventFaker.seedFriend({ id: this.fakedPerson.id })
        await this.load()
        listAssert.rowDoesNotRenderToggle(this.listVc, friend.id)
    }

    private static get listVc() {
        return this.vc.getListVc()
    }

    private static async load() {
        await this.views.load(this.vc)
    }
}

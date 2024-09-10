import { listAssert, vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, generateId, test } from '@sprucelabs/test-utils'
import FriendsListToolViewController from '../../../friends/listing/FriendsListTool.vc'
import { FriendSelectionCardLoadOptions } from '../../../groups/FriendSelectionCard.vc'
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
        this.assertRowRendersToggle(friend.id)
    }

    @test()
    protected static async doesNotRenderTogglesIfNotMyGroupAndPersonInGroup() {
        const friend = await this.loadWithFriendWhoIsNotSelectable()
        listAssert.rowDoesNotRenderToggle(this.listVc, friend.id)
    }

    @test()
    protected static async rendersTogglesForFriendIfIsMyGroup() {
        const friend = this.eventFaker.seedFriend()
        friend.isInGroup = true
        await this.loadMyGroup()
        this.assertRowRendersToggle(friend.id)
    }

    @test()
    protected static async rendersTogogleForMyselfAsPartOfOthersGroup() {
        const friend = this.eventFaker.seedFriend({
            id: this.fakedPerson.id,
            isInGroup: true,
        })
        await this.load({ group: { id: generateId(), isMine: false } })
        this.assertRowRendersToggle(friend.id)
    }

    @test()
    protected static async doesNotBlowUpIfTryingToSelectFriendThatDoesNotExist() {
        await this.load()
        await this.selectFriends([generateId()])
    }

    @test()
    protected static async doesNotBlowUpIfTryingToSelectFriendThatIsNotSelectable() {
        const friend = await this.loadWithFriendWhoIsNotSelectable()
        await this.vc.setSelectedFriends([friend.id])
    }

    @test()
    protected static async rendersExpectedInviteButtonLabelWhenLoadingWithGroup() {
        this.vc.enableInvite()
        await this.loadMyGroup()

        const model = this.views.render(this.vc)
        assert.isEqual(
            model.footer?.buttons?.[0].label,
            'Invite a new friend to this group!'
        )
    }

    private static async loadMyGroup() {
        await this.load({ group: { id: generateId(), isMine: true } })
    }

    private static async selectFriends(ids: string[]) {
        await this.vc.setSelectedFriends(ids)
    }

    private static async loadWithFriendWhoIsNotSelectable() {
        const friend = this.eventFaker.seedFriend()
        friend.isInGroup = true
        await this.load({ group: { id: generateId(), isMine: false } })
        return friend
    }

    private static assertRowRendersToggle(id: string) {
        listAssert.rowRendersToggle(this.listVc, id, 'isSelected')
    }

    private static get listVc() {
        return this.vc.getListVc()
    }

    private static async load(
        options?: Partial<FriendSelectionCardLoadOptions>
    ) {
        await this.vc.load({
            ...this.views.getRouter().buildLoadOptions(),
            ...options,
        })
    }
}

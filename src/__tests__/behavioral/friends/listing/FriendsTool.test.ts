import {
    activeRecordCardAssert,
    buttonAssert,
    interactor,
    listAssert,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { fake, TestRouter } from '@sprucelabs/spruce-test-fixtures'
import { assert, generateId, test, suite } from '@sprucelabs/test-utils'
import { Friend } from '../../../../adventure.types'
import { FriendsListOptions } from '../../../../friends/listing/FriendsListTool.vc'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'
import { generateAvatarValues } from '../../../support/generateAvatarValues'
import buildInviteDestination from '../../groups/buildInviteDestination'
import { SpyFriendListTool } from '../SpyFriendListTool'

@fake.login()
@suite()
export default class FriendsToolTest extends AbstractAdventureTest {
    private vc!: SpyFriendListTool

    protected async beforeEach() {
        await super.beforeEach()
        await this.eventFaker.fakeListFriends()

        this.views.setController(
            'adventure.friends-list-tool',
            SpyFriendListTool
        )

        this.vc = this.Vc()

        TestRouter.setShouldThrowWhenRedirectingToBadSvc(false)
    }

    @test()
    protected async friendsToolRendersActiveRecordCard() {
        activeRecordCardAssert.rendersAsActiveRecordCard(this.vc)
    }

    @test()
    protected async rendersInviteButton() {
        buttonAssert.cardRendersButton(this.vc, 'invite')
    }

    @test()
    protected async pagesAsExpected() {
        activeRecordCardAssert.pagingOptionsEqual(this.activeRecordCardVc, {
            pageSize: 5,
            shouldPageClientSide: true,
        })
    }

    @test()
    protected async rendersRowForEachFriend() {
        const friends: Friend[] = [
            {
                id: generateId(),
                casualName: generateId(),
                avatar: generateAvatarValues(),
                inviteSender: 'me',
            },
        ]

        await this.eventFaker.fakeListFriends(() => friends)
        await this.load()

        for (const friend of friends) {
            this.activeRecordCardVc.assertRendersRow(friend.id)
            this.activeRecordCardVc.assertRowRendersContent(
                friend.id,
                friend.casualName
            )

            listAssert.rowDoesNotRenderContent(this.listVc, friend.id, `You`)
        }
    }

    @test()
    protected async clickInviteCreatesPartialConnectionAndRedirectsToInvite() {
        const connection = this.eventFaker.generatePendingConnectionValues()

        await this.eventFaker.fakeCreateConnection(() => {
            return connection.id
        })

        await this.load()

        await vcAssert.assertActionRedirects({
            action: () => interactor.clickButton(this.vc, 'invite'),
            destination: buildInviteDestination(connection.id),
            router: this.views.getRouter(),
        })
    }

    @test()
    protected async doesNotRenderToggleInRowByDefault() {
        const friend: Friend = {
            id: generateId(),
            casualName: generateId(),
            avatar: generateAvatarValues(),
            inviteSender: 'me',
        }

        await this.eventFaker.fakeListFriends(() => [friend])
        await this.load()

        listAssert.rowDoesNotRenderToggle(this.listVc, friend.id)
    }

    @test()
    protected async shouldNotRenderFooterInNoFooterButtons() {
        this.vc = this.Vc({ shouldAllowInvite: false })
        await this.load()
        vcAssert.assertCardDoesNotRenderFooter(this.vc)
    }

    @test()
    protected async rendersYouIfRowHasYoursef() {
        const friend: Friend = {
            id: this.fakedPerson.id,
            casualName: this.fakedPerson.casualName,
            inviteSender: 'them',
        }
        await this.eventFaker.fakeListFriends(() => [friend])
        await this.load()
        this.activeRecordCardVc.assertRowRendersContent(friend.id, 'You')
    }

    @test()
    protected async rendersExpectedInviteButtonLabel() {
        await this.load()
        const { footer } = this.views.render(this.vc)
        assert.isEqual(footer?.buttons?.[0].label, 'Invite a friend!')
    }

    private get listVc() {
        return this.activeRecordCardVc.getListVcs()[0]
    }

    private async load() {
        await this.views.load(this.vc)
    }

    private get activeRecordCardVc() {
        return this.vc.getActiveCardVc()
    }

    private Vc(options?: FriendsListOptions): SpyFriendListTool {
        return this.views.Controller('adventure.friends-list-tool', {
            ...options,
        }) as SpyFriendListTool
    }
}

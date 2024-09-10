import {
    activeRecordCardAssert,
    buttonAssert,
    interactor,
    listAssert,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { fake, TestRouter } from '@sprucelabs/spruce-test-fixtures'
import { generateId, test } from '@sprucelabs/test-utils'
import { Friend } from '../../../../adventure.types'
import { FriendsListOptions } from '../../../../friends/listing/FriendsListTool.vc'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'
import { generateAvatarValues } from '../../../support/generateAvatarValues'
import buildInviteDestination from '../../groups/buildInviteDestination'
import { SpyFriendListTool } from '../SpyFriendListTool'

@fake.login()
export default class FriendsToolTest extends AbstractAdventureTest {
    private static vc: SpyFriendListTool

    protected static async beforeEach() {
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
    protected static async friendsToolRendersActiveRecordCard() {
        activeRecordCardAssert.rendersAsActiveRecordCard(this.vc)
    }

    @test()
    protected static async rendersInviteButton() {
        buttonAssert.cardRendersButton(this.vc, 'invite')
    }

    @test()
    protected static async pagesAsExpected() {
        activeRecordCardAssert.assertPagingOptionsEqual(
            this.activeRecordCardVc,
            {
                pageSize: 5,
                shouldPageClientSide: true,
            }
        )
    }

    @test()
    protected static async rendersRowForEachFriend() {
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
    protected static async clickInviteCreatesPartialConnectionAndRedirectsToInvite() {
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
    protected static async doesNotRenderToggleInRowByDefault() {
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
    protected static async shouldNotRenderFooterInNoFooterButtons() {
        this.vc = this.Vc({ shouldAllowInvite: false })
        await this.load()
        vcAssert.assertCardDoesNotRenderFooter(this.vc)
    }

    @test()
    protected static async rendersYouIfRowHasYoursef() {
        const friend: Friend = {
            id: this.fakedPerson.id,
            casualName: this.fakedPerson.casualName,
            inviteSender: 'them',
        }
        await this.eventFaker.fakeListFriends(() => [friend])
        await this.load()
        this.activeRecordCardVc.assertRowRendersContent(friend.id, 'You')
    }

    private static get listVc() {
        return this.activeRecordCardVc.getListVcs()[0]
    }

    private static async load() {
        await this.views.load(this.vc)
    }

    private static get activeRecordCardVc() {
        return this.vc.getActiveCardVc()
    }

    private static Vc(options?: FriendsListOptions): SpyFriendListTool {
        return this.views.Controller('adventure.friends-list-tool', {
            ...options,
        }) as SpyFriendListTool
    }
}

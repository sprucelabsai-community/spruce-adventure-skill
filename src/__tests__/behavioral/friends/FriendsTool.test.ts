import {
    interactor,
    MockActiveRecordCard,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { buildRouteToCreateInvite } from '@sprucelabs/spruce-invite-utils'
import { fake, TestRouter } from '@sprucelabs/spruce-test-fixtures'
import { generateId, test } from '@sprucelabs/test-utils'
import { Friend } from '../../../adventure.types'
import FriendsListToolViewController from '../../../friends/FriendsListTool.vc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import { generateAvatarValues } from '../../support/generateAvatarValues'

@fake.login()
export default class FriendsToolTest extends AbstractAdventureTest {
    private static vc: SpyListTool
    protected static async beforeEach() {
        await super.beforeEach()
        await this.eventFaker.fakeListFriends()

        this.views.setController('adventure.friends-list-tool', SpyListTool)
        this.vc = this.views.Controller(
            'adventure.friends-list-tool',
            {}
        ) as SpyListTool

        TestRouter.setShouldThrowWhenRedirectingToBadSvc(false)
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
        await this.loadVc()
        for (const friend of friends) {
            vcAssert.assertListRendersRow(this.vc.getListVc(), friend.id)
        }
    }

    @test()
    protected static async clickInviteCreatesPartialConnectionAndRedirectsToInvite() {
        const connection = this.eventFaker.generatePendingConnectionValues()

        await this.eventFaker.fakeCreateConnection(() => {
            return connection.id
        })

        const [id, args] = buildRouteToCreateInvite({
            destinationAfterCreate: {
                id: 'adventure.root',
            },
            shouldAllowOrganizationSelection: false,
            destinationAfterAccept: {
                id: 'adventure.connect',
                args: {
                    connection: connection.id,
                },
            },
        })

        await this.loadVc()

        await vcAssert.assertActionRedirects({
            action: () => interactor.clickButton(this.vc, 'invite'),
            destination: {
                id,
                args,
            },
            router: this.views.getRouter(),
        })
    }

    private static async loadVc() {
        await this.views.load(this.vc)
    }
}

class SpyListTool extends FriendsListToolViewController {
    public getListVc() {
        return (this.activeCardVc as MockActiveRecordCard).getListVc()
    }
}

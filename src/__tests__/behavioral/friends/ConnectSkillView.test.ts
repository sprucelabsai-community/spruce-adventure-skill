import {
    MockActiveRecordCard,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, generateId, test } from '@sprucelabs/test-utils'
import { Friend } from '../../../adventure.types'
import ConnectSkillViewController, {
    ConnectSkillViewArgs,
} from '../../../friends/Connect.svc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import {
    AcceptConnectionTargetAndPayload,
    ListFriendsTargetAndPayload,
} from '../../support/EventFaker'
import generateFriendValues from '../../support/generateFriendValues'

@fake.login()
export default class AcceptSkillViewTest extends AbstractAdventureTest {
    private static vc: SpyConnectSkillView
    private static friends: Friend[]

    protected static async beforeEach() {
        await super.beforeEach()
        await this.eventFaker.fakeListFriends(() => {
            return this.friends
        })

        this.friends = []

        this.views.setController('adventure.connect', SpyConnectSkillView)
        this.vc = this.views.Controller(
            'adventure.connect',
            {}
        ) as SpyConnectSkillView
    }

    @test()
    protected static async listsPendingConnections() {
        let wasHit = false
        let passedPayload: ListFriendsTargetAndPayload['payload'] | undefined

        await this.eventFaker.fakeListFriends(({ payload }) => {
            passedPayload = payload
            wasHit = true
        })

        await this.load()

        assert.isTrue(wasHit)
        assert.isEqualDeep(passedPayload, { filter: 'pending' })
    }

    @test()
    protected static async rendersAExpectedCard() {
        vcAssert.assertSkillViewRendersActiveRecordCard(this.vc, 'pending')
    }

    @test()
    protected static async listsRecordForEachPending() {
        await this.setFriendsAndLoad([
            generateFriendValues(),
            generateFriendValues(),
            generateFriendValues(),
        ])

        for (const friend of this.friends) {
            vcAssert.assertListRendersRow(this.friendsListVc, friend.id)
        }
    }

    @test()
    protected static async rendersExpectedButtonsForWhomeverSent() {
        await this.setFriendsAndLoad([
            generateFriendValues('me'),
            generateFriendValues('them'),
        ])

        for (const friend of this.friends) {
            const buttons =
                friend.inviteSender === 'me'
                    ? ['withdraw']
                    : ['accept', 'decline']
            for (const id of buttons) {
                vcAssert.assertRowRendersButton(
                    this.friendsListVc,
                    friend.id,
                    id
                )
            }

            const notRendered =
                friend.inviteSender === 'me'
                    ? ['accept', 'decline']
                    : ['withdraw']
            for (const id of notRendered) {
                vcAssert.assertRowDoesNotRenderButton(
                    this.friendsListVc,
                    friend.id,
                    id
                )
            }
        }
    }

    @test()
    protected static async acceptsConnectionIfPassedThroughArgs() {
        let wasHit = false
        const connectionId = generateId()
        let passedTarget: AcceptConnectionTargetAndPayload['target'] | undefined
        await this.eventFaker.fakeAcceptConnection(({ target }) => {
            passedTarget = target
            wasHit = true
        })

        await this.loadAndAssertRedirect(connectionId)
        assert.isTrue(wasHit)
        assert.isEqualDeep(passedTarget, { connectionId })
    }

    @test()
    protected static async doesNotLoadIfAcceptingConnection() {
        await this.eventFaker.fakeAcceptConnection()
        let wasHit = false
        await this.eventFaker.fakeListFriends(() => {
            wasHit = true
        })

        await this.loadAndAssertRedirect(generateId())
        assert.isFalse(wasHit)
    }

    private static async loadAndAssertRedirect(connectionId: string) {
        await vcAssert.assertActionRedirects({
            action: () => this.load({ connection: connectionId }),
            destination: {
                id: 'adventure.root',
            },
            router: this.views.getRouter(),
        })
    }

    private static async setFriendsAndLoad(friends: Friend[]) {
        this.setFriends(friends)
        await this.load()
    }

    private static setFriends(friends: Friend[]) {
        this.friends = friends
    }

    private static async load(args?: ConnectSkillViewArgs) {
        await this.views.load(this.vc, args)
    }

    private static get friendsListVc() {
        return this.vc.getListVc()
    }
}

class SpyConnectSkillView extends ConnectSkillViewController {
    public getListVc() {
        return (this.cardVc as MockActiveRecordCard).getListVc()
    }
    public getCardVc() {
        return this.cardVc
    }
}

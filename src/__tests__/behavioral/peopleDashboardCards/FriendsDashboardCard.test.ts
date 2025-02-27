import {
    interactor,
    SkillViewControllerLoadOptions,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, suite, assert } from '@sprucelabs/test-utils'
import FriendsListToolViewController from '../../../friends/listing/FriendsListTool.vc'
import FriendsDashboardCardViewController from '../../../peopleDashboardCards/FriendsDashboardCard.vc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'

@fake.login()
@suite()
export default class FriendsDashboardCardTest extends AbstractAdventureTest {
    private vc!: FriendsDashboardCardViewController

    protected async beforeEach() {
        await super.beforeEach()
        this.vc = this.views.Controller('adventure.friends-dashboard-card', {})
        await this.eventFaker.fakeListFriends()
    }

    @test()
    protected async canCreateFriendsDashboardCard() {
        vcAssert.assertRendersAsInstanceOf(
            this.vc,
            FriendsListToolViewController
        )
    }

    @test()
    protected async rendersGoToAdventuresButton() {
        vcAssert.assertCardRendersButton(this.vc, 'adventures')
    }

    @test()
    protected async clickingAdventuresRedirectsToAdventures() {
        await this.load()
        await vcAssert.assertActionRedirects({
            action: () => interactor.clickButton(this.vc, 'adventures'),
            destination: {
                id: 'adventure.root',
            },
            router: this.views.getRouter(),
        })
    }

    @test()
    protected async callsLoadAndPassesThroughOptions() {
        let passedOptions: SkillViewControllerLoadOptions | undefined
        //@ts-ignore
        this.vc.friendsListCardVc.load = async (options) => {
            //@ts-ignore
            passedOptions = options
        }

        await this.load()

        assert.isEqualDeep(
            passedOptions,
            this.views.getRouter().buildLoadOptions()
        )
    }

    private async load() {
        await this.views.load(this.vc)
    }
}

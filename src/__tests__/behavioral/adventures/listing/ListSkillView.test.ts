import {
    buttonAssert,
    interactor,
    Router,
    toolBeltAssert,
    vcAssert,
    vcDurationAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { eventFaker, fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'
import { ListAdventure } from '../../../../adventure.types'
import AdventureCardViewController from '../../../../adventures/listing/AdventureCard.vc'
import CurrentAdventureCardViewController from '../../../../adventures/listing/CurrentAdventureCard.vc'
import ListSkillViewController from '../../../../adventures/listing/List.svc'
import PostCardViewController from '../../../../adventures/posting/PostCard.vc'
import FriendsListToolViewController from '../../../../friends/listing/FriendsListTool.vc'
import GroupListCardViewController from '../../../../groups/listing/GroupListCard.vc'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'
import { SendReminderTargetAndPayload } from '../../../support/EventFaker'
import FakePostCard from '../../../support/FakePostCard'
import generateAdventureWithPersonValues from '../../../support/generateAdventureWithPersonValues'
import generateFriendValues from '../../../support/generateFriendValues'
import { SpyCurrentCard } from '../../../support/SpyCurrentCard'
import { assertActionRendersConfirmCancelDialog } from './assertActionRendersConfirmCancelDialog'
import ControlledConfirmCancelCard from './ControlledConfirmCancelCard'

@fake.login()
export default class ListSkillViewTest extends AbstractAdventureTest {
    private static vc: SpyListViewController
    private static currentAdventure: ListAdventure
    private static adventureRecords: ListAdventure[]
    private static sendReminderTarget?: SendReminderTargetAndPayload['target']

    protected static async beforeEach() {
        await super.beforeEach()

        this.currentAdventure = generateAdventureWithPersonValues({
            source: { personId: this.fakedPerson.id },
        })
        delete this.sendReminderTarget

        await this.fakeListAdventuresWithCurrent()
        await this.eventFaker.fakeListFriends(() => [])
        await this.eventFaker.fakeListAdventures(() => {
            return this.adventureRecords
        })

        await this.eventFaker.fakeSendReminder(({ target }) => {
            this.sendReminderTarget = target
        })

        await this.eventFaker.fakeListGroups()

        this.resetAdventureRecords()
        this.seedCurrentAdventure()

        this.views.setController(
            'adventure.confirm-cancel-card',
            ControlledConfirmCancelCard
        )
        this.views.setController('adventure.list', SpyListViewController)
        this.views.setController('adventure.group-list-card', MockGroupsTool)
        this.views.setController('adventure.friends-list-tool', MockFriendsTool)
        this.views.setController('adventure.post-card', FakePostCard)
        this.views.setController(
            'adventure.current-adventure-card',
            SpyCurrentCard
        )

        await this.reload()
    }

    @test()
    protected static async hasDurationUtilConfigured() {
        vcDurationAssert.durationUtilIsConfiguredForVc(this.vc)
    }

    @test()
    protected static async redirectsIfLoadsAndFindsNoAdventures() {
        await this.eventFaker.fakeListAdventures()
        await vcAssert.assertActionRedirects({
            action: () => this.load(),
            router: this.views.getRouter(),
            destination: {
                id: 'adventure.post',
            },
        })
    }

    @test()
    protected static async showsExpectedCardsWithAdventure() {
        const currentVc = this.assertRendersCard('current')
        vcAssert.assertRendersAsInstanceOf(
            currentVc,
            CurrentAdventureCardViewController
        )
    }

    @test()
    protected static async rendersToolBeltWithExpectedTools() {
        toolBeltAssert.rendersToolBelt(this.vc)
        toolBeltAssert.toolInstanceOf(
            this.vc,
            'friends',
            FriendsListToolViewController
        )

        toolBeltAssert.toolInstanceOf(
            this.vc,
            'groups',
            GroupListCardViewController
        )
    }

    @test()
    protected static async showsPostAdventureCardWithBusyToStart() {
        this.vc = this.Vc()
        vcAssert.assertSkillViewRendersCard(this.vc, 'loading')
        vcAssert.assertCardIsBusy(this.vc.getLoadingCardVc())
        this.resetAdventureRecords()
        this.seedAdventureWithPerson()
        await this.load()
        vcAssert.assertSkillViewDoesNotRenderCard(this.vc, 'loading')
    }

    @test()
    protected static async noPostCardWithAdventures() {
        this.vc = this.Vc()
        this.seedAdventureWithPerson()
        this.views.render(this.vc)
        await this.load()
        this.views.render(this.vc)
        vcAssert.assertSkillViewDoesNotRenderCard(this.vc, 'loading')
    }

    @test()
    protected static async noPostCardIfHasCurrent() {
        vcAssert.assertSkillViewDoesNotRenderCard(this.vc, 'post')
    }

    @test()
    protected static async loadsFriendTool() {
        const tool = this.vc.getFriendsTool()
        tool.assertIsLoaded()
    }

    @test()
    protected static async loadsGroupsTool() {
        const tool = this.vc.getGroupsTool()
        tool.assertIsLoaded()
    }

    @test()
    protected static async currentCardHasProperAdventure() {
        assert.isEqualDeep(
            this.currentCardVc.getAdventure(),
            this.currentAdventure
        )
    }

    @test()
    protected static async listSkillViewRequiresLogin() {
        await vcAssert.assertLoginIsRequired(this.vc)
    }

    @test()
    protected static async cancellingCurrentRedirectsToAdd() {
        await this.eventFaker.fakeCancelAdventure()
        const { confirmCancelVc: confirm } =
            await assertActionRendersConfirmCancelDialog(
                this.currentCardVc,
                () => interactor.clickButton(this.currentCardVc, 'cancel')
            )
        await vcAssert.assertActionRedirects({
            action: async () => confirm.accept(),
            destination: {
                id: 'adventure.list',
            },
            router: this.views.getRouter(),
        })
    }

    @test()
    protected static async loadsAdventuresFromConnections() {
        const adventure = this.seedAdventureWithPerson()

        await this.reload()

        const vc = vcAssert.assertSkillViewRendersCard(this.vc, adventure.id)
        vcAssert.assertRendersAsInstanceOf(vc, AdventureCardViewController)
    }

    @test()
    protected static async loadsManyAdventuresAndKeepsOwnFirst() {
        this.resetAdventureRecords()
        const adventure = this.seedAdventureWithPerson()
        this.seedCurrentAdventure()

        await this.reload()

        const cards = vcAssert.assertSkillViewRendersCards(this.vc)
        assert.isEqual(this.views.render(cards[0]).id, 'current')
        assert.isEqual(this.views.render(cards[1]).id, adventure.id)
    }

    @test()
    protected static async passesProperLoggedInPersonIdToAdventureCard() {
        this.resetAdventuresAndSeedOne()

        await this.reload()
        const [vc] = this.vc.getCards()
        //@ts-ignore
        assert.isEqual(vc.loggedInPersonId, this.fakedPerson.id)
    }

    @test()
    protected static async toolIsFocusedIfHaveCurrentAdventureButNoFriends() {
        this.vc = this.Vc()
        await toolBeltAssert.actionFocusesTool(this.vc, 'friends', () =>
            this.load()
        )
    }

    @test()
    protected static async doesNotFocuseToolIfHasConnections() {
        this.vc = this.Vc()
        await this.eventFaker.fakeListFriends(() => [generateFriendValues()])
        await assert.doesThrowAsync(() =>
            toolBeltAssert.actionFocusesTool(this.vc, 'friends', () =>
                this.load()
            )
        )
    }

    @test()
    protected static async showsPostCardIfThereAreAdventures() {
        this.resetAdventuresAndSeedOne()
        await this.reload()
        const cardVc = vcAssert.assertSkillViewRendersCard(this.vc, 'post')
        vcAssert.assertRendersAsInstanceOf(cardVc, PostCardViewController)
    }

    @test()
    protected static async postingFromListPageReloadsPage() {
        this.resetAdventuresAndSeedOne()
        await this.eventFaker.fakePostAdventure()

        const postCardVc = this.vc.getPostCardVc()
        await postCardVc.fillWithRandomValues()
        await vcAssert.assertActionRedirects({
            action: () => postCardVc.submitAndConfirm(),
            destination: {
                id: 'adventure.list',
            },
            router: this.views.getRouter(),
        })
    }

    @test()
    protected static async rendersGroupTitleInHeaderOfAdventureCard() {
        const groupTitle = generateId()
        this.resetAdventuresAndSeedOne({ groupTitle })
        await this.reload()
        const adventureCardVc =
            this.vc.getCards()[0] as AdventureCardViewController

        const { header } = this.views.render(adventureCardVc)
        assert.doesInclude(
            header?.title,
            groupTitle,
            `Your adventure card is not rendering the group title in the header`
        )
    }

    @test()
    protected static async rendersSendReminderButtonOnAdventureIfNotSent() {
        buttonAssert.cardRendersButton(this.currentCardVc, 'reminder')
        buttonAssert.buttonIsEnabled(this.currentCardVc, 'reminder')
    }

    @test()
    protected static async pressingReminderButtonRendersConfirm() {
        await this.clickReminderAndAssertConfirm()
    }

    @test()
    protected static async confirmRemindeEmitsSendReminderEvent() {
        await this.clickReminderAndAccept()

        assert.isEqualDeep(
            this.sendReminderTarget,
            { adventureId: this.currentAdventure.id },
            `Your send reminder event was not hit`
        )
    }

    @test()
    protected static async decliningReminderDoesNotEmitEvent() {
        const confirmVc = await this.clickReminderAndAssertConfirm()
        await confirmVc.decline()

        assert.isFalsy(
            this.sendReminderTarget,
            `Your send reminder event was hit and it should not have been`
        )
    }

    @test()
    protected static async sendReminderThrowingRendersAlert() {
        await eventFaker.makeEventThrow('adventure.send-reminder::v2022_09_09')
        await vcAssert.assertRendersAlert(this.currentCardVc, async () =>
            this.clickReminderAndAccept()
        )
    }

    @test()
    protected static async reminderButtonIsDisabledAfterSend() {
        await this.clickReminderAndAccept()
        this.assertReminderButtonDisabled()
        buttonAssert.cardRendersButton(this.currentCardVc, 'cancel')
    }

    @test()
    protected static async reminderButtonIsDisabledIfAdventureMarkedAsReminderSent() {
        this.currentAdventure.wasReminderSent = true
        await this.reload()
        this.assertReminderButtonDisabled()
    }

    private static assertReminderButtonDisabled() {
        buttonAssert.buttonIsDisabled(this.currentCardVc, 'reminder')
    }

    private static async clickReminderAndAccept() {
        const confirmVc = await this.clickReminderAndAssertConfirm()
        await confirmVc.accept()
    }

    private static async clickReminderAndAssertConfirm() {
        return await vcAssert.assertRendersConfirm(this.currentCardVc, () =>
            interactor.clickButton(this.currentCardVc, 'reminder')
        )
    }

    private static resetAdventureRecords() {
        this.adventureRecords = []
    }

    private static async load() {
        await this.views.load(this.vc)
    }

    private static async fakeListAdventuresWithCurrent() {
        await this.eventFaker.fakeListAdventures(() => [this.currentAdventure])
    }

    private static assertRendersCard(id: string) {
        return vcAssert.assertSkillViewRendersCard(this.vc, id)
    }

    private static get currentCardVc() {
        return this.vc.getCurrentCardVc()!
    }

    private static async reload() {
        this.vc = this.Vc()
        await this.load()
    }

    private static Vc(): SpyListViewController {
        return this.views.Controller(
            'adventure.list',
            {}
        ) as SpyListViewController
    }

    private static seedCurrentAdventure() {
        this.adventureRecords.push(this.currentAdventure)
    }

    private static seedAdventureWithPerson(values?: Partial<ListAdventure>) {
        const adventure = generateAdventureWithPersonValues(values)
        this.adventureRecords.push(adventure)
        return adventure
    }

    private static resetAdventuresAndSeedOne(values?: Partial<ListAdventure>) {
        this.resetAdventureRecords()
        this.seedAdventureWithPerson(values)
    }
}

class SpyListViewController extends ListSkillViewController {
    public getGroupsTool() {
        return this.groupsToolVc as MockGroupsTool
    }
    public getLoadingCardVc() {
        return this.loadingCardVc
    }
    public getPostCardVc() {
        return this.postCardVc as FakePostCard
    }
    public getCurrentCardVc() {
        return this.currentCardVc as SpyCurrentCard
    }

    public getFriendsTool() {
        return this.friendsToolVc as MockFriendsTool
    }
    public getCards() {
        return this.cards
    }
}

class MockFriendsTool extends FriendsListToolViewController {
    private isLoaded = false
    public async load(options: any) {
        this.isLoaded = true
        return super.load(options)
    }

    public assertIsLoaded() {
        assert.isTrue(this.isLoaded, `Your friends tool is not loaded`)
    }
}

class MockGroupsTool extends GroupListCardViewController {
    private isLoaded = false
    public async load(options: { router: Router }) {
        this.isLoaded = true
        return super.load(options)
    }

    public assertIsLoaded() {
        assert.isTrue(this.isLoaded, `Your groups tool is not loaded`)
    }
}
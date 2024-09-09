import {
    buttonAssert,
    interactor,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { eventFaker, fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, generateId, test } from '@sprucelabs/test-utils'
import FriendSelectionCardViewController from '../../../groups/FriendSelectionCard.vc'
import GroupSkillViewController, {
    GroupSkillViewArgs,
} from '../../../groups/Group.svc'
import GroupFormCardViewController from '../../../groups/GroupFormCard.vc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import {
    CreateGroupTargetAndPayload,
    GetGroupTargetAndPayload,
} from '../../support/EventFaker'
import { SpyFriendListTool } from '../friends/SpyFriendListTool'
import { SpyFriendSelectionCard } from './SpyFriendSelectionCard'
import { SpyGroupFormCard } from './SpyGroupFormCard'

@fake.login()
export default class GroupSkillViewTest extends AbstractAdventureTest {
    private static vc: SpyGroupSkillView
    private static createGroupPayload?: CreateGroupTargetAndPayload['payload']
    private static getGroupTarget?: GetGroupTargetAndPayload['target']

    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()

        delete this.createGroupPayload
        delete this.getGroupTarget

        this.views.setController(
            'adventure.friend-selection-card',
            SpyFriendSelectionCard
        )

        this.views.setController(
            'adventure.friends-list-tool',
            SpyFriendListTool
        )
        this.views.setController('adventure.group-form-card', SpyGroupFormCard)
        this.views.setController('adventure.group', SpyGroupSkillView)
        this.vc = this.views.Controller(
            'adventure.group',
            {}
        ) as SpyGroupSkillView

        await this.eventFaker.fakeListFriends()
        await this.eventFaker.fakeGetGroup(({ target }) => {
            this.getGroupTarget = target
        })
        await this.eventFaker.fakeCreateGroup(({ payload }) => {
            this.createGroupPayload = payload
        })
    }

    @test()
    protected static async rendersExpectedCards() {
        const [formCardVc, friendSelectionCardVc] =
            vcAssert.assertSkillViewRendersCards(this.vc, [
                'form',
                'friend-selection',
            ])

        vcAssert.assertRendersAsInstanceOf(
            formCardVc,
            GroupFormCardViewController
        )

        vcAssert.assertRendersAsInstanceOf(
            friendSelectionCardVc,
            FriendSelectionCardViewController
        )
    }

    @test()
    protected static async cancellingFormRedirectsToListSkillView() {
        await this.load()
        await vcAssert.assertActionRedirects({
            action: () => interactor.cancelForm(this.formVc),
            destination: {
                id: 'adventure.list',
            },
            router: this.views.getRouter(),
        })
    }

    @test()
    protected static async loadingLoadsFriendSelectionCard() {
        await this.load()
        assert.isTrue(this.friendSelectionCardVc.isLoaded)
    }

    @test()
    protected static async submittingFormEmitsCreateGroupEvent() {
        await this.load()

        const { title, description } = await this.fillOutForm()

        await this.submitAndAssertRedirect()

        assert.isEqualDeep(this.createGroupPayload, {
            group: {
                title,
                description,
                people: [],
            },
        })
    }

    @test()
    protected static async passesThroughSelectedFriend() {
        const friend = this.eventFaker.seedFriend()
        await this.load()
        await this.toggleFriend(friend.id)
        await this.fillOutFormSubmitAndAssertSavedPeople([friend.id])
    }

    @test()
    protected static async passesThroughOnlySelectedFriend() {
        this.eventFaker.seedFriend()
        const friend = this.eventFaker.seedFriend()
        await this.load()
        await this.toggleFriend(friend.id)
        await this.fillOutFormSubmitAndAssertSavedPeople([friend.id])
    }

    @test()
    protected static async canSelectMultipleFriends() {
        const friends = [
            this.eventFaker.seedFriend(),
            this.eventFaker.seedFriend(),
        ]

        this.eventFaker.seedFriend()

        await this.load()
        await this.toggleFriend(friends[0].id)
        await this.toggleFriend(friends[1].id)
        await this.fillOutFormSubmitAndAssertSavedPeople(
            friends.map((f) => f.id)
        )
    }

    @test()
    protected static async rendersAlertIfSavingFails() {
        await this.load()
        await eventFaker.makeEventThrow('adventure.create-group::v2022_09_09')

        await vcAssert.assertRendersAlert(this.vc, () =>
            this.fillOutFormAndSubmit()
        )
    }

    @test()
    protected static async redirectsToListAfterSave() {
        await this.load()
        await this.fillOutFormSubmitAndAssertRedirect()
    }

    @test()
    protected static async friendSelectionCardShouldNotBeRenderingInviteButton() {
        await this.load()
        buttonAssert.cardDoesNotRenderButton(
            this.friendSelectionCardVc,
            'invite'
        )
    }

    @test()
    protected static async emitsGetGroupOnLoad() {
        const id = generateId()
        await this.load({ id })
        assert.isEqualDeep(this.getGroupTarget, { id })
    }

    @test()
    protected static async populateFormWithGroupValues() {
        const group = this.eventFaker.generateListGroupValues()
        await this.eventFaker.fakeGetGroup(() => group)
        await this.load({ id: group.id })
        const values = this.formVc.getValues()
        assert.isEqualDeep(values, {
            title: group.title,
            description: group.description,
        })
    }

    private static async fillOutFormSubmitAndAssertRedirect() {
        await this.fillOutForm()
        await this.submitAndAssertRedirect()
    }

    private static async submitAndAssertRedirect() {
        await vcAssert.assertActionRedirects({
            action: () => this.submit(),
            destination: {
                id: 'adventure.list',
            },
            router: this.views.getRouter(),
        })
    }

    private static async fillOutFormSubmitAndAssertSavedPeople(
        expected: string[]
    ) {
        await this.fillOutFormSubmitAndAssertRedirect()
        this.assertSavedPeople(expected)
    }

    private static async fillOutFormAndSubmit() {
        await this.fillOutForm()
        await this.submit()
    }

    private static assertSavedPeople(expected: string[]) {
        assert.isEqualDeep(this.createGroupPayload?.group.people, expected)
    }

    private static async toggleFriend(id: string) {
        await this.friendSelectionCardVc.clickToggle(id)
    }

    private static get friendSelectionCardVc() {
        return this.vc.getFriendSelectionCardVc()
    }

    private static async submit() {
        await interactor.submitForm(this.formVc)
    }

    private static async fillOutForm() {
        const title = generateId()
        const description = generateId()

        await this.setTitle(title)
        await this.setDescription(description)
        return { title, description }
    }

    private static async setDescription(description: string) {
        await this.formVc.setValue('description', description)
    }

    private static async setTitle(title: string) {
        await this.formVc.setValue('title', title)
    }

    private static get formVc() {
        return this.vc.getFormVc()
    }

    private static async load(args?: GroupSkillViewArgs) {
        await this.views.load(this.vc, args)
    }
}

class SpyGroupSkillView extends GroupSkillViewController {
    public getFriendSelectionCardVc() {
        return this.friendSelectionCardVc as SpyFriendSelectionCard
    }
    public getFormVc() {
        return (this.formCardVc as SpyGroupFormCard).getFormVc()
    }
}

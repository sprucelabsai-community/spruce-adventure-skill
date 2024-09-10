import {
    buttonAssert,
    interactor,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { eventFaker, fake, TestRouter } from '@sprucelabs/spruce-test-fixtures'
import { assert, generateId, test } from '@sprucelabs/test-utils'
import { Friend, ListGroup } from '../../../adventure.types'
import FriendSelectionCardViewController from '../../../groups/FriendSelectionCard.vc'
import GroupSkillViewController, {
    GroupSkillViewArgs,
} from '../../../groups/Group.svc'
import GroupFormCardViewController from '../../../groups/GroupFormCard.vc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import {
    CreateGroupTargetAndPayload,
    GetGroupTargetAndPayload,
    ListFriendsTargetAndPayload,
    UpdateGroupTargetAndPayload,
} from '../../support/EventFaker'
import { SpyFriendListTool } from '../friends/SpyFriendListTool'
import { SpyFriendSelectionCard } from './SpyFriendSelectionCard'
import { SpyGroupFormCard } from './SpyGroupFormCard'

@fake.login()
export default class GroupSkillViewTest extends AbstractAdventureTest {
    private static vc: SpyGroupSkillView
    private static createGroupPayload?: CreateGroupTargetAndPayload['payload']
    private static getGroupTarget?: GetGroupTargetAndPayload['target']
    private static updateGroupPayload: UpdateGroupTargetAndPayload['payload']
    private static updateGroupTarget: UpdateGroupTargetAndPayload['target']

    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()

        delete this.createGroupPayload
        delete this.getGroupTarget

        TestRouter.setShouldThrowWhenRedirectingToBadSvc(false)

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

        await this.eventFaker.fakeUpdateGroup(({ payload, target }) => {
            this.updateGroupTarget = target
            this.updateGroupPayload = payload
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

        vcAssert.assertSkillViewDoesNotRenderCard(this.vc, 'details')
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
        await this.loadWithGroup(group)
        const values = this.formVc.getValues()
        assert.isEqualDeep(values, {
            title: group.title,
            description: group.description,
        })
    }

    @test()
    protected static async selectsFirstFriendFromGroup() {
        const friend = this.eventFaker.seedFriend()
        await this.loadWithFriendsAndAssertSelected([friend])
    }

    @test()
    protected static async selectsMultipleFriendsFromGroup() {
        const friends = [
            this.eventFaker.seedFriend(),
            this.eventFaker.seedFriend(),
        ]

        await this.loadWithFriendsAndAssertSelected(friends)
    }

    @test()
    protected static async submittingFormOnUpdateDoesNotEmitCreateGroup() {
        await this.loadWithFriendsSubmitAndAssertRedirect([])
        assert.isUndefined(this.createGroupPayload)
    }

    @test()
    protected static async emitsUpdateGroupOnSave() {
        const group = await this.loadWithFriendsSubmitAndAssertRedirect([])

        assert.isEqualDeep(
            this.updateGroupTarget,
            {
                id: group.id,
            },
            'Target does not match expected'
        )

        //@ts-ignore
        delete group.id
        //@ts-ignore
        delete group.isMine
        assert.isEqualDeep(
            this.updateGroupPayload,
            {
                group: {
                    ...group,
                    people: [],
                },
            },
            'Payload does not match expected'
        )
    }

    @test()
    protected static async emitsUpdateGroupWithSelectedFriends() {
        const friends = [
            this.eventFaker.seedFriend(),
            this.eventFaker.seedFriend(),
        ]
        await this.loadWithFriendsSubmitAndAssertRedirect(friends)

        assert.isEqualDeep(
            this.updateGroupPayload.group.people,
            friends.map((f) => f.id)
        )
    }

    @test()
    protected static async loadingWithGroupRendersInviteButton() {
        await this.loadWithGroup()
        buttonAssert.cardRendersButton(this.friendSelectionCardVc, 'invite')
    }

    @test()
    protected static async formIsNotDirtyOnLoadOfGroup() {
        await this.loadWithGroup()
        assert.isFalse(this.formVc.getIsDirty())
    }

    @test()
    protected static async inviteButtonAddsGroupToCreatedConnection() {
        const group = await this.loadWithGroup()

        const connectionId = generateId()
        let passedGroupId: string | undefined | null

        await this.eventFaker.fakeCreateConnection(({ target }) => {
            passedGroupId = target?.groupId
            return connectionId
        })

        await vcAssert.assertActionRedirects({
            action: () =>
                interactor.clickButton(this.friendSelectionCardVc, 'invite'),
            router: this.views.getRouter(),
        })

        assert.isEqual(passedGroupId, group.id)
    }

    @test()
    protected static async doesNotRenderFormCardIfGroupNotMine() {
        await this.loadWithGroup({ isMine: false })

        vcAssert.assertSkillViewDoesNotRenderCard(this.vc, 'form')
        vcAssert.assertSkillViewRendersCard(this.vc, 'details')
        vcAssert.assertTriggerRenderCount(this.vc, 1)
    }

    @test()
    protected static async detailsCardRendersExpectedContent() {
        const group = await this.loadWithGroup({ isMine: false })

        const detailsCardVc = this.vc.getDetailsCardVc()
        const { header } = this.views.render(detailsCardVc)

        assert.doesInclude(header?.title, group.title)
        assert.doesInclude(header?.subtitle, group.description)
    }

    @test()
    protected static async loadWithGroupPassesGroupToListFriends() {
        let passedPayload: ListFriendsTargetAndPayload['payload'] | undefined
        await this.eventFaker.fakeListFriends(({ payload }) => {
            passedPayload = payload
        })

        const group = await this.loadWithGroup()
        assert.isEqualDeep(passedPayload, {
            isInGroupId: group.id,
        })
    }

    @test('passes through group isMine status to friend list false', false)
    @test('passes through group isMine status to friend list true', true)
    protected static async passesGroupIsMineStatusToListFriends(
        isMine: boolean
    ) {
        const group = await this.loadWithGroup({ isMine })
        assert.isEqualDeep(this.friendSelectionCardVc.getLoadOptions()?.group, {
            id: group.id,
            isMine: group.isMine,
        })
    }

    private static async loadWithFriendsSubmitAndAssertRedirect(
        friends: Friend[]
    ) {
        const group = await this.loadWithFriends(friends)
        await this.submitAndAssertRedirect()
        return group
    }

    private static async loadWithFriendsAndAssertSelected(friends: Friend[]) {
        await this.loadWithFriends(friends)
        const selected = this.friendSelectionCardVc.getSelectedFriends()
        assert.isEqualDeep(
            selected,
            friends.map((f) => f.id)
        )
    }

    private static async loadWithFriends(friends: Friend[]) {
        const group = this.eventFaker.generateListGroupValues({
            people: friends.map((f) => f.id),
        })

        await this.loadWithGroup(group)

        return group
    }

    private static async loadWithGroup(group?: Partial<ListGroup>) {
        const g = this.eventFaker.generateListGroupValues(group)
        await this.eventFaker.fakeGetGroup(() => g)
        await this.load({ id: g.id })
        return g
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
    public getDetailsCardVc() {
        return this.detailCardVc
    }
    public getFriendSelectionCardVc() {
        return this.friendSelectionCardVc as SpyFriendSelectionCard
    }

    public getFormVc() {
        return (this.formCardVc as SpyGroupFormCard).getFormVc()
    }
}

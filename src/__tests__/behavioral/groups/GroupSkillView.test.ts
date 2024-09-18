import {
    buttonAssert,
    interactor,
    listAssert,
    ListRow,
    vcAssert,
    AssertConfirmViewController,
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
    AddFriendToGroupTargetAndPayload,
    CreateGroupTargetAndPayload,
    GetGroupTargetAndPayload,
    LeaveGroupTargetAndPayload,
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
    private static addFriendTarget?: AddFriendToGroupTargetAndPayload['target']
    private static addFriendPayload?: AddFriendToGroupTargetAndPayload['payload']
    private static leaveGroupTarget?: LeaveGroupTargetAndPayload['target']

    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()

        delete this.createGroupPayload
        delete this.getGroupTarget
        delete this.addFriendTarget
        delete this.addFriendPayload
        delete this.leaveGroupTarget

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

        await this.eventFaker.fakeAddFriendToGroup(({ target, payload }) => {
            this.addFriendTarget = target
            this.addFriendPayload = payload
        })

        await this.eventFaker.fakeLeaveGroup(({ target }) => {
            this.leaveGroupTarget = target
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
        this.assertFriendListCardDoesNotRenderButton('invite')
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
        this.assertFriendListCardRendersButton('invite')
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

        const button = 'invite'
        await vcAssert.assertActionRedirects({
            action: () => this.clickFriendListButton(button),
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

    @test()
    protected static async friendListRendersBackButtonIfLoadingGroupThatIsNotMine() {
        await this.loadWithGroup({ isMine: false })
        this.assertFriendListCardRendersButton('back')
    }

    @test()
    protected static async doesNotRenderBackButtonIfLoadingGroupThatIsMine() {
        await this.loadWithGroup({ isMine: true })
        this.assertFriendListCardDoesNotRenderButton('back')
    }

    @test()
    protected static async backButtonRedirectsToList() {
        await this.loadWithGroup({ isMine: false })

        await vcAssert.assertActionRedirects({
            action: () => this.clickFriendListButton('back'),
            destination: {
                id: 'adventure.list',
            },
            router: this.views.getRouter(),
        })
    }

    @test()
    protected static async toggleFriendInGroupThatIsNotMineRendersConfirm() {
        const confirmVc =
            await this.loadGroupNotMineToggleFriendAndAssertConfirm()
        assert.isEqual(
            confirmVc.options.isDestructive,
            false,
            `The confirm adding friend should not be destructive!`
        )
    }

    @test()
    protected static async confirmingToggleFriendEmitsAddFriendEvent() {
        await this.loadGroupNotMineToggleFriendAndAccept()

        assert.isTruthy(
            this.addFriendTarget,
            `Add friend to group event was not hit`
        )

        assert.isEqualDeep(this.addFriendTarget, {
            groupId: this.groupId,
        })

        assert.isEqualDeep(this.addFriendPayload, {
            friendId: this.friendId,
        })
    }

    @test()
    protected static async shouldNotEmitAddFriendIfDeclinesConfirmation() {
        await this.loadGroupNotMineToggleFriendAndDecline()
        this.assertDidNotEmitAddFriend()
    }

    @test()
    protected static async loadingOtherGroupWithSelectedFriendsDoesNotRenderAlert() {
        const friend = this.eventFaker.seedFriend()
        await this.loadWithGroup({ isMine: false, people: [friend.id] })
    }

    @test()
    protected static async decliningAddFriendRevertsToggle() {
        await this.loadGroupNotMineToggleFriendAndDecline()
        this.assertNoFriendsSelected()
    }

    @test()
    protected static async addingFriendThrowingRendersAlert() {
        await eventFaker.makeEventThrow(
            'adventure.add-friend-to-group::v2022_09_09'
        )

        const confirmVc =
            await this.loadGroupNotMineToggleFriendAndAssertConfirm()

        const alertVc = await vcAssert.assertRendersAlert(this.vc, () =>
            confirmVc.accept()
        )
        await alertVc.hide()
        this.assertNoFriendsSelected()
    }

    @test()
    protected static async friendsAlreadyPartOfGroupNotMineDoNotRenderToggle() {
        const friend = this.eventFaker.seedFriend()
        await this.loadWithGroup({ isMine: false, people: [friend.id] })

        this.assertFriendRowDoesNotRenderToggle()
    }

    @test()
    protected static async togglingSelfInGroupNotMineEmitsLeaveGroupAndRedirectsAway() {
        const confirmVc =
            await this.loadGroupNotMineWithMeSelectedToggleAndAssertConfirm()

        await vcAssert.assertActionRedirects({
            action: () => confirmVc.accept(),
            destination: {
                id: 'adventure.list',
            },
            router: this.views.getRouter(),
        })

        assert.isTrue(
            confirmVc.options.isDestructive,
            `Confirmation should be destructive when removing self from group`
        )
        assert.isEqualDeep(this.leaveGroupTarget, {
            groupId: this.groupId,
        })

        this.assertDidNotEmitAddFriend()
    }

    @test()
    protected static async togglingSelfInGroupNotMineAndDecliningDoesNotEmitLeaveGroup() {
        const confirmVc =
            await this.loadGroupNotMineWithMeSelectedToggleAndAssertConfirm()
        await confirmVc.decline()

        this.assertDidNotEmitLeaveGroup()
    }

    @test()
    protected static async rendersAlertIfLeaveGroupThrows() {
        await eventFaker.makeEventThrow('adventure.leave-group::v2022_09_09')
        const confirmVc =
            await this.loadGroupNotMineWithMeSelectedToggleAndAssertConfirm()
        await vcAssert.assertRendersAlert(this.vc, () => confirmVc.accept())
    }

    @test()
    protected static async toggleHidesAfterAddingPersonToGroupThatIsNotMine() {
        await this.loadGroupNotMineToggleFriendAndAccept()
        this.assertFriendRowDoesNotRenderToggle()
    }

    @test()
    protected static async toggleHidingLeavesRemainderOfCells() {
        const confirmVc =
            await this.loadGroupNotMineToggleFriendAndAssertConfirm()

        await this.assertRowRemovesToggelOnAccept(0, confirmVc)
    }

    @test()
    protected static async toggleHidesInSecondRow() {
        this.eventFaker.seedFriend()
        const friend = this.eventFaker.seedFriend()
        await this.loadWithGroup({ isMine: false })
        const confirmVc = await this.toggleFriendAndAssertConfirm(friend.id)
        await this.assertRowRemovesToggelOnAccept(1, confirmVc)
    }

    private static async assertRowRemovesToggelOnAccept(
        idx: number,
        confirmVc: AssertConfirmViewController
    ) {
        const expected = this.getFriendRow(idx)
        expected.cells.pop()

        await confirmVc.accept()

        this.assertRowEquals(idx, expected)
    }

    private static assertRowEquals(idx: number, expected: ListRow) {
        const actual = this.getFriendRow(idx)
        assert.isEqualDeep(actual, expected)
    }

    private static getFriendRow(idx: number) {
        const row = { ...this.friendListVc.getRows()[idx] }
        row.cells = [...row.cells]
        return row
    }

    private static assertFriendRowDoesNotRenderToggle() {
        listAssert.rowDoesNotRenderToggle(this.friendListVc, 0)
    }

    private static get friendListVc() {
        return this.friendSelectionCardVc.getListVc()
    }

    private static assertDidNotEmitAddFriend() {
        assert.isFalsy(
            this.addFriendTarget,
            `Add friend to group event was hit`
        )
    }

    private static assertDidNotEmitLeaveGroup() {
        assert.isFalsy(
            this.leaveGroupTarget,
            `Should not have emitted leave group`
        )
    }

    private static async loadGroupNotMineWithMeSelectedToggleAndAssertConfirm() {
        await this.loadGroupNotMineWithMeIn()

        const confirmVc = await this.toggleFriendAndAssertConfirm(
            this.fakedPerson.id
        )
        return confirmVc
    }

    private static async loadGroupNotMineWithMeIn() {
        this.eventFaker.seedFriend({ id: this.fakedPerson.id })
        await this.loadWithGroup({
            isMine: false,
            people: [this.fakedPerson.id],
        })
    }

    private static assertNoFriendsSelected() {
        this.assertSelectedFriends([])
    }

    private static get groupId(): string {
        return this.eventFaker.fakedGroups[0].id
    }

    private static get friendId(): string {
        return this.eventFaker.fakedFriends[0].id
    }

    private static async loadGroupNotMineToggleFriendAndAccept() {
        const confirmVc =
            await this.loadGroupNotMineToggleFriendAndAssertConfirm()

        await confirmVc.accept()
    }

    private static async loadGroupNotMineToggleFriendAndDecline() {
        const confirmVc =
            await this.loadGroupNotMineToggleFriendAndAssertConfirm()

        await confirmVc.decline()
    }

    private static async loadGroupNotMineToggleFriendAndAssertConfirm() {
        const friend = await this.loadGroupNotMinWithOneFriend()
        return await this.toggleFriendAndAssertConfirm(friend.id)
    }

    private static async toggleFriendAndAssertConfirm(friendId: string) {
        return await vcAssert.assertRendersConfirm(this.vc, () =>
            this.toggleFriend(friendId)
        )
    }

    private static async loadGroupNotMinWithOneFriend() {
        const friend = this.eventFaker.seedFriend()
        await this.loadWithGroup({ isMine: false })
        return friend
    }

    private static assertFriendListCardDoesNotRenderButton(id: string) {
        buttonAssert.cardDoesNotRenderButton(this.friendSelectionCardVc, id)
    }

    private static assertFriendListCardRendersButton(id: string) {
        buttonAssert.cardRendersButton(this.friendSelectionCardVc, id)
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
        const ids = friends.map((f) => f.id)
        this.assertSelectedFriends(ids)
    }

    private static assertSelectedFriends(ids: string[]) {
        const selected = this.friendSelectionCardVc.getSelectedFriends()
        assert.isEqualDeep(selected, ids)
    }

    private static async loadWithFriends(friends: Friend[]) {
        const group = this.eventFaker.generateListGroupValues({
            people: friends.map((f) => f.id),
        })

        await this.loadWithGroup(group)

        return group
    }

    private static async loadWithGroup(group?: Partial<ListGroup>) {
        const g = this.eventFaker.seedGroup({
            ...this.eventFaker.generateListGroupValues(),
            ...group,
        })
        await this.load({ id: g.id })
        return g
    }

    private static async fillOutFormSubmitAndAssertRedirect() {
        await this.fillOutForm()
        await this.submitAndAssertRedirect()
    }

    private static clickFriendListButton(button: string) {
        return interactor.clickButton(this.friendSelectionCardVc, button)
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

import {
    formAssert,
    interactor,
    listAssert,
    RowValues,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { eventFaker, fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, test } from '@sprucelabs/test-utils'
import { Adventure } from '../../../../adventure.types'
import { PostCardOptions } from '../../../../adventures/posting/PostCard.vc'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'
import { PostTargetAndPayload } from '../../../support/EventFaker'
import FakePostCard from '../../../support/FakePostCard'

@fake.login()
export default class PostCardTest extends AbstractAdventureTest {
    private static vc: FakePostCard

    protected static async beforeEach() {
        await super.beforeEach()
        await this.eventFaker.fakeListGroups()

        this.views.setController('adventure.post-card', FakePostCard)
        this.vc = this.PostCardVc()
    }

    @test()
    protected static async rendersForm() {
        formAssert.cardRendersForm(this.vc)
    }

    @test()
    protected static async isNotBusy() {
        vcAssert.assertCardIsNotBusy(this.vc)
    }

    @test()
    protected static async postFormRendersExpectedFields() {
        this.assertRendersFields(['what', 'when', 'where'])
    }

    @test()
    protected static async submittingFormRendersConfirm() {
        await this.fillOutForm()
        await this.submitAndAssertConfirm()
    }

    @test()
    protected static async confirmingSubmitPostsAdventure() {
        let passedPayload: PostTargetAndPayload['payload'] | undefined
        let passedTarget: PostTargetAndPayload['target'] | undefined

        await this.eventFaker.fakePostAdventure(({ payload, target }) => {
            passedPayload = payload
            passedTarget = target
        })

        const { what, when, where } = await this.fillOutFormSubmitAndAccept()

        assert.isEqualDeep(passedPayload?.adventure, { what, when, where })
        assert.isFalsy(passedTarget, `Should not have a target`)
    }

    @test()
    protected static async passesBackAdventureToOnPost() {
        const adventure = this.eventFaker.generateAdventureValues()
        let passedAdventure: Adventure | undefined

        this.vc = this.PostCardVc({
            onPost: (adventure) => {
                passedAdventure = adventure
            },
        })
        await this.eventFaker.fakePostAdventure(() => {
            return adventure
        })

        await this.fillOutFormSubmitAndAccept()
        assert.isEqualDeep(passedAdventure, adventure)
    }

    @test()
    protected static async rendersAlertWhenFailingToSave() {
        await eventFaker.makeEventThrow('adventure.post::v2022_09_09')
        await vcAssert.assertRendersAlert(this.vc, () =>
            this.fillOutFormSubmitAndAccept()
        )
    }

    @test()
    protected static async cancellingSaveDoesNotSave() {
        let wasHit = false

        await this.eventFaker.fakePostAdventure(() => {
            wasHit = true
        })

        await this.fillOutForm()
        const confirmVc = await this.submitAndAssertConfirm()
        await confirmVc.decline()
        assert.isFalse(wasHit)
    }

    @test()
    protected static async ifPartOfGroupRendersGroupsList() {
        await this.seedGroupAndLoad()
        this.assertRendersGroupsList()
    }

    @test()
    protected static async noGroupDoesNotRenderGroupsList() {
        await this.load()
        assert.doesThrow(() => this.assertRendersGroupsList())
    }

    @test()
    protected static async grousListRendersRowForFirstGroup() {
        await this.seedGroupAndLoad()
        this.assertRendersRowForEachGroup()
    }

    @test()
    protected static async rendersRowForAllGroups() {
        this.seedGroup()
        await this.seedGroupAndLoad()
        this.assertRendersRowForEachGroup()
    }

    @test()
    protected static async rendersFriendsRowInGroupsList() {
        await this.seedGroupAndLoad()
        listAssert.listRendersRow(this.groupListVc, 'friends')
    }

    @test()
    protected static async rendersTogglesForGroupsRows() {
        await this.seedGroupAndLoad()
        this.assertGroupsListRendersRow(this.group1Id)
        this.assertGroupsListRendersRow('friends')
    }

    @test()
    protected static async friendsListIsSelectedByToStart() {
        await this.seedGroupAndLoad()

        this.assertSelectedGroups({
            friends: true,
            [this.group1Id]: undefined,
        })
    }

    @test()
    protected static async selectingGroupDeselectsFriends() {
        await this.seedGroupAndLoad()
        await this.clickToggleInGroupsRow(this.group1Id)
        this.assertSelectedGroups({
            friends: false,
            [this.group1Id]: true,
        })

        await this.clickToggleInGroupsRow('friends')
        this.assertSelectedGroups({
            friends: true,
            [this.group1Id]: false,
        })
    }

    @test('can post and target group 0', 0)
    @test('can post and target group 1', 1)
    protected static async targetsGroupIfSelected(idx: number) {
        let passedTarget: PostTargetAndPayload['target'] | undefined

        await this.eventFaker.fakePostAdventure(({ target }) => {
            passedTarget = target
        })

        this.seedGroup()
        this.seedGroup()
        await this.seedGroupAndLoad()

        const id = this.fakedGroups[idx].id
        await this.clickToggleInGroupsRow(id)
        await this.fillOutFormSubmitAndAccept()

        assert.isEqualDeep(passedTarget, {
            groupId: id,
        })
    }

    @test()
    protected static async selectingFriendDoesNotTargetGroup() {
        await this.seedGroupAndLoad()
        let passedTarget: PostTargetAndPayload['target'] | undefined

        await this.eventFaker.fakePostAdventure(({ target }) => {
            passedTarget = target
        })

        await this.clickToggleInGroupsRow('friends')
        await this.fillOutFormSubmitAndAccept()

        assert.isFalsy(passedTarget, `Should not have a target`)
    }

    private static get group1Id(): string {
        return this.fakedGroups[0].id
    }

    private static assertSelectedGroups(expected: {
        [x: string]: boolean | undefined
        friends: boolean
    }) {
        this.assertGroupsListValues(
            Object.entries(expected).map(([id, isSelected]) => ({
                rowId: id,
                isSelected,
            }))
        )
    }

    private static async clickToggleInGroupsRow(row: string) {
        await interactor.clickToggleInRow(this.groupListVc, row)
    }

    private static assertGroupsListValues(expected: RowValues[]) {
        const values = this.groupListVc.getValues()
        assert.isEqualDeep(values, expected)
    }

    private static assertGroupsListRendersRow(row: string) {
        listAssert.rowRendersToggle(this.groupListVc, row, 'isSelected')
    }

    private static get groupListVc() {
        return this.vc.getGroupsListVc()
    }

    private static assertRendersRowForEachGroup() {
        listAssert.listRendersRows(
            this.groupListVc,
            this.fakedGroups.map((group) => group.id)
        )
    }

    private static get fakedGroups() {
        return this.eventFaker.fakedGroups
    }

    private static async seedGroupAndLoad() {
        this.seedGroup()
        await this.load()
    }

    private static seedGroup() {
        this.eventFaker.seedGroup()
    }

    private static assertRendersGroupsList() {
        listAssert.cardRendersList(this.vc, 'groups')
    }

    private static async load() {
        await this.vc.load()
    }

    private static async fillOutFormSubmitAndAccept() {
        const adventure = await this.fillOutForm()
        await this.submitAndConfirm()
        return adventure
    }

    private static async fillOutForm() {
        return this.vc.fillWithRandomValues()
    }

    private static async submitAndConfirm() {
        return this.vc.submitAndConfirm()
    }

    private static async submitAndAssertConfirm() {
        return this.vc.submitAndAssertConfirm()
    }

    private static PostCardVc(
        options?: Partial<PostCardOptions>
    ): FakePostCard {
        return this.views.Controller('adventure.post-card', {
            ...options,
        }) as FakePostCard
    }

    private static assertRendersFields(expected: AdventureKey[]) {
        formAssert.formRendersFields(this.formVc, expected)
    }

    private static get formVc() {
        return this.vc.getFormVc()
    }
}

type AdventureKey = keyof Adventure

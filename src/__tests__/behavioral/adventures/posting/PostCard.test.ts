import {
    formAssert,
    interactor,
    listAssert,
    RowValues,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { eventFaker, fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, test, suite } from '@sprucelabs/test-utils'
import { Adventure } from '../../../../adventure.types'
import { PostCardOptions } from '../../../../adventures/posting/PostCard.vc'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'
import { PostTargetAndPayload } from '../../../support/EventFaker'
import FakePostCard from '../../../support/FakePostCard'

@fake.login()
@suite()
export default class PostCardTest extends AbstractAdventureTest {
    private vc!: FakePostCard

    protected async beforeEach() {
        await super.beforeEach()
        await this.eventFaker.fakeListGroups()

        this.views.setController('adventure.post-card', FakePostCard)
        this.vc = this.PostCardVc()
    }

    @test()
    protected async rendersForm() {
        formAssert.cardRendersForm(this.vc)
    }

    @test()
    protected async isNotBusy() {
        vcAssert.assertCardIsNotBusy(this.vc)
    }

    @test()
    protected async postFormRendersExpectedFields() {
        this.assertRendersFields(['what', 'when', 'where'])
    }

    @test()
    protected async submittingFormRendersConfirm() {
        await this.fillOutForm()
        await this.submitAndAssertConfirm()
    }

    @test()
    protected async confirmingSubmitPostsAdventure() {
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
    protected async passesBackAdventureToOnPost() {
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
    protected async rendersAlertWhenFailingToSave() {
        await eventFaker.makeEventThrow('adventure.post::v2022_09_09')
        await vcAssert.assertRendersAlert(this.vc, () =>
            this.fillOutFormSubmitAndAccept()
        )
    }

    @test()
    protected async cancellingSaveDoesNotSave() {
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
    protected async ifPartOfGroupRendersGroupsList() {
        await this.seedGroupAndLoad()
        this.assertRendersGroupsList()
    }

    @test()
    protected async noGroupDoesNotRenderGroupsList() {
        await this.load()
        assert.doesThrow(() => this.assertRendersGroupsList())
    }

    @test()
    protected async grousListRendersRowForFirstGroup() {
        await this.seedGroupAndLoad()
        this.assertRendersRowForEachGroup()
    }

    @test()
    protected async rendersRowForAllGroups() {
        this.seedGroup()
        await this.seedGroupAndLoad()
        this.assertRendersRowForEachGroup()
    }

    @test()
    protected async rendersFriendsRowInGroupsList() {
        await this.seedGroupAndLoad()
        listAssert.listRendersRow(this.groupListVc, 'friends')
    }

    @test()
    protected async rendersTogglesForGroupsRows() {
        await this.seedGroupAndLoad()
        this.assertGroupsListRendersRow(this.group1Id)
        this.assertGroupsListRendersRow('friends')
    }

    @test()
    protected async friendsListIsSelectedByToStart() {
        await this.seedGroupAndLoad()

        this.assertSelectedGroups({
            friends: true,
            [this.group1Id]: undefined,
        })
    }

    @test()
    protected async selectingGroupDeselectsFriends() {
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
    protected async targetsGroupIfSelected(idx: number) {
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
    protected async selectingFriendDoesNotTargetGroup() {
        await this.seedGroupAndLoad()
        let passedTarget: PostTargetAndPayload['target'] | undefined

        await this.eventFaker.fakePostAdventure(({ target }) => {
            passedTarget = target
        })

        await this.clickToggleInGroupsRow('friends')
        await this.fillOutFormSubmitAndAccept()

        assert.isFalsy(passedTarget, `Should not have a target`)
    }

    private get group1Id(): string {
        return this.fakedGroups[0].id
    }

    private assertSelectedGroups(expected: {
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

    private async clickToggleInGroupsRow(row: string) {
        await interactor.clickToggleInRow(this.groupListVc, row)
    }

    private assertGroupsListValues(expected: RowValues[]) {
        const values = this.groupListVc.getValues()
        assert.isEqualDeep(values, expected)
    }

    private assertGroupsListRendersRow(row: string) {
        listAssert.rowRendersToggle(this.groupListVc, row, 'isSelected')
    }

    private get groupListVc() {
        return this.vc.getGroupsListVc()
    }

    private assertRendersRowForEachGroup() {
        listAssert.listRendersRows(
            this.groupListVc,
            this.fakedGroups.map((group) => group.id)
        )
    }

    private get fakedGroups() {
        return this.eventFaker.fakedGroups
    }

    private async seedGroupAndLoad() {
        this.seedGroup()
        await this.load()
    }

    private seedGroup() {
        this.eventFaker.seedGroup()
    }

    private assertRendersGroupsList() {
        listAssert.cardRendersList(this.vc, 'groups')
    }

    private async load() {
        await this.vc.load()
    }

    private async fillOutFormSubmitAndAccept() {
        const adventure = await this.fillOutForm()
        await this.submitAndConfirm()
        return adventure
    }

    private async fillOutForm() {
        return this.vc.fillWithRandomValues()
    }

    private async submitAndConfirm() {
        return this.vc.submitAndConfirm()
    }

    private async submitAndAssertConfirm() {
        return this.vc.submitAndAssertConfirm()
    }

    private PostCardVc(options?: Partial<PostCardOptions>): FakePostCard {
        return this.views.Controller('adventure.post-card', {
            ...options,
        }) as FakePostCard
    }

    private assertRendersFields(expected: AdventureKey[]) {
        formAssert.formRendersFields(this.formVc, expected)
    }

    private get formVc() {
        return this.vc.getFormVc()
    }
}

type AdventureKey = keyof Adventure

import {
    activeRecordCardAssert,
    buttonAssert,
    interactor,
    listAssert,
    MockActiveRecordCard,
    RedirectDestination,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { eventFaker, fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, test } from '@sprucelabs/test-utils'
import { ListGroup } from '../../../../adventure.types'
import GroupListCardViewController from '../../../../groups/listing/GroupListCard.vc'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'
import {
    DeleteGroupTargetAndPayload,
    LeaveGroupTargetAndPayload,
} from '../../../support/EventFaker'

@fake.login()
export default class GroupListCardTest extends AbstractAdventureTest {
    private static vc: SpyGroupList
    private static fakedGroups: ListGroup[]
    private static passedDeleteTarget?: DeleteGroupTargetAndPayload['target']

    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()

        this.fakedGroups = []

        delete this.passedDeleteTarget

        this.views.setController('adventure.group-list-card', SpyGroupList)
        this.vc = this.views.Controller(
            'adventure.group-list-card',
            {}
        ) as SpyGroupList

        await this.eventFaker.fakeListGroups(() => {
            return this.fakedGroups
        })

        await this.eventFaker.fakeDeleteGroup(({ target }) => {
            this.passedDeleteTarget = target
        })
    }

    @test()
    protected static async rendersAList() {
        activeRecordCardAssert.rendersAsActiveRecordCard(this.vc)
    }

    @test()
    protected static async hasClientSidePaging() {
        activeRecordCardAssert.pagingOptionsEqual(this.activeRecordCardVc, {
            pageSize: 5,
            shouldPageClientSide: true,
        })
    }

    @test()
    protected static async rendersGroups() {
        const group = this.seedGroup()
        await this.load()
        this.activeRecordCardVc.assertRendersRow(group.id)
    }

    @test()
    protected static async rendersDeleteButtonInRow() {
        this.seedGroup()
        await this.load()
        listAssert.rowRendersButton(this.listVc, 0, 'delete')
    }

    @test()
    protected static async cardRendersAddButton() {
        buttonAssert.cardRendersButton(this.vc, 'add')
    }

    @test()
    protected static async clickingAddRedirectsToAddGroup() {
        await this.load()

        await this.assertRedirects(
            {
                id: 'adventure.group',
            },
            () => interactor.clickButton(this.vc, 'add')
        )
    }

    @test()
    protected static async clickingRowRedirectsToGroupDetails() {
        this.seedGroup()
        await this.load()
        await this.assertRedirects(
            {
                id: 'adventure.group',
                args: {
                    id: this.fakedGroups[0].id,
                },
            },
            () => interactor.clickRow(this.listVc, 0)
        )
    }

    @test()
    protected static async clickingDeleteRendersConfirmation() {
        await this.seedGroupLoadClickDeleteAndAssertConfirm()
    }

    @test()
    protected static async confirmingDeleteEmitsDeleteEvent() {
        await this.seedGroupLoadClickDeleteAndAccept()

        assert.isEqualDeep(this.passedDeleteTarget, {
            groupId: this.fakedGroups[0].id,
        })
    }

    @test()
    protected static async cancellingDeleteDoesNotEmitDeleteEvent() {
        const confirmVc = await this.seedGroupLoadClickDeleteAndAssertConfirm()
        await confirmVc.decline()
        assert.isFalsy(this.passedDeleteTarget)
    }

    @test()
    protected static async differentConfrmDeleteMessageIfNotOwnGroup() {
        this.seedGroup({ isMine: false })
        await this.loadClickDeleteAndAssertConfirmationTitle(
            'Leave this group?'
        )
    }

    @test()
    protected static async differentConfrmDeleteMessageIfOwnGroup() {
        this.seedGroup()
        await this.loadClickDeleteAndAssertConfirmationTitle(
            'Delete this group?'
        )
    }

    @test()
    protected static async rendersAlertIfDeleteThrows() {
        await eventFaker.makeEventThrow('adventure.delete-group::v2022_09_09')
        await vcAssert.assertRendersAlert(this.vc, () =>
            this.seedGroupLoadClickDeleteAndAccept()
        )
    }

    @test()
    protected static async confirmDeleteOnGroupNotMineEmitsLeaveGroupEvent() {
        let passedTarget: LeaveGroupTargetAndPayload['target'] | undefined

        await this.eventFaker.fakeLeaveGroup(({ target }) => {
            passedTarget = target
        })

        await this.seedGroupLoadClickDeleteAndAccept({ isMine: false })
        assert.isFalsy(this.passedDeleteTarget)
        assert.isEqualDeep(passedTarget, {
            groupId: this.fakedGroups[0].id,
        })
    }

    @test()
    protected static async leaveGroupFailingRendersAlert() {
        await eventFaker.makeEventThrow('adventure.leave-group::v2022_09_09')
        await vcAssert.assertRendersAlert(this.vc, () =>
            this.seedGroupLoadClickDeleteAndAccept({ isMine: false })
        )
    }

    @test()
    protected static async deletingOnlyGroupRefreshesh() {
        const hits: string[] = []

        await this.eventFaker.fakeDeleteGroup(() => {
            hits.push('emit-delete-group')
        })

        this.activeRecordCardVc.refresh = async () => {
            hits.push('refresh')
        }

        await this.load()
        await this.seedGroupLoadClickDeleteAndAccept()
        assert.isEqualDeep(hits, ['emit-delete-group', 'refresh'])
    }

    private static async seedGroupLoadClickDeleteAndAccept(
        group?: Partial<ListGroup>
    ) {
        const confirmVc =
            await this.seedGroupLoadClickDeleteAndAssertConfirm(group)

        await confirmVc.accept()
    }

    private static async loadClickDeleteAndAssertConfirmationTitle(
        expected: string
    ) {
        const confirmVc = await this.seedGroupLoadClickDeleteAndAssertConfirm()
        assert.isEqual(confirmVc.options.title, expected)
    }

    private static async seedGroupLoadClickDeleteAndAssertConfirm(
        group?: Partial<ListGroup>
    ) {
        await this.seedGroupAndLoad(group)
        return await vcAssert.assertRendersConfirm(this.vc, () =>
            this.clickDeleteOnFirstGroup()
        )
    }

    private static clickDeleteOnFirstGroup(): any {
        return interactor.clickButtonInRow(this.listVc, 0, 'delete')
    }

    private static async seedGroupAndLoad(group?: Partial<ListGroup>) {
        this.seedGroup(group)
        await this.load()
    }

    private static async assertRedirects(
        destination: RedirectDestination,
        action: () => Promise<void>
    ) {
        await vcAssert.assertActionRedirects({
            action,
            destination,
            router: this.views.getRouter(),
        })
    }

    private static get activeRecordCardVc() {
        return this.vc.getActiveRecordCard()
    }

    private static async load() {
        await this.views.load(this.vc)
    }

    private static seedGroup(group?: Partial<ListGroup>) {
        const g = this.eventFaker.generateListGroupValues(group)
        this.fakedGroups.push(g)
        return g
    }

    private static get listVc() {
        return this.activeRecordCardVc.getListVcs()[0]
    }
}

class SpyGroupList extends GroupListCardViewController {
    public getActiveRecordCard() {
        return this.activeRecordCardVc as MockActiveRecordCard
    }
}

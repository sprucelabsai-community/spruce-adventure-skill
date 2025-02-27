import {
    activeRecordCardAssert,
    buttonAssert,
    interactor,
    listAssert,
    MockActiveRecordCard,
    RouterDestination,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { eventFaker, fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, test, suite } from '@sprucelabs/test-utils'
import { ListGroup } from '../../../../adventure.types'
import GroupListCardViewController from '../../../../groups/listing/GroupListCard.vc'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'
import {
    DeleteGroupTargetAndPayload,
    LeaveGroupTargetAndPayload,
} from '../../../support/EventFaker'

@fake.login()
@suite()
export default class GroupListCardTest extends AbstractAdventureTest {
    private vc!: SpyGroupList
    private fakedGroups!: ListGroup[]
    private passedDeleteTarget?: DeleteGroupTargetAndPayload['target']

    protected async beforeEach(): Promise<void> {
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
    protected async rendersAList() {
        activeRecordCardAssert.rendersAsActiveRecordCard(this.vc)
    }

    @test()
    protected async hasClientSidePaging() {
        activeRecordCardAssert.pagingOptionsEqual(this.activeRecordCardVc, {
            pageSize: 5,
            shouldPageClientSide: true,
        })
    }

    @test()
    protected async rendersGroups() {
        const group = this.seedGroup()
        await this.load()
        this.activeRecordCardVc.assertRendersRow(group.id)
    }

    @test()
    protected async rendersDeleteButtonInRow() {
        this.seedGroup()
        await this.load()
        listAssert.rowRendersButton(this.listVc, 0, 'delete')
    }

    @test()
    protected async cardRendersAddButton() {
        buttonAssert.cardRendersButton(this.vc, 'add')
    }

    @test()
    protected async clickingAddRedirectsToAddGroup() {
        await this.load()

        await this.assertRedirects(
            {
                id: 'adventure.group',
            },
            () => interactor.clickButton(this.vc, 'add')
        )
    }

    @test()
    protected async clickingRowRedirectsToGroupDetails() {
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
    protected async clickingDeleteRendersConfirmation() {
        await this.seedGroupLoadClickDeleteAndAssertConfirm()
    }

    @test()
    protected async confirmingDeleteEmitsDeleteEvent() {
        await this.seedGroupLoadClickDeleteAndAccept()

        assert.isEqualDeep(this.passedDeleteTarget, {
            groupId: this.fakedGroups[0].id,
        })
    }

    @test()
    protected async cancellingDeleteDoesNotEmitDeleteEvent() {
        const confirmVc = await this.seedGroupLoadClickDeleteAndAssertConfirm()
        await confirmVc.decline()
        assert.isFalsy(this.passedDeleteTarget)
    }

    @test()
    protected async differentConfrmDeleteMessageIfNotOwnGroup() {
        this.seedGroup({ isMine: false })
        await this.loadClickDeleteAndAssertConfirmationTitle(
            'Leave this group?'
        )
    }

    @test()
    protected async differentConfrmDeleteMessageIfOwnGroup() {
        this.seedGroup()
        await this.loadClickDeleteAndAssertConfirmationTitle(
            'Delete this group?'
        )
    }

    @test()
    protected async rendersAlertIfDeleteThrows() {
        await eventFaker.makeEventThrow('adventure.delete-group::v2022_09_09')
        await vcAssert.assertRendersAlert(this.vc, () =>
            this.seedGroupLoadClickDeleteAndAccept()
        )
    }

    @test()
    protected async confirmDeleteOnGroupNotMineEmitsLeaveGroupEvent() {
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
    protected async leaveGroupFailingRendersAlert() {
        await eventFaker.makeEventThrow('adventure.leave-group::v2022_09_09')
        await vcAssert.assertRendersAlert(this.vc, () =>
            this.seedGroupLoadClickDeleteAndAccept({ isMine: false })
        )
    }

    @test()
    protected async deletingOnlyGroupRefreshesh() {
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

    private async seedGroupLoadClickDeleteAndAccept(
        group?: Partial<ListGroup>
    ) {
        const confirmVc =
            await this.seedGroupLoadClickDeleteAndAssertConfirm(group)

        await confirmVc.accept()
    }

    private async loadClickDeleteAndAssertConfirmationTitle(expected: string) {
        const confirmVc = await this.seedGroupLoadClickDeleteAndAssertConfirm()
        assert.isEqual(confirmVc.options.title, expected)
    }

    private async seedGroupLoadClickDeleteAndAssertConfirm(
        group?: Partial<ListGroup>
    ) {
        await this.seedGroupAndLoad(group)
        return await vcAssert.assertRendersConfirm(this.vc, () =>
            this.clickDeleteOnFirstGroup()
        )
    }

    private clickDeleteOnFirstGroup(): any {
        return interactor.clickButtonInRow(this.listVc, 0, 'delete')
    }

    private async seedGroupAndLoad(group?: Partial<ListGroup>) {
        this.seedGroup(group)
        await this.load()
    }

    private async assertRedirects(
        destination: RouterDestination,
        action: () => Promise<void>
    ) {
        await vcAssert.assertActionRedirects({
            action,
            destination,
            router: this.views.getRouter(),
        })
    }

    private get activeRecordCardVc() {
        return this.vc.getActiveRecordCard()
    }

    private async load() {
        await this.views.load(this.vc)
    }

    private seedGroup(group?: Partial<ListGroup>) {
        const g = this.eventFaker.generateListGroupValues(group)
        this.fakedGroups.push(g)
        return g
    }

    private get listVc() {
        return this.activeRecordCardVc.getListVcs()[0]
    }
}

class SpyGroupList extends GroupListCardViewController {
    public getActiveRecordCard() {
        return this.activeRecordCardVc as MockActiveRecordCard
    }
}

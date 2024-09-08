import {
    activeRecordCardAssert,
    buttonAssert,
    interactor,
    listAssert,
    MockActiveRecordCard,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test } from '@sprucelabs/test-utils'
import { ListGroup } from '../../../adventure.types'
import GroupListCardViewController from '../../../groups/listing/GroupListCard.vc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'

@fake.login()
export default class GroupListCardTest extends AbstractAdventureTest {
    private static vc: SpyGroupList
    private static fakedGroups: ListGroup[]

    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()

        this.fakedGroups = []

        this.views.setController('adventure.group-list-card', SpyGroupList)
        this.vc = this.views.Controller(
            'adventure.group-list-card',
            {}
        ) as SpyGroupList

        await this.eventFaker.fakeListGroups(() => {
            return this.fakedGroups
        })
    }

    @test()
    protected static async rendersAList() {
        activeRecordCardAssert.rendersAsActiveRecordCard(this.vc)
    }

    @test()
    protected static async hasClientSidePaging() {
        activeRecordCardAssert.assertPagingOptionsEqual(
            this.activeRecordCardVc,
            {
                pageSize: 5,
                shouldPageClientSide: true,
            }
        )
    }

    @test()
    protected static async rendersGroups() {
        const group = this.addFakedGroup()
        await this.load()
        this.activeRecordCardVc.assertRendersRow(group.id)
    }

    @test()
    protected static async rendersDeleteButtonInRow() {
        this.addFakedGroup()
        await this.load()
        const listVc = this.activeRecordCardVc.getListVcs()[0]
        listAssert.rowRendersButton(listVc, 0, 'delete')
    }

    @test()
    protected static async cardRendersAddButton() {
        buttonAssert.cardRendersButton(this.vc, 'add')
    }

    @test()
    protected static async clickingAddRedirectsToAddGroup() {
        await this.load()

        await vcAssert.assertActionRedirects({
            action: () => interactor.clickButton(this.vc, 'add'),
            destination: {
                id: 'adventure.group',
            },
            router: this.views.getRouter(),
        })
    }

    private static get activeRecordCardVc() {
        return this.vc.getActiveRecordCard()
    }

    private static async load() {
        await this.vc.load(this.views.getRouter())
    }

    private static addFakedGroup() {
        const group = this.eventFaker.generateListGroupValues()
        this.fakedGroups.push(group)
        return group
    }
}

class SpyGroupList extends GroupListCardViewController {
    public getActiveRecordCard() {
        return this.activeRecordCardVc as MockActiveRecordCard
    }
}

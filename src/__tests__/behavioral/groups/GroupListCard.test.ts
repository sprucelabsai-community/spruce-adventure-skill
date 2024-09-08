import {
    activeRecordCardAssert,
    buttonAssert,
    listAssert,
    MockActiveRecordCard,
} from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test } from '@sprucelabs/test-utils'
import { Group } from '../../../adventure.types'
import GroupListCardViewController from '../../../groups/GroupListCard.vc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'

@fake.login()
export default class GroupListCardTest extends AbstractAdventureTest {
    private static vc: SpyGroupList
    private static fakedGroups: Group[]

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
        activeRecordCardAssert.isActiveRecordCard(this.vc)
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

    private static get activeRecordCardVc() {
        return this.vc.getActiveRecordCard()
    }

    private static async load() {
        await this.vc.load()
    }

    private static addFakedGroup() {
        const group: Group = this.eventFaker.generateGroupValues()
        this.fakedGroups.push(group)
        return group
    }
}

class SpyGroupList extends GroupListCardViewController {
    public getActiveRecordCard() {
        return this.activeRecordCardVc as MockActiveRecordCard
    }
}

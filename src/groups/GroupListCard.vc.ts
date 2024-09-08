import {
    AbstractViewController,
    ViewControllerOptions,
    Card,
    buildActiveRecordCard,
    ActiveRecordCardViewController,
    ListRow,
} from '@sprucelabs/heartwood-view-controllers'
import { Group } from '../adventure.types'

export default class GroupListCardViewController extends AbstractViewController<Card> {
    public static id = 'group-list-card'
    protected activeRecordCardVc: ActiveRecordCardViewController

    public constructor(options: ViewControllerOptions) {
        super(options)

        this.activeRecordCardVc = this.ActiveRecordCardVc()
    }

    private ActiveRecordCardVc(): ActiveRecordCardViewController {
        return this.Controller(
            'active-record-card',
            buildActiveRecordCard({
                header: {
                    title: 'Adventure Groups',
                    subtitle:
                        'Create a group based on interests (or whatever) and invite just them to your next adventure!',
                },
                eventName: 'adventure.list-groups::v2022_09_09',
                rowTransformer: this.renderRow.bind(this),
                responseKey: 'groups',
                paging: {
                    pageSize: 5,
                    shouldPageClientSide: true,
                },
                footer: {
                    buttons: [
                        {
                            id: 'add',
                            label: 'Create Group',
                            type: 'primary',
                        },
                    ],
                },
            })
        )
    }

    private renderRow(group: Group) {
        return {
            id: group.id,
            cells: [
                {
                    text: { content: group.title },
                    subText: { content: group.description },
                },
                {
                    button: {
                        id: 'delete',
                        type: 'destructive',
                        lineIcon: 'delete',
                    },
                },
            ],
        } as ListRow
    }

    public async load() {
        await this.activeRecordCardVc.load()
    }

    public render() {
        return this.activeRecordCardVc.render()
    }
}

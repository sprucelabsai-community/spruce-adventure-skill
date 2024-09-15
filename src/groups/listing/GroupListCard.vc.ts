import {
    AbstractViewController,
    ViewControllerOptions,
    Card,
    buildActiveRecordCard,
    ActiveRecordCardViewController,
    ListRow,
    Router,
} from '@sprucelabs/heartwood-view-controllers'
import { ListGroup } from '../../adventure.types'

export default class GroupListCardViewController extends AbstractViewController<Card> {
    public static id = 'group-list-card'
    protected activeRecordCardVc: ActiveRecordCardViewController
    private router?: Router

    public constructor(options: ViewControllerOptions) {
        super(options)
        this.activeRecordCardVc = this.ActiveRecordCardVc()
    }

    private ActiveRecordCardVc(): ActiveRecordCardViewController {
        return this.Controller(
            'active-record-card',
            buildActiveRecordCard({
                header: {
                    title: 'Adventure Groups! ⚒️',
                    subtitle:
                        'Here are groups you can invite on adventures! Anyone who is part of a group can invite everyone else in that group on adventures, too!',
                },
                columnWidths: ['fill'],
                noResultsRow: {
                    height: 'content',
                    cells: [
                        {
                            text: {
                                content: `You haven't created or been invited to any groups yet!`,
                            },
                        },
                    ],
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
                            onClick: this.handleClickAdd.bind(this),
                        },
                    ],
                },
            })
        )
    }

    private async handleClickAdd() {
        await this.router?.redirect('adventure.group')
    }

    private renderRow(group: ListGroup) {
        return {
            id: group.id,
            onClick: async () => {
                await this.handleClickRow(group.id)
            },
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
                        onClick: () => this.handleClickDelete(group),
                    },
                },
            ],
        } as ListRow
    }

    private async handleClickDelete(group: ListGroup) {
        const { id, isMine } = group

        const didAccept = await this.confirm({
            title: isMine ? 'Delete this group?' : 'Leave this group?',
            isDestructive: true,
        })

        if (!didAccept) {
            return
        }

        try {
            await this.emit(id, isMine)
            await this.activeRecordCardVc.refresh()
        } catch (err: any) {
            this.log.error('Failed to delete group', err)
            await this.alert({
                title: 'Failed to delete group',
                message: err.message,
            })
        }
    }

    private async emit(groupId: string, isMine: boolean) {
        if (!isMine) {
            const client = await this.connectToApi()
            await client.emitAndFlattenResponses(
                'adventure.leave-group::v2022_09_09',
                {
                    target: {
                        groupId,
                    },
                }
            )
        } else {
            const client = await this.connectToApi()
            await client.emitAndFlattenResponses(
                'adventure.delete-group::v2022_09_09',
                {
                    target: {
                        groupId,
                    },
                }
            )
        }
    }

    private async handleClickRow(groupId: string) {
        await this.router?.redirect('adventure.group', { id: groupId })
    }

    public async load(options: { router: Router }) {
        const { router } = options
        this.router = router
        await this.activeRecordCardVc.load()
    }

    public render() {
        return this.activeRecordCardVc.render()
    }
}

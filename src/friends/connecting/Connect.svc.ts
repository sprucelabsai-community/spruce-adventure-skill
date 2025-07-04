import {
    AbstractSkillViewController,
    ActiveRecordCardViewController,
    buildActiveRecordCard,
    buildSkillViewLayout,
    ListCell,
    ListRow,
    SkillView,
    SkillViewControllerLoadOptions,
    ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { Friend } from '../../adventure.types'
import { AVATAR_PLACEHOLDER } from '../../root/constants'

export default class ConnectSkillViewController extends AbstractSkillViewController {
    public static id = 'connect'
    protected cardVc: ActiveRecordCardViewController

    public constructor(options: ViewControllerOptions) {
        super(options)

        this.cardVc = this.Controller(
            'active-record-card',
            buildActiveRecordCard({
                id: 'pending',
                eventName: 'adventure.list-friends::v2022_09_09',
                responseKey: 'friends',
                rowTransformer: this.renderPendingRow.bind(this),
                payload: {
                    filter: 'pending',
                },
            })
        )
    }

    private renderPendingRow(friend: Friend): ListRow {
        const buttonCells: ListCell[] = []

        if (friend.inviteSender === 'me') {
            buttonCells.push({
                button: {
                    id: 'withdraw',
                    label: 'Withdraw',
                    type: 'destructive',
                },
            })
        } else {
            buttonCells.push(
                ...([
                    {
                        button: {
                            id: 'decline',
                            label: 'Decline',
                            type: 'destructive',
                        },
                    },
                    {
                        button: {
                            id: 'accept',
                            type: 'primary',
                            label: 'Accept',
                        },
                    },
                ] as ListCell[])
            )
        }

        return {
            id: friend.id,
            cells: [
                {
                    avatars: friend.avatar
                        ? [friend.avatar.mUri]
                        : [AVATAR_PLACEHOLDER],
                },
                {
                    text: {
                        content: friend.casualName,
                    },
                },
                ...buttonCells,
            ],
        }
    }

    public async load({
        router,
        args,
    }: SkillViewControllerLoadOptions<ConnectSkillViewArgs>) {
        if (args.connection) {
            await this.acceptConnection(args.connection)
            await router.redirect('adventure.root')
            return
        }
        await this.cardVc.load()
    }

    private async acceptConnection(id: string) {
        const client = await this.connectToApi()
        await client.emitAndFlattenResponses(
            'adventure.accept-connection::v2022_09_09',
            {
                target: {
                    connectionId: id,
                },
            }
        )
    }

    public render(): SkillView {
        return {
            layouts: [
                buildSkillViewLayout('one-col', {
                    cards: [this.cardVc.render()],
                }),
            ],
        }
    }
}

export interface ConnectSkillViewArgs {
    connection?: string
    group?: string
}

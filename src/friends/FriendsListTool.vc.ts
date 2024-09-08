import {
    AbstractViewController,
    ActiveRecordCardViewController,
    buildActiveRecordCard,
    Button,
    Card,
    CardHeader,
    ListRow,
    Router,
    SkillViewControllerLoadOptions,
    ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { buildRouteToCreateInvite } from '@sprucelabs/spruce-invite-utils'
import { Friend } from '../adventure.types'
import { AVATAR_PLACEHOLDER } from '../root/constants'

export default class FriendsListToolViewController extends AbstractViewController<Card> {
    public static id = 'friends-list-tool'
    protected activeCardVc: ActiveRecordCardViewController
    private router!: Router

    public constructor(options: ViewControllerOptions & FriendsListOptions) {
        super(options)
        const { buttons, header } = options

        this.activeCardVc = this.ActiveRecordVc({ buttons, header })
    }

    private ActiveRecordVc(options: {
        buttons?: Button[]
        header?: CardHeader
    }): ActiveRecordCardViewController {
        const { buttons, header } = options

        return this.Controller(
            'active-record-card',
            buildActiveRecordCard({
                eventName: 'adventure.list-friends::v2022_09_09',
                rowTransformer: this.renderRow.bind(this),
                responseKey: 'friends',
                header: header ?? {
                    title: 'Adventure Friends!!',
                    subtitle:
                        'These are the friends that get messaged everytime you post an adventure! ⚔️',
                },
                noResultsRow: {
                    height: 'content',
                    cells: [
                        {
                            text: {
                                content: `I have not met any of your friends! Lets invite some now! 👇`,
                            },
                        },
                    ],
                },
                paging: {
                    pageSize: 5,
                    shouldPageClientSide: true,
                },
                footer: {
                    buttons: [
                        {
                            id: 'invite',
                            label: 'Invite a friend!',
                            type: 'primary',
                            onClick: this.handleClickInvite.bind(this),
                        },
                        ...(buttons ?? []),
                    ],
                },
            })
        )
    }

    private async handleClickInvite() {
        this.activeCardVc.setIsBusy(true)
        const client = await this.connectToApi()
        const [{ connectionId }] = await client.emitAndFlattenResponses(
            'adventure.create-connection::v2022_09_09'
        )
        const [id, args] = buildRouteToCreateInvite({
            destinationAfterCreate: {
                id: 'adventure.root',
            },
            shouldAllowOrganizationSelection: false,
            destinationAfterAccept: {
                id: 'adventure.connect',
                args: {
                    connection: connectionId,
                },
            },
        })
        await this.router.redirect(id as any, args)
        this.activeCardVc.setIsBusy(false)
    }

    private renderRow(friend: Friend): ListRow {
        return {
            id: friend.id,
            cells: [
                {
                    avatars: friend.avatar?.mUri
                        ? [friend.avatar.mUri]
                        : [AVATAR_PLACEHOLDER],
                },
                {
                    text: {
                        content: friend.casualName,
                    },
                },
            ],
        }
    }

    public async load({
        router,
        onNoFriends,
    }: Pick<SkillViewControllerLoadOptions, 'router'> & {
        onNoFriends?: () => void
    }) {
        await this.activeCardVc.load()
        this.router = router
        if (this.activeCardVc.getRecords().length === 0) {
            onNoFriends?.()
        }
    }

    public render() {
        return this.activeCardVc.render()
    }
}

interface FriendsListOptions {
    buttons?: Button[]
    header?: CardHeader
}

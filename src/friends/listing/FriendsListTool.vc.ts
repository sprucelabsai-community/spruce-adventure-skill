import {
    AbstractViewController,
    ActiveRecordCardViewController,
    Authenticator,
    buildActiveRecordCard,
    Button,
    Card,
    CardFooter,
    CardHeader,
    ListCell,
    ListRow,
    Router,
    ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { buildRouteToCreateInvite } from '@sprucelabs/spruce-invite-utils'
import { Friend } from '../../adventure.types'
import { AVATAR_PLACEHOLDER } from '../../root/constants'

export default class FriendsListToolViewController extends AbstractViewController<Card> {
    public static id = 'friends-list-tool'
    protected activeCardVc: ActiveRecordCardViewController
    private router!: Router
    private shouldAllowFriendSelection: boolean
    private groupId?: string
    private authenticator!: Authenticator

    public constructor(options: ViewControllerOptions & FriendsListOptions) {
        super(options)

        const { shouldAllowFriendSelection } = options
        this.shouldAllowFriendSelection = shouldAllowFriendSelection ?? false
        this.activeCardVc = this.ActiveRecordVc(options)
    }

    private ActiveRecordVc(
        options: FriendsListOptions
    ): ActiveRecordCardViewController {
        const { buttons, header, id, shouldAllowInvite = true } = options

        return this.Controller(
            'active-record-card',
            buildActiveRecordCard({
                id,
                eventName: 'adventure.list-friends::v2022_09_09',
                rowTransformer: this.renderRow.bind(this),
                columnWidths: ['content', 'fill'],
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
                footer: this.renderFooter(shouldAllowInvite, buttons),
            })
        )
    }

    public enableInvite() {
        this.activeCardVc.setFooter(this.renderFooter(true, []))
    }

    private renderFooter(shouldAllowInvite: boolean, buttons?: Button[]) {
        const renderedButtons: Button[] = this.renderFooterButtons(
            shouldAllowInvite,
            buttons
        )

        let footer: CardFooter | null = null

        if (renderedButtons.length > 0) {
            footer = {
                buttons: renderedButtons,
            }
        }
        return footer
    }

    private renderFooterButtons(
        shouldAllowInvite: boolean,
        buttons?: Button[]
    ) {
        const renderedButtons: Button[] = []

        if (shouldAllowInvite) {
            renderedButtons.push({
                id: 'invite',
                label: this.groupId
                    ? 'Invite a friend to this group!'
                    : 'Invite a friend!',
                type: 'primary',
                onClick: this.handleClickInvite.bind(this),
            })
        }

        if (buttons) {
            renderedButtons.push(...buttons)
        }
        return renderedButtons
    }

    public getSelectedFriends() {
        const values = this.activeCardVc.getValues()
        return values
            .filter((v) => !!v.isSelected)
            .map((value) => value.rowId)
            .filter(Boolean) as string[]
    }

    public async setSelectedFriends(ids: string[]) {
        for (const id of ids) {
            await this.activeCardVc.setValue(id, 'isSelected', true)
        }
    }

    private async handleClickInvite() {
        this.activeCardVc.setIsBusy(true)

        const client = await this.connectToApi()

        const [{ connectionId }] = await client.emitAndFlattenResponses(
            'adventure.create-connection::v2022_09_09',
            {
                target: {
                    groupId: this.groupId,
                },
            }
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

        if (this.groupId) {
            args.destinationAfterAccept.args!.group = this.groupId
        }

        await this.router.redirect(id, args)
        this.activeCardVc.setIsBusy(false)
    }

    private renderRow(friend: Friend): ListRow {
        const cells: ListCell[] = [
            {
                avatars: friend.avatar?.mUri
                    ? [friend.avatar.mUri]
                    : [AVATAR_PLACEHOLDER],
            },
            {
                text: {
                    content:
                        this.authenticator.getPerson()?.id === friend.id
                            ? `You`
                            : `${friend.casualName}`,
                },
            },
        ]

        if (this.shouldAllowFriendSelection) {
            cells.push({
                toggleInput: {
                    name: 'isSelected',
                },
            })
        }

        return {
            id: friend.id,
            cells,
        }
    }

    public async load({
        router,
        onNoFriends,
        groupId,
        authenticator,
    }: FriendsListToolOptions) {
        this.groupId = groupId
        this.authenticator = authenticator

        if (groupId) {
            this.activeCardVc.setPayload({ isInGroupId: groupId })
        }

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

export interface FriendsListOptions {
    buttons?: Button[]
    header?: CardHeader
    id?: string
    shouldAllowFriendSelection?: boolean
    shouldAllowInvite?: boolean
}

interface FriendsListToolOptions {
    router: Router
    authenticator: Authenticator
    groupId?: string
    onNoFriends?: () => void
}

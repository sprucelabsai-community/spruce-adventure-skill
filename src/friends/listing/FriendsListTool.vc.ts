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
    private isMyGroup?: boolean
    private shouldAllowInvite: boolean
    private buttons?: Button[]
    private selectFriendHandler?: SelectFriendHandler

    public constructor(options: ViewControllerOptions & FriendsListOptions) {
        super(options)

        const {
            shouldAllowFriendSelection,
            shouldAllowInvite,
            buttons,
            onSelectFriend,
        } = options

        this.selectFriendHandler = onSelectFriend
        this.shouldAllowInvite = shouldAllowInvite ?? true
        this.buttons = buttons
        this.shouldAllowFriendSelection = shouldAllowFriendSelection ?? false
        this.activeCardVc = this.ActiveRecordVc(options)
    }

    private ActiveRecordVc(
        options: FriendsListOptions
    ): ActiveRecordCardViewController {
        const { header, id } = options

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
                footer: this.renderFooter(),
            })
        )
    }

    public enableInvite() {
        this.shouldAllowInvite = true
    }

    private refreshFooter() {
        this.activeCardVc.setFooter(this.renderFooter())
    }

    private renderFooter() {
        const renderedButtons: Button[] = this.renderFooterButtons()

        let footer: CardFooter | null = null

        if (renderedButtons.length > 0) {
            footer = {
                buttons: renderedButtons,
            }
        }
        return footer
    }

    private renderFooterButtons() {
        const renderedButtons: Button[] = []

        if (this.shouldAllowInvite) {
            renderedButtons.push({
                id: 'invite',
                label: this.groupId
                    ? 'Invite a new friend to this group!'
                    : 'Invite a friend!',
                type: 'primary',
                onClick: this.handleClickInvite.bind(this),
            })
        }

        if (this.buttons) {
            renderedButtons.push(...this.buttons)
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
            const friend = this.findFriendRecord(id)

            if (friend) {
                friend.isInGroup = true
                if (this.isFriendSelectable(friend)) {
                    await this.activeCardVc.setValue(id, 'isSelected', true)
                } else {
                    this.activeCardVc.upsertRow(id, this.renderRow(friend))
                }
            }
        }
    }

    private findFriendRecord(id: string) {
        return this.activeCardVc.getRecords().find((r) => r.id === id)
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
                    content: this.isMe(friend.id)
                        ? `You`
                        : `${friend.casualName}`,
                },
            },
        ]

        if (this.isFriendSelectable(friend)) {
            cells.push({
                toggleInput: {
                    name: 'isSelected',
                    onChange: (value) =>
                        this.selectFriendHandler?.(value, friend),
                },
            })
        }

        return {
            id: friend.id,
            cells,
        }
    }

    private isMe(id: string) {
        return this.authenticator.getPerson()?.id === id
    }

    private isFriendSelectable(friend: Friend) {
        return (
            this.shouldAllowFriendSelection &&
            (this.isMyGroup || !friend.isInGroup || this.isMe(friend.id))
        )
    }

    public setFooterButtons(buttons: Button[]) {
        this.buttons = buttons
        this.refreshFooter()
    }

    public async load(options: FriendsListToolOptions) {
        const { router, onNoFriends, group, authenticator } = options
        const { id: groupId, isMine } = group ?? {}

        this.isMyGroup = isMine
        this.groupId = groupId
        this.authenticator = authenticator
        this.router = router

        await this.loadActiveRecordCard()

        if (this.activeCardVc.getRecords().length === 0) {
            onNoFriends?.()
        }

        if (this.groupId) {
            this.activeCardVc.setHeaderSubtitle(
                'Below are the friends in this group plus any friends you have that are not invited. You can invite them by tapping the toggle next to their name.'
            )
        }
        this.refreshFooter()
    }

    public markPersonAsInGroup(personId: string) {
        const friend = this.findFriendRecord(personId)
        friend.isInGroup = true
        this.activeCardVc.upsertRow(friend.id, this.renderRow(friend))
    }

    private async loadActiveRecordCard() {
        if (this.groupId) {
            this.activeCardVc.setPayload({ isInGroupId: this.groupId })
        }

        await this.activeCardVc.load()
    }

    public render() {
        return this.activeCardVc.render()
    }
}

export type SelectFriendHandler = (
    isSelected: boolean,
    person: Friend
) => boolean | Promise<boolean>

export interface FriendsListOptions {
    buttons?: Button[]
    header?: CardHeader
    id?: string
    shouldAllowFriendSelection?: boolean
    shouldAllowInvite?: boolean
    onSelectFriend?: SelectFriendHandler
}

export interface FriendsListToolOptions {
    router: Router
    authenticator: Authenticator
    group?: { id: string; isMine: boolean }
    onNoFriends?: () => void
}

import {
    AbstractSkillViewController,
    ViewControllerOptions,
    SkillView,
    splitCardsIntoLayouts,
    SkillViewControllerLoadOptions,
    Router,
    Card,
    CardViewController,
} from '@sprucelabs/heartwood-view-controllers'
import { Friend, ListGroup } from '../adventure.types'
import FriendSelectionCardViewController from './FriendSelectionCard.vc'
import GroupFormCardViewController, {
    GroupFormValues,
} from './GroupFormCard.vc'

export default class GroupSkillViewController extends AbstractSkillViewController {
    public static id = 'group'

    protected formCardVc: GroupFormCardViewController
    protected friendSelectionCardVc: FriendSelectionCardViewController
    protected detailCardVc: CardViewController

    private router?: Router
    private shouldRenderForm = true
    private group?: ListGroup
    private isloaded = false
    private myId?: string

    public constructor(options: ViewControllerOptions) {
        super(options)

        this.formCardVc = this.FormCardVc()
        this.friendSelectionCardVc = this.FriendSelectionCardVc()
        this.detailCardVc = this.DetailCardVc()
    }

    private DetailCardVc() {
        return this.Controller('card', {
            id: 'details',
        })
    }

    private FriendSelectionCardVc(): FriendSelectionCardViewController {
        return this.Controller('adventure.friend-selection-card', {
            id: 'friend-selection',
            onSelectFriend: this.handleToggleFriend.bind(this),
        })
    }

    private async handleToggleFriend(_isSelected: boolean, friend: Friend) {
        if (this.group?.isMine !== false || !this.isloaded) {
            return true
        }

        const isMe = this.myId === friend.id
        const didConfirm = await this.confirm({
            isDestructive: isMe,
            title: isMe ? 'Leave Group?' : 'Add Friend?',
            message: isMe
                ? `Are you sure you want to leave ${this.group.title}? Once you do you will be redirected away and won't be able to see it again!`
                : `Add ${friend.casualName} to ${this.group.title}? Make sure you have asked the group owner if this is OK. Also, once you add them you can't remove them! Only the group owner can do that.`,
        })

        if (!didConfirm) {
            return false
        }

        try {
            if (isMe) {
                await this.emitLeaveGroup()
                await this.router?.redirect('adventure.list')
            } else {
                const friendId = friend.id
                await this.emitAddFriendToGroup(friendId)
                this.friendSelectionCardVc.markPersonAsInGroup(friendId)
            }
        } catch (err: any) {
            this.log.error('failed to add friend to group', err)
            await this.alert({
                message: err.message ?? 'Failed to add friend to group',
            })

            return false
        }

        return true
    }

    private async emitAddFriendToGroup(friendId: string) {
        const client = await this.connectToApi()
        await client.emitAndFlattenResponses(
            'adventure.add-friend-to-group::v2022_09_09',
            {
                target: {
                    groupId: this.group!.id,
                },
                payload: {
                    friendId,
                },
            }
        )
    }

    private async emitLeaveGroup() {
        const client = await this.connectToApi()
        await client.emitAndFlattenResponses(
            'adventure.leave-group::v2022_09_09',
            {
                target: {
                    groupId: this.group!.id,
                },
            }
        )
    }

    private FormCardVc(): GroupFormCardViewController {
        return this.Controller('adventure.group-form-card', {
            id: 'form',
            onCancel: () => this.router?.redirect('adventure.list'),
            onSubmit: this.handleSubmitGroupForm.bind(this),
        })
    }

    private async handleSubmitGroupForm(
        values: Required<NonNullable<GroupFormValues>>
    ) {
        try {
            if (!this.group) {
                await this.createGroup(values)
            } else {
                await this.updateGroup(values)
            }
            await this.router?.redirect('adventure.list')
        } catch (err: any) {
            this.log.error('failed to save group', err.stack)
            await this.alert({
                message: err.message ?? 'Failed to create group',
            })
        }
    }

    private async updateGroup(values: Required<GroupFormValues>) {
        const client = await this.connectToApi()
        await client.emitAndFlattenResponses(
            'adventure.update-group::v2022_09_09',
            {
                target: {
                    id: this.group!.id,
                },
                payload: {
                    group: {
                        ...values,
                        people: this.friendSelectionCardVc.getSelectedFriends(),
                    },
                },
            }
        )
    }

    private async createGroup(values: Required<GroupFormValues>) {
        const selectedFriends = this.friendSelectionCardVc.getSelectedFriends()
        const client = await this.connectToApi()
        await client.emitAndFlattenResponses(
            'adventure.create-group::v2022_09_09',
            {
                payload: {
                    group: {
                        ...values,
                        people: selectedFriends,
                    },
                },
            }
        )
    }

    public async load(
        options: SkillViewControllerLoadOptions<GroupSkillViewArgs>
    ) {
        const { router, args, authenticator } = options
        const { id } = args

        this.router = router
        this.myId = authenticator.getPerson()?.id

        if (id) {
            this.group = await this.loadGroup(id)
            this.friendSelectionCardVc.enableInvite()
            this.shouldRenderForm = this.group.isMine
            this.triggerRender()
            this.updateCardHeader()

            await this.setFormValues()

            if (!this.group.isMine) {
                this.dropInBackButton()
            }
        }

        await this.friendSelectionCardVc.load({
            ...options,
            group: this.group
                ? { id: this.group.id, isMine: this.group.isMine }
                : undefined,
        })

        if (this.group) {
            await this.friendSelectionCardVc.setSelectedFriends(
                this.group.people
            )
        }

        this.isloaded = true
    }

    private dropInBackButton() {
        this.friendSelectionCardVc.setFooterButtons([
            {
                id: 'back',
                label: 'Go Back',
                onClick: () => this.router?.redirect('adventure.list'),
            },
        ])
    }

    private async setFormValues() {
        await this.formCardVc.setValues(this.group!)
    }

    private updateCardHeader() {
        this.detailCardVc.setHeader({
            title: this.group!.title,
            subtitle: this.group!.description,
        })
    }

    private async loadGroup(id: string) {
        const client = await this.connectToApi()
        const [{ group }] = await client.emitAndFlattenResponses(
            'adventure.get-group::v2022_09_09',
            {
                target: {
                    id,
                },
            }
        )

        return group
    }

    public render(): SkillView {
        return {
            layouts: splitCardsIntoLayouts(
                [
                    this.shouldRenderForm
                        ? this.formCardVc.render()
                        : this.detailCardVc.render(),
                    this.friendSelectionCardVc.render(),
                ].filter(Boolean) as Card[],
                this.shouldRenderForm ? 2 : 1
            ),
        }
    }
}

export interface GroupSkillViewArgs {
    id?: string
}

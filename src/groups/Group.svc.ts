import {
    AbstractSkillViewController,
    ViewControllerOptions,
    SkillView,
    splitCardsIntoLayouts,
    SkillViewControllerLoadOptions,
    Router,
} from '@sprucelabs/heartwood-view-controllers'
import FriendSelectionCardViewController from './FriendSelectionCard.vc'
import GroupFormCardViewController, {
    GroupFormValues,
} from './GroupFormCard.vc'

export default class GroupSkillViewController extends AbstractSkillViewController {
    public static id = 'group'
    protected formCardVc: GroupFormCardViewController
    protected friendSelectionCardVc: FriendSelectionCardViewController
    private router?: Router

    public constructor(options: ViewControllerOptions) {
        super(options)

        this.formCardVc = this.FormCardVc()
        this.friendSelectionCardVc = this.FriendSelectionCardVc()
    }

    private FriendSelectionCardVc(): FriendSelectionCardViewController {
        return this.Controller('adventure.friend-selection-card', {
            id: 'friend-selection',
            header: {
                title: 'Your friends!',
            },
        })
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
            await this.createGroup(values)
            await this.router?.redirect('adventure.list')
        } catch (err: any) {
            this.log.error('failed to save group', err.stack)
            await this.alert({
                message: err.message ?? 'Failed to create group',
            })
        }
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
        const { router, args } = options

        this.router = router
        const { id } = args

        await this.friendSelectionCardVc.load(router)

        if (id) {
            await this.loadGroup(id)
        }
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

        await this.formCardVc.setValues(group)
        await this.friendSelectionCardVc.setSelectedFriends(group.people)
    }

    public render(): SkillView {
        return {
            layouts: splitCardsIntoLayouts(
                [this.formCardVc.render(), this.friendSelectionCardVc.render()],
                2
            ),
        }
    }
}

export interface GroupSkillViewArgs {
    id?: string
}

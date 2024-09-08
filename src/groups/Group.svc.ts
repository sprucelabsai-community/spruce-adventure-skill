import {
    AbstractSkillViewController,
    ViewControllerOptions,
    SkillView,
    splitCardsIntoLayouts,
    SkillViewControllerLoadOptions,
    Router,
} from '@sprucelabs/heartwood-view-controllers'
import FriendSelectionCardViewController from './FriendSelectionCard.vc'
import GroupFormCardViewController from './GroupFormCard.vc'

export default class GroupSkillViewController extends AbstractSkillViewController {
    public static id = 'group'
    protected formCardVc: GroupFormCardViewController
    private friendSelectionCardVc: FriendSelectionCardViewController
    private router?: Router

    public constructor(options: ViewControllerOptions) {
        super(options)

        this.formCardVc = this.FormCardVc()
        this.friendSelectionCardVc = this.Controller(
            'adventure.friend-selection-card',
            {
                id: 'friend-selection',
                header: {
                    title: 'Your friends!',
                },
            }
        )
    }

    private FormCardVc(): GroupFormCardViewController {
        return this.Controller('adventure.group-form-card', {
            id: 'form',
            onCancel: () => this.router?.redirect('adventure.list'),
        })
    }

    public async load(options: SkillViewControllerLoadOptions) {
        const { router } = options
        this.router = router
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

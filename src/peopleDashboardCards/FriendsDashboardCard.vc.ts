import {
    AbstractViewController,
    Card,
    Router,
    SkillViewControllerLoadOptions,
    ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import FriendsListToolViewController from '../friends/listing/FriendsListTool.vc'

export default class FriendsDashboardCardViewController extends AbstractViewController<Card> {
    public static id = 'friends-dashboard-card'
    private friendsListCardVc: FriendsListToolViewController
    private router!: Router

    public constructor(options: ViewControllerOptions) {
        super(options)
        this.friendsListCardVc = this.FriendsListCardVc()
    }

    private FriendsListCardVc(): FriendsListToolViewController {
        return this.Controller('adventure.friends-list-tool', {
            header: {
                title: 'Adventure Friends! ⚔️',
                subtitle: `Wanna plan a last minute adventures with friends? I got your back! Below are the friends you've connected with!`,
            },
            buttons: [
                {
                    id: 'adventures',
                    label: 'Adventures',
                    onClick: this.handleClickAdventures.bind(this),
                },
            ],
        })
    }

    public async handleClickAdventures() {
        await this.router.redirect('adventure.root')
    }

    public async load(options: SkillViewControllerLoadOptions) {
        const { router } = options
        this.router = router
        await this.friendsListCardVc.load(options)
    }

    public render() {
        return this.friendsListCardVc.render()
    }
}

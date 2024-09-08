import {
    AbstractViewController,
    ViewControllerOptions,
    Card,
    Router,
} from '@sprucelabs/heartwood-view-controllers'
import FriendsListToolViewController from '../friends/listing/FriendsListTool.vc'

export default class FriendSelectionCardViewController extends AbstractViewController<Card> {
    public static id = 'friend-selection-card'
    protected friendListToolVc: FriendsListToolViewController

    public constructor(options: ViewControllerOptions & { id?: string }) {
        super(options)

        const { id } = options

        this.friendListToolVc = this.Controller('adventure.friends-list-tool', {
            id,
            shouldRenderToggle: true,
        })
    }

    public async load(router: Router) {
        await this.friendListToolVc.load({ router })
    }

    public render() {
        return this.friendListToolVc.render()
    }
}

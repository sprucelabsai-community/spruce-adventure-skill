import {
    AbstractViewController,
    ViewControllerOptions,
    Card,
} from '@sprucelabs/heartwood-view-controllers'
import FriendsListToolViewController from '../friends/FriendsListTool.vc'

export default class FriendSelectionCardViewController extends AbstractViewController<Card> {
    public static id = 'friend-selection-card'
    private cardVc: FriendsListToolViewController

    public constructor(options: ViewControllerOptions & { id?: string }) {
        super(options)

        const { id } = options

        this.cardVc = this.Controller('adventure.friends-list-tool', { id })
    }

    public render() {
        return this.cardVc.render()
    }
}

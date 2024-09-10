import {
    AbstractViewController,
    ViewControllerOptions,
    Card,
} from '@sprucelabs/heartwood-view-controllers'
import FriendsListToolViewController, {
    FriendsListToolOptions,
} from '../friends/listing/FriendsListTool.vc'

export default class FriendSelectionCardViewController extends AbstractViewController<Card> {
    public static id = 'friend-selection-card'
    protected friendListToolVc: FriendsListToolViewController

    public constructor(options: ViewControllerOptions & { id?: string }) {
        super(options)

        const { id } = options

        this.friendListToolVc = this.FriendListToolVc(id)
    }

    private FriendListToolVc(id?: string): FriendsListToolViewController {
        return this.Controller('adventure.friends-list-tool', {
            id,
            shouldAllowFriendSelection: true,
            shouldAllowInvite: false,
        })
    }

    public async load(options: FriendSelectionCardLoadOptions) {
        await this.friendListToolVc.load(options)
    }

    public getSelectedFriends() {
        return this.friendListToolVc.getSelectedFriends()
    }

    public async setSelectedFriends(people: string[]) {
        await this.friendListToolVc.setSelectedFriends(people)
    }

    public enableInvite() {
        this.friendListToolVc.enableInvite()
    }

    public render() {
        return this.friendListToolVc.render()
    }
}

export type FriendSelectionCardLoadOptions = Omit<
    FriendsListToolOptions,
    'onNoFriends'
>

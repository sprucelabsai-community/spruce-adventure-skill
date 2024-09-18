import {
    AbstractViewController,
    ViewControllerOptions,
    Card,
    Button,
} from '@sprucelabs/heartwood-view-controllers'
import FriendsListToolViewController, {
    FriendsListToolOptions,
    SelectFriendHandler,
} from '../friends/listing/FriendsListTool.vc'

export default class FriendSelectionCardViewController extends AbstractViewController<Card> {
    public static id = 'friend-selection-card'
    protected friendListToolVc: FriendsListToolViewController

    public constructor(
        options: ViewControllerOptions & FriendSelectionCardOptions
    ) {
        super(options)
        this.friendListToolVc = this.FriendListToolVc(options)
    }

    private FriendListToolVc(
        options: FriendSelectionCardOptions
    ): FriendsListToolViewController {
        return this.Controller('adventure.friends-list-tool', {
            ...options,
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

    public setFooterButtons(buttons: Button[]) {
        this.friendListToolVc.setFooterButtons(buttons)
    }

    public markPersonAsInGroup(personId: string) {
        this.friendListToolVc.markPersonAsInGroup(personId)
    }

    public render() {
        return this.friendListToolVc.render()
    }
}

export type FriendSelectionCardLoadOptions = Omit<
    FriendsListToolOptions,
    'onNoFriends'
>

export interface FriendSelectionCardOptions {
    id?: string
    onSelectFriend?: SelectFriendHandler
}

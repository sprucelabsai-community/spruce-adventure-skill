import { MockActiveRecordCard } from '@sprucelabs/heartwood-view-controllers'
import FriendsListToolViewController from '../../../friends/FriendsListTool.vc'

export class SpyFriendListTool extends FriendsListToolViewController {
    public getActiveCardVc() {
        return this.activeCardVc as MockActiveRecordCard
    }
}

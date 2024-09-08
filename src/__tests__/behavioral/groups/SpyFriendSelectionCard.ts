import { Router } from '@sprucelabs/heartwood-view-controllers'
import FriendSelectionCardViewController from '../../../groups/FriendSelectionCard.vc'
import { SpyFriendListTool } from '../friends/SpyFriendListTool'

export class SpyFriendSelectionCard extends FriendSelectionCardViewController {
    public isLoaded = false
    public async load(router: Router) {
        this.isLoaded = true
        await super.load(router)
    }

    public getListVc() {
        return (this.friendListToolVc as SpyFriendListTool)
            .getActiveCardVc()
            .getListVcs()[0]
    }
}

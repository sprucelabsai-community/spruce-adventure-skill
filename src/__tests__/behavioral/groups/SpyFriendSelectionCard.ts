import { interactor, Router } from '@sprucelabs/heartwood-view-controllers'
import FriendSelectionCardViewController from '../../../groups/FriendSelectionCard.vc'
import { SpyFriendListTool } from '../friends/SpyFriendListTool'

export class SpyFriendSelectionCard extends FriendSelectionCardViewController {
    public isLoaded = false
    public async load(router: Router) {
        this.isLoaded = true
        await super.load(router)
    }

    public async clickToggle(id: string) {
        await interactor.clickToggleInRow(this.getListVc(), id)
    }

    public getListVc() {
        return this.activeRecordCard.getListVcs()[0]
    }

    private get activeRecordCard() {
        return (this.friendListToolVc as SpyFriendListTool).getActiveCardVc()
    }

    public getValues() {
        return this.getListVc().getValues()
    }
}

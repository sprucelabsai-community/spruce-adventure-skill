import { interactor } from '@sprucelabs/heartwood-view-controllers'
import FriendSelectionCardViewController, {
    FriendSelectionCardLoadOptions,
} from '../../../groups/FriendSelectionCard.vc'
import { SpyFriendListTool } from '../friends/SpyFriendListTool'

export class SpyFriendSelectionCard extends FriendSelectionCardViewController {
    public isLoaded = false
    private loadOptions?: FriendSelectionCardLoadOptions
    public async load(options: FriendSelectionCardLoadOptions) {
        this.isLoaded = true
        this.loadOptions = options
        await super.load(options)
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

    public getLoadOptions() {
        return this.loadOptions
    }
}

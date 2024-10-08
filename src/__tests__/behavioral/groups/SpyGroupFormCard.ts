import { SpyFormCardViewController } from '@sprucelabs/spruce-form-utils'
import CreateGroupCardViewController, {
    GroupSchema,
} from '../../../groups/GroupFormCard.vc'

export class SpyGroupFormCard extends CreateGroupCardViewController {
    public getFormVc() {
        return (this.formCardVc as SpyFormCardViewController<GroupSchema>)
            .formVc
    }
}

import SpyFormCardViewController from "@sprucelabs/spruce-form-utils/build/__tests__/support/SpyFormCard";
import CreateGroupCardViewController from "../../../groups/GroupFormCard.vc";

export class SpyGroupFormCard extends CreateGroupCardViewController {
    public getFormVc() {
        return (this.formCardVc as SpyFormCardViewController).formVc;
    }
}

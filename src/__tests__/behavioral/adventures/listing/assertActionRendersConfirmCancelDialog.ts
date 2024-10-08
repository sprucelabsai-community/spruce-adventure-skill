import { vcAssert } from '@sprucelabs/heartwood-view-controllers'
import ConfirmCancelCardViewController from '../../../../adventures/cancelling/ConfirmCancelCard.vc'
import CurrentAdventureCardViewController from '../../../../adventures/listing/CurrentAdventureCard.vc'
import ControlledConfirmCancelCard from './ControlledConfirmCancelCard'

export async function assertActionRendersConfirmCancelDialog(
    vc: CurrentAdventureCardViewController,
    action: () => Promise<void>
) {
    const dlgVc = await vcAssert.assertRendersDialog(vc, action)

    const confirmCancelVc = vcAssert.assertRendersAsInstanceOf(
        dlgVc,
        ConfirmCancelCardViewController
    ) as ControlledConfirmCancelCard

    return { confirmCancelVc, dlgVc }
}

import ConfirmCancelCardViewController from '../../../../adventures/cancelling/ConfirmCancelCard.vc'

export default class ControlledConfirmCancelCard extends ConfirmCancelCardViewController {
    public async accept(message?: string | undefined | null) {
        return this.onConfirmHandler(message)
    }

    public async decline() {
        return this.onCancelHandler()
    }
}

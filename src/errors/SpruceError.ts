import AbstractSpruceError from '@sprucelabs/error'
import ErrorOptions from '#spruce/errors/options.types'

export default class SpruceError extends AbstractSpruceError<ErrorOptions> {
    public friendlyMessage(): string {
        const { options } = this
        let message

        switch (options?.code) {
            case 'NOT_FOUND':
                message = `I could not find that!`
                break

            case 'NOT_YOUR_GROUP':
                message = 'A Not your group just happened!'
                break

            default:
                message = super.friendlyMessage()
        }

        const fullMessage = options.friendlyMessage
            ? options.friendlyMessage
            : message

        return fullMessage
    }
}

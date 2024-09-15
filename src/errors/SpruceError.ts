import AbstractSpruceError from '@sprucelabs/error'
import ErrorOptions from '#spruce/errors/options.types'

export default class SpruceError extends AbstractSpruceError<ErrorOptions> {
    public friendlyMessage(): string {
        const { options } = this
        let message

        switch (options?.code) {
            case 'NOT_FOUND':
                message = `I could not find what you are looking for!`
                break

            case 'NOT_YOUR_GROUP':
                message = `You can't do this because you're not the owner of this group!`
                break

            case 'CANNOT_LEAVE_OWN_GROUP':
                message = `You cannot leave your own group! But, you can delete it!`
                break

            case 'CANNOT_LEAVE_GROUP_YOU_ARE_NOT_PART_OF':
                message = 'You cannot leave a group you are not part of!'
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

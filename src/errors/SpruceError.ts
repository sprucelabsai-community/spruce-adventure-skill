import AbstractSpruceError from '@sprucelabs/error'
import ErrorOptions from '#spruce/errors/options.types'

export default class SpruceError extends AbstractSpruceError<ErrorOptions> {
    public friendlyMessage(): string {
        const { options } = this
        let message

        switch (options?.code) {
            case 'NOT_YOUR_GROUP':
                message = 'A Not your group just happened!'
                break

            case 'NOT_FOUND':
                message = 'A Not found just happened!'
                break

            case 'CANNOT_LEAVE_OWN_GROUP':
                message = 'A Cannot leave own group just happened!'
                break

            case 'CANNOT_LEAVE_GROUP_YOU_ARE_NOT_PART_OF':
                message =
                    'A Cannot leave group you are not part of just happened!'
                break

            case 'CANNOT_ADD_FRIEND_TO_GROUP_YOU_ARE_NOT_PART_OF':
                message =
                    'A Cannot add friend to group you are not part of just happened!'
                break

            case 'ALREADY_IN_GROUP':
                message = 'A Already in group just happened!'
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

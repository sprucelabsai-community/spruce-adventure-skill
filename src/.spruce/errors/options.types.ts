import { SpruceErrors } from "#spruce/errors/errors.types"
import { ErrorOptions as ISpruceErrorOptions} from "@sprucelabs/error"

export interface NotYourGroupErrorOptions extends SpruceErrors.Adventure.NotYourGroup, ISpruceErrorOptions {
	code: 'NOT_YOUR_GROUP'
}
export interface NotFoundErrorOptions extends SpruceErrors.Adventure.NotFound, ISpruceErrorOptions {
	code: 'NOT_FOUND'
}
export interface CannotLeaveOwnGroupErrorOptions extends SpruceErrors.Adventure.CannotLeaveOwnGroup, ISpruceErrorOptions {
	code: 'CANNOT_LEAVE_OWN_GROUP'
}
export interface CannotLeaveGroupYouAreNotPartOfErrorOptions extends SpruceErrors.Adventure.CannotLeaveGroupYouAreNotPartOf, ISpruceErrorOptions {
	code: 'CANNOT_LEAVE_GROUP_YOU_ARE_NOT_PART_OF'
}
export interface CannotAddFriendToGroupYouAreNotPartOfErrorOptions extends SpruceErrors.Adventure.CannotAddFriendToGroupYouAreNotPartOf, ISpruceErrorOptions {
	code: 'CANNOT_ADD_FRIEND_TO_GROUP_YOU_ARE_NOT_PART_OF'
}
export interface AlreadyInGroupErrorOptions extends SpruceErrors.Adventure.AlreadyInGroup, ISpruceErrorOptions {
	code: 'ALREADY_IN_GROUP'
}

type ErrorOptions =  | NotYourGroupErrorOptions  | NotFoundErrorOptions  | CannotLeaveOwnGroupErrorOptions  | CannotLeaveGroupYouAreNotPartOfErrorOptions  | CannotAddFriendToGroupYouAreNotPartOfErrorOptions  | AlreadyInGroupErrorOptions 

export default ErrorOptions

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

type ErrorOptions =  | NotYourGroupErrorOptions  | NotFoundErrorOptions  | CannotLeaveOwnGroupErrorOptions  | CannotLeaveGroupYouAreNotPartOfErrorOptions 

export default ErrorOptions

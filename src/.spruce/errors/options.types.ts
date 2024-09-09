import { SpruceErrors } from "#spruce/errors/errors.types"
import { ErrorOptions as ISpruceErrorOptions} from "@sprucelabs/error"

export interface NotYourGroupErrorOptions extends SpruceErrors.Adventure.NotYourGroup, ISpruceErrorOptions {
	code: 'NOT_YOUR_GROUP'
}
export interface NotFoundErrorOptions extends SpruceErrors.Adventure.NotFound, ISpruceErrorOptions {
	code: 'NOT_FOUND'
}

type ErrorOptions =  | NotYourGroupErrorOptions  | NotFoundErrorOptions 

export default ErrorOptions

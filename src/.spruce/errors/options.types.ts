import { SpruceErrors } from "#spruce/errors/errors.types"
import { ErrorOptions as ISpruceErrorOptions} from "@sprucelabs/error"

export interface NotFoundErrorOptions extends SpruceErrors.Adventure.NotFound, ISpruceErrorOptions {
	code: 'NOT_FOUND'
}

type ErrorOptions =  | NotFoundErrorOptions 

export default ErrorOptions

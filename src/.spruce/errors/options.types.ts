import { SpruceErrors } from "#spruce/errors/errors.types"
import { ErrorOptions as ISpruceErrorOptions} from "@sprucelabs/error"

export interface NotFoundErrorOptions extends SpruceErrors.Adventure.NotFound, ISpruceErrorOptions {
	code: 'NOT_FOUND'
}
export interface AdventureSkillErrorErrorOptions extends SpruceErrors.Adventure.AdventureSkillError, ISpruceErrorOptions {
	code: 'ADVENTURE_SKILL_ERROR'
}

type ErrorOptions =  | NotFoundErrorOptions  | AdventureSkillErrorErrorOptions 

export default ErrorOptions

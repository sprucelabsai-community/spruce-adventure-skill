import { SpruceErrors } from "#spruce/errors/errors.types"
import { ErrorOptions as ISpruceErrorOptions} from "@sprucelabs/error"

export interface AdventureSkillErrorErrorOptions extends SpruceErrors.Adventure.AdventureSkillError, ISpruceErrorOptions {
	code: 'ADVENTURE_SKILL_ERROR'
}

type ErrorOptions =  | AdventureSkillErrorErrorOptions 

export default ErrorOptions

import { ErrorOptions as ISpruceErrorOptions } from '@sprucelabs/error'
import { SpruceErrors } from '#spruce/errors/errors.types'

export interface NotFoundErrorOptions
    extends SpruceErrors.Adventure.NotFound,
        ISpruceErrorOptions {
    code: 'NOT_FOUND'
}

type ErrorOptions = NotFoundErrorOptions

export default ErrorOptions

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceErrors } from '../errors.types'

const notFoundSchema: SpruceErrors.Adventure.NotFoundSchema = {
    id: 'notFound',
    namespace: 'Adventure',
    name: 'Not found',
    fields: {},
}

SchemaRegistry.getInstance().trackSchema(notFoundSchema)

export default notFoundSchema

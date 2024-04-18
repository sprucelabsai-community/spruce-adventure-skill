import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const searchEmitPayloadSchema: SpruceSchemas.People.v2022_05_29.SearchEmitPayloadSchema =
    {
        id: 'searchEmitPayload',
        version: 'v2022_05_29',
        namespace: 'People',
        name: '',
        fields: {
            /** . */
            query: {
                type: 'text',
                isRequired: true,
                options: undefined,
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(searchEmitPayloadSchema)

export default searchEmitPayloadSchema

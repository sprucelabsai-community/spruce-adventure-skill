import { SchemaRegistry } from '@sprucelabs/schema'
import searchPersonSchema_v2022_05_29 from '#spruce/schemas/people/v2022_05_29/searchPerson.schema'
import { SpruceSchemas } from '../../schemas.types'

const getResponsePayloadSchema: SpruceSchemas.People.v2022_05_29.GetResponsePayloadSchema =
    {
        id: 'getResponsePayload',
        version: 'v2022_05_29',
        namespace: 'People',
        name: '',
        fields: {
            /** . */
            person: {
                type: 'schema',
                isRequired: true,
                options: { schema: searchPersonSchema_v2022_05_29 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(getResponsePayloadSchema)

export default getResponsePayloadSchema

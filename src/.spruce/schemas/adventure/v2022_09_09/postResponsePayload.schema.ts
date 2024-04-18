import { SchemaRegistry } from '@sprucelabs/schema'
import adventureSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/adventure.schema'
import { SpruceSchemas } from '../../schemas.types'

const postResponsePayloadSchema: SpruceSchemas.Adventure.v2022_09_09.PostResponsePayloadSchema =
    {
        id: 'postResponsePayload',
        version: 'v2022_09_09',
        namespace: 'Adventure',
        name: '',
        fields: {
            /** . */
            adventure: {
                type: 'schema',
                isRequired: true,
                options: { schema: adventureSchema_v2022_09_09 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(postResponsePayloadSchema)

export default postResponsePayloadSchema

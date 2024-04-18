import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const broadcastTeamMessageResponsePayloadSchema: SpruceSchemas.People.v2022_05_29.BroadcastTeamMessageResponsePayloadSchema =
    {
        id: 'broadcastTeamMessageResponsePayload',
        version: 'v2022_05_29',
        namespace: 'People',
        name: '',
        fields: {
            /** . */
            success: {
                type: 'boolean',
                isRequired: true,
                options: undefined,
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(
    broadcastTeamMessageResponsePayloadSchema
)

export default broadcastTeamMessageResponsePayloadSchema

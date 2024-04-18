import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const broadcastTeamMessageEmitPayloadSchema: SpruceSchemas.People.v2022_05_29.BroadcastTeamMessageEmitPayloadSchema =
    {
        id: 'broadcastTeamMessageEmitPayload',
        version: 'v2022_05_29',
        namespace: 'People',
        name: '',
        fields: {
            /** . */
            message: {
                type: 'text',
                isRequired: true,
                options: undefined,
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(broadcastTeamMessageEmitPayloadSchema)

export default broadcastTeamMessageEmitPayloadSchema

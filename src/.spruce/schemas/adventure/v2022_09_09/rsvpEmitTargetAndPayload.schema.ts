import { SchemaRegistry } from '@sprucelabs/schema'
import rsvpEmitPayloadSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/rsvpEmitPayload.schema'
import rsvpEmitTargetSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/rsvpEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const rsvpEmitTargetAndPayloadSchema: SpruceSchemas.Adventure.v2022_09_09.RsvpEmitTargetAndPayloadSchema =
    {
        id: 'rsvpEmitTargetAndPayload',
        version: 'v2022_09_09',
        namespace: 'Adventure',
        name: '',
        fields: {
            /** Source. */
            source: {
                label: 'Source',
                type: 'schema',
                options: { schema: eventSourceSchema_v2021_09_13 },
            },
            /** . */
            target: {
                type: 'schema',
                isRequired: true,
                options: { schema: rsvpEmitTargetSchema_v2022_09_09 },
            },
            /** . */
            payload: {
                type: 'schema',
                isRequired: true,
                options: { schema: rsvpEmitPayloadSchema_v2022_09_09 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(rsvpEmitTargetAndPayloadSchema)

export default rsvpEmitTargetAndPayloadSchema

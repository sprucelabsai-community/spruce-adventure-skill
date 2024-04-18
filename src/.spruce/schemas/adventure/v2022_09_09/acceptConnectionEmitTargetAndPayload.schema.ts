import { SchemaRegistry } from '@sprucelabs/schema'
import acceptConnectionEmitTargetSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/acceptConnectionEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const acceptConnectionEmitTargetAndPayloadSchema: SpruceSchemas.Adventure.v2022_09_09.AcceptConnectionEmitTargetAndPayloadSchema =
    {
        id: 'acceptConnectionEmitTargetAndPayload',
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
                options: {
                    schema: acceptConnectionEmitTargetSchema_v2022_09_09,
                },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(
    acceptConnectionEmitTargetAndPayloadSchema
)

export default acceptConnectionEmitTargetAndPayloadSchema

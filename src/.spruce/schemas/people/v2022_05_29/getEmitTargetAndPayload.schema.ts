import { SchemaRegistry } from '@sprucelabs/schema'
import getEmitTargetSchema_v2022_05_29 from '#spruce/schemas/people/v2022_05_29/getEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const getEmitTargetAndPayloadSchema: SpruceSchemas.People.v2022_05_29.GetEmitTargetAndPayloadSchema =
    {
        id: 'getEmitTargetAndPayload',
        version: 'v2022_05_29',
        namespace: 'People',
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
                options: { schema: getEmitTargetSchema_v2022_05_29 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(getEmitTargetAndPayloadSchema)

export default getEmitTargetAndPayloadSchema

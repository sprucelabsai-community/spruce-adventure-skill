import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const connectionTargetSourceSchema: SpruceSchemas.Adventure.v2022_09_09.ConnectionTargetSourceSchema =
    {
        id: 'connectionTargetSource',
        version: 'v2022_09_09',
        namespace: 'Adventure',
        name: '',
        fields: {
            /** . */
            personId: {
                type: 'id',
                isRequired: true,
                options: undefined,
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(connectionTargetSourceSchema)

export default connectionTargetSourceSchema

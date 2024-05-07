import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const createConnectionResponsePayloadSchema: SpruceSchemas.Adventure.v2022_09_09.CreateConnectionResponsePayloadSchema  = {
	id: 'createConnectionResponsePayload',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'connectionId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createConnectionResponsePayloadSchema)

export default createConnectionResponsePayloadSchema

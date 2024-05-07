import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const cancelResponsePayloadSchema: SpruceSchemas.Adventure.v2022_09_09.CancelResponsePayloadSchema  = {
	id: 'cancelResponsePayload',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'totalCancelled': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(cancelResponsePayloadSchema)

export default cancelResponsePayloadSchema

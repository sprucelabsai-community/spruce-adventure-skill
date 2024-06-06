import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const cancelEmitPayloadSchema: SpruceSchemas.Adventure.v2022_09_09.CancelEmitPayloadSchema  = {
	id: 'cancelEmitPayload',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'message': {
	                type: 'text',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(cancelEmitPayloadSchema)

export default cancelEmitPayloadSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const acceptConnectionResponsePayloadSchema: SpruceSchemas.Adventure.v2022_09_09.AcceptConnectionResponsePayloadSchema  = {
	id: 'acceptConnectionResponsePayload',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'success': {
	                type: 'boolean',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(acceptConnectionResponsePayloadSchema)

export default acceptConnectionResponsePayloadSchema

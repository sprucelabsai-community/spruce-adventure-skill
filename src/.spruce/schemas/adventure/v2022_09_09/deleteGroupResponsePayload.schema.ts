import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const deleteGroupResponsePayloadSchema: SpruceSchemas.Adventure.v2022_09_09.DeleteGroupResponsePayloadSchema  = {
	id: 'deleteGroupResponsePayload',
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

SchemaRegistry.getInstance().trackSchema(deleteGroupResponsePayloadSchema)

export default deleteGroupResponsePayloadSchema

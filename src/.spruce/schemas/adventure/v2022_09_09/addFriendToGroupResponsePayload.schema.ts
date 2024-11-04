import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const addFriendToGroupResponsePayloadSchema: SpruceSchemas.Adventure.v2022_09_09.AddFriendToGroupResponsePayloadSchema  = {
	id: 'addFriendToGroupResponsePayload',
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

SchemaRegistry.getInstance().trackSchema(addFriendToGroupResponsePayloadSchema)

export default addFriendToGroupResponsePayloadSchema

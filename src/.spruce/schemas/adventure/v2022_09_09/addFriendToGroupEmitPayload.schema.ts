import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const addFriendToGroupEmitPayloadSchema: SpruceSchemas.Adventure.v2022_09_09.AddFriendToGroupEmitPayloadSchema  = {
	id: 'addFriendToGroupEmitPayload',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'friendId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(addFriendToGroupEmitPayloadSchema)

export default addFriendToGroupEmitPayloadSchema

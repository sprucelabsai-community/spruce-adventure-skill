import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const addFriendToGroupEmitTargetSchema: SpruceSchemas.Adventure.v2022_09_09.AddFriendToGroupEmitTargetSchema  = {
	id: 'addFriendToGroupEmitTarget',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'groupId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(addFriendToGroupEmitTargetSchema)

export default addFriendToGroupEmitTargetSchema

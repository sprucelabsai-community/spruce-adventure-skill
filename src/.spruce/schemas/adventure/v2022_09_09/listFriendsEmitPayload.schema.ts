import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listFriendsEmitPayloadSchema: SpruceSchemas.Adventure.v2022_09_09.ListFriendsEmitPayloadSchema  = {
	id: 'listFriendsEmitPayload',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'filter': {
	                type: 'select',
	                options: {choices: [{"value":"confirmed","label":"Confirmed"},{"value":"pending","label":"Pending"}],}
	            },
	            /** . */
	            'isInGroupId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listFriendsEmitPayloadSchema)

export default listFriendsEmitPayloadSchema

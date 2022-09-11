import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import friendSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/friend.schema'

const listFriendsResponsePayloadSchema: SpruceSchemas.Adventure.v2022_09_09.ListFriendsResponsePayloadSchema  = {
	id: 'listFriendsResponsePayload',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'friends': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: friendSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listFriendsResponsePayloadSchema)

export default listFriendsResponsePayloadSchema

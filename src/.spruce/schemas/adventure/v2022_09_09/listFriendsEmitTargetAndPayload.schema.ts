import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import listFriendsEmitPayloadSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/listFriendsEmitPayload.schema'

const listFriendsEmitTargetAndPayloadSchema: SpruceSchemas.Adventure.v2022_09_09.ListFriendsEmitTargetAndPayloadSchema  = {
	id: 'listFriendsEmitTargetAndPayload',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2021_09_13,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: listFriendsEmitPayloadSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listFriendsEmitTargetAndPayloadSchema)

export default listFriendsEmitTargetAndPayloadSchema

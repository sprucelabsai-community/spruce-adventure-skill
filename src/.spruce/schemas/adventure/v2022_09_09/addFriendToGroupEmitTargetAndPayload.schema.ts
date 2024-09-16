import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import addFriendToGroupEmitTargetSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/addFriendToGroupEmitTarget.schema'
import addFriendToGroupEmitPayloadSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/addFriendToGroupEmitPayload.schema'

const addFriendToGroupEmitTargetAndPayloadSchema: SpruceSchemas.Adventure.v2022_09_09.AddFriendToGroupEmitTargetAndPayloadSchema  = {
	id: 'addFriendToGroupEmitTargetAndPayload',
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
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: addFriendToGroupEmitTargetSchema_v2022_09_09,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: addFriendToGroupEmitPayloadSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(addFriendToGroupEmitTargetAndPayloadSchema)

export default addFriendToGroupEmitTargetAndPayloadSchema

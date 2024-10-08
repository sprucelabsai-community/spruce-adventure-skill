import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import createGroupEmitPayloadSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/createGroupEmitPayload.schema'

const createGroupEmitTargetAndPayloadSchema: SpruceSchemas.Adventure.v2022_09_09.CreateGroupEmitTargetAndPayloadSchema  = {
	id: 'createGroupEmitTargetAndPayload',
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
	                isRequired: true,
	                options: {schema: createGroupEmitPayloadSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createGroupEmitTargetAndPayloadSchema)

export default createGroupEmitTargetAndPayloadSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import updateGroupEmitTargetSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/updateGroupEmitTarget.schema'
import updateGroupEmitPayloadSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/updateGroupEmitPayload.schema'

const updateGroupEmitTargetAndPayloadSchema: SpruceSchemas.Adventure.v2022_09_09.UpdateGroupEmitTargetAndPayloadSchema  = {
	id: 'updateGroupEmitTargetAndPayload',
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
	                options: {schema: updateGroupEmitTargetSchema_v2022_09_09,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: updateGroupEmitPayloadSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateGroupEmitTargetAndPayloadSchema)

export default updateGroupEmitTargetAndPayloadSchema

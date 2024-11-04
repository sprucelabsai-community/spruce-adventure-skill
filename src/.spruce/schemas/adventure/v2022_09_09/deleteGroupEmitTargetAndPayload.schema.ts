import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import deleteGroupEmitTargetSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/deleteGroupEmitTarget.schema'

const deleteGroupEmitTargetAndPayloadSchema: SpruceSchemas.Adventure.v2022_09_09.DeleteGroupEmitTargetAndPayloadSchema  = {
	id: 'deleteGroupEmitTargetAndPayload',
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
	                options: {schema: deleteGroupEmitTargetSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(deleteGroupEmitTargetAndPayloadSchema)

export default deleteGroupEmitTargetAndPayloadSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import cancelEmitPayloadSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/cancelEmitPayload.schema'

const cancelEmitTargetAndPayloadSchema: SpruceSchemas.Adventure.v2022_09_09.CancelEmitTargetAndPayloadSchema  = {
	id: 'cancelEmitTargetAndPayload',
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
	                options: {schema: cancelEmitPayloadSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(cancelEmitTargetAndPayloadSchema)

export default cancelEmitTargetAndPayloadSchema

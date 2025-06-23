import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import createConnectionEmitTargetSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/createConnectionEmitTarget.schema'

const createConnectionEmitTargetAndPayloadSchema: SpruceSchemas.Adventure.v2022_09_09.CreateConnectionEmitTargetAndPayloadSchema  = {
	id: 'createConnectionEmitTargetAndPayload',
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
	                options: {schema: createConnectionEmitTargetSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createConnectionEmitTargetAndPayloadSchema)

export default createConnectionEmitTargetAndPayloadSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import acceptConnectionEmitTargetSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/acceptConnectionEmitTarget.schema'

const eventsEmitTargetAndPayloadSchema: SpruceSchemas.Adventure.v2022_09_09.EventsEmitTargetAndPayloadSchema  = {
	id: 'eventsEmitTargetAndPayload',
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
	                options: {schema: acceptConnectionEmitTargetSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(eventsEmitTargetAndPayloadSchema)

export default eventsEmitTargetAndPayloadSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import myEventStoreAmazingEventEmitTargetSchema_v2021_10_12 from '#spruce/schemas/eventStoreTestSkill1634072151294Count25/v2021_10_12/myEventStoreAmazingEventEmitTarget.schema'
import myEventStoreAmazingEventEmitPayloadSchema_v2021_10_12 from '#spruce/schemas/eventStoreTestSkill1634072151294Count25/v2021_10_12/myEventStoreAmazingEventEmitPayload.schema'

const myEventStoreAmazingEventEmitTargetAndPayloadSchema: SpruceSchemas.EventStoreTestSkill1634072151294Count25.v2021_10_12.MyEventStoreAmazingEventEmitTargetAndPayloadSchema  = {
	id: 'myEventStoreAmazingEventEmitTargetAndPayload',
	version: 'v2021_10_12',
	namespace: 'EventStoreTestSkill1634072151294Count25',
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
	                options: {schema: myEventStoreAmazingEventEmitTargetSchema_v2021_10_12,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: myEventStoreAmazingEventEmitPayloadSchema_v2021_10_12,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(myEventStoreAmazingEventEmitTargetAndPayloadSchema)

export default myEventStoreAmazingEventEmitTargetAndPayloadSchema

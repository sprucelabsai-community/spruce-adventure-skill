import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import myEventStoreAmazingEventEmitTargetSchema_v2021_10_07 from '#spruce/schemas/eventStoreTestSkill1633567500935Count54/v2021_10_07/myEventStoreAmazingEventEmitTarget.schema'
import myEventStoreAmazingEventEmitPayloadSchema_v2021_10_07 from '#spruce/schemas/eventStoreTestSkill1633567500935Count54/v2021_10_07/myEventStoreAmazingEventEmitPayload.schema'

const myEventStoreAmazingEventEmitTargetAndPayloadSchema: SpruceSchemas.EventStoreTestSkill1633567500935Count54.v2021_10_07.MyEventStoreAmazingEventEmitTargetAndPayloadSchema  = {
	id: 'myEventStoreAmazingEventEmitTargetAndPayload',
	version: 'v2021_10_07',
	namespace: 'EventStoreTestSkill1633567500935Count54',
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
	                options: {schema: myEventStoreAmazingEventEmitTargetSchema_v2021_10_07,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: myEventStoreAmazingEventEmitPayloadSchema_v2021_10_07,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(myEventStoreAmazingEventEmitTargetAndPayloadSchema)

export default myEventStoreAmazingEventEmitTargetAndPayloadSchema

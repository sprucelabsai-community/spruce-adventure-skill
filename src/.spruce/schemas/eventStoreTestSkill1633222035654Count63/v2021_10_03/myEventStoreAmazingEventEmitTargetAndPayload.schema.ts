import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import myEventStoreAmazingEventEmitTargetSchema_v2021_10_03 from '#spruce/schemas/eventStoreTestSkill1633222035654Count63/v2021_10_03/myEventStoreAmazingEventEmitTarget.schema'
import myEventStoreAmazingEventEmitPayloadSchema_v2021_10_03 from '#spruce/schemas/eventStoreTestSkill1633222035654Count63/v2021_10_03/myEventStoreAmazingEventEmitPayload.schema'

const myEventStoreAmazingEventEmitTargetAndPayloadSchema: SpruceSchemas.EventStoreTestSkill1633222035654Count63.v2021_10_03.MyEventStoreAmazingEventEmitTargetAndPayloadSchema  = {
	id: 'myEventStoreAmazingEventEmitTargetAndPayload',
	version: 'v2021_10_03',
	namespace: 'EventStoreTestSkill1633222035654Count63',
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
	                options: {schema: myEventStoreAmazingEventEmitTargetSchema_v2021_10_03,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: myEventStoreAmazingEventEmitPayloadSchema_v2021_10_03,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(myEventStoreAmazingEventEmitTargetAndPayloadSchema)

export default myEventStoreAmazingEventEmitTargetAndPayloadSchema

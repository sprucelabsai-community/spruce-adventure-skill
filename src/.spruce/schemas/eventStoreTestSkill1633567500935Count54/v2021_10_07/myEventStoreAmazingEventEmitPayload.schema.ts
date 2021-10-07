import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const myEventStoreAmazingEventEmitPayloadSchema: SpruceSchemas.EventStoreTestSkill1633567500935Count54.v2021_10_07.MyEventStoreAmazingEventEmitPayloadSchema  = {
	id: 'myEventStoreAmazingEventEmitPayload',
	version: 'v2021_10_07',
	namespace: 'EventStoreTestSkill1633567500935Count54',
	name: '',
	    fields: {
	            /** Update me. */
	            'aTextField': {
	                label: 'Update me',
	                type: 'text',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(myEventStoreAmazingEventEmitPayloadSchema)

export default myEventStoreAmazingEventEmitPayloadSchema

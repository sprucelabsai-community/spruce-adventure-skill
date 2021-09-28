import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const myEventStoreAmazingEventEmitPayloadSchema: SpruceSchemas.EventStoreTestSkill1632790048373Count82.v2021_09_28.MyEventStoreAmazingEventEmitPayloadSchema  = {
	id: 'myEventStoreAmazingEventEmitPayload',
	version: 'v2021_09_28',
	namespace: 'EventStoreTestSkill1632790048373Count82',
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

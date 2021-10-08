import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const myEventStoreAmazingEventResponsePayloadSchema: SpruceSchemas.EventStoreTestSkill1633723569370Count75.v2021_10_08.MyEventStoreAmazingEventResponsePayloadSchema  = {
	id: 'myEventStoreAmazingEventResponsePayload',
	version: 'v2021_10_08',
	namespace: 'EventStoreTestSkill1633723569370Count75',
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

SchemaRegistry.getInstance().trackSchema(myEventStoreAmazingEventResponsePayloadSchema)

export default myEventStoreAmazingEventResponsePayloadSchema

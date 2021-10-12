import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const myEventStoreAmazingEventEmitTargetSchema: SpruceSchemas.EventStoreTestSkill1634072151294Count25.v2021_10_12.MyEventStoreAmazingEventEmitTargetSchema  = {
	id: 'myEventStoreAmazingEventEmitTarget',
	version: 'v2021_10_12',
	namespace: 'EventStoreTestSkill1634072151294Count25',
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

SchemaRegistry.getInstance().trackSchema(myEventStoreAmazingEventEmitTargetSchema)

export default myEventStoreAmazingEventEmitTargetSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const myEventStoreAmazingEventEmitTargetSchema: SpruceSchemas.EventStoreTestSkill1632791103601Count34.v2021_09_28.MyEventStoreAmazingEventEmitTargetSchema  = {
	id: 'myEventStoreAmazingEventEmitTarget',
	version: 'v2021_09_28',
	namespace: 'EventStoreTestSkill1632791103601Count34',
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

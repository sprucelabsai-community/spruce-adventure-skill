import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const myEventStoreAmazingEventEmitTargetSchema: SpruceSchemas.EventStoreTestSkill1633013298728Count85.v2021_09_30.MyEventStoreAmazingEventEmitTargetSchema  = {
	id: 'myEventStoreAmazingEventEmitTarget',
	version: 'v2021_09_30',
	namespace: 'EventStoreTestSkill1633013298728Count85',
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

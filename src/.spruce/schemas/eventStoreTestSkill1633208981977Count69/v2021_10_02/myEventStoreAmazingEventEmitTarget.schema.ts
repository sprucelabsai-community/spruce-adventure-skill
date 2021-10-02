import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const myEventStoreAmazingEventEmitTargetSchema: SpruceSchemas.EventStoreTestSkill1633208981977Count69.v2021_10_02.MyEventStoreAmazingEventEmitTargetSchema  = {
	id: 'myEventStoreAmazingEventEmitTarget',
	version: 'v2021_10_02',
	namespace: 'EventStoreTestSkill1633208981977Count69',
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

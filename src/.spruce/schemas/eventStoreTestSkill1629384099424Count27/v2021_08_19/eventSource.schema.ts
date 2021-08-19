import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const eventSourceSchema: SpruceSchemas.EventStoreTestSkill1629384099424Count27.v2021_08_19.EventSourceSchema  = {
	id: 'eventSource',
	version: 'v2021_08_19',
	namespace: 'EventStoreTestSkill1629384099424Count27',
	name: '',
	    fields: {
	            /** Proxy token. */
	            'proxyToken': {
	                label: 'Proxy token',
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(eventSourceSchema)

export default eventSourceSchema

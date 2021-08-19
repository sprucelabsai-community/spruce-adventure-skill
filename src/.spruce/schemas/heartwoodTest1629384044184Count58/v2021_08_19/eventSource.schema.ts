import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const eventSourceSchema: SpruceSchemas.HeartwoodTest1629384044184Count58.v2021_08_19.EventSourceSchema  = {
	id: 'eventSource',
	version: 'v2021_08_19',
	namespace: 'HeartwoodTest1629384044184Count58',
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

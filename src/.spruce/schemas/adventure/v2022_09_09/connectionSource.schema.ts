import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const connectionSourceSchema: SpruceSchemas.Adventure.v2022_09_09.ConnectionSourceSchema  = {
	id: 'connectionSource',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'personId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(connectionSourceSchema)

export default connectionSourceSchema

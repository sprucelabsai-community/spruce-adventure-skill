import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const groupSourceSchema: SpruceSchemas.Adventure.v2022_09_09.GroupSourceSchema  = {
	id: 'groupSource',
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

SchemaRegistry.getInstance().trackSchema(groupSourceSchema)

export default groupSourceSchema

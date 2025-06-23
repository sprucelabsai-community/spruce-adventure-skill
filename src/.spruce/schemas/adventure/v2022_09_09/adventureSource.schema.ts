import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const adventureSourceSchema: SpruceSchemas.Adventure.v2022_09_09.AdventureSourceSchema  = {
	id: 'adventureSource',
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

SchemaRegistry.getInstance().trackSchema(adventureSourceSchema)

export default adventureSourceSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const adventureTargetSchema: SpruceSchemas.Adventure.v2022_09_09.AdventureTargetSchema  = {
	id: 'adventureTarget',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'groupId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(adventureTargetSchema)

export default adventureTargetSchema

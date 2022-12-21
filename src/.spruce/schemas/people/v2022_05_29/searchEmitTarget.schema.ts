import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const searchEmitTargetSchema: SpruceSchemas.People.v2022_05_29.SearchEmitTargetSchema  = {
	id: 'searchEmitTarget',
	version: 'v2022_05_29',
	namespace: 'People',
	name: '',
	    fields: {
	            /** . */
	            'organizationId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(searchEmitTargetSchema)

export default searchEmitTargetSchema

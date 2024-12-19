import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const searchPersonSchema: SpruceSchemas.People.v2022_05_29.SearchPersonSchema  = {
	id: 'searchPerson',
	version: 'v2022_05_29',
	namespace: 'People',
	name: '',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'fullName': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'phone': {
	                type: 'phone',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(searchPersonSchema)

export default searchPersonSchema

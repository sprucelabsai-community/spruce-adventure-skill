import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const adventureSchema: SpruceSchemas.Adventure.v2022_09_09.AdventureSchema  = {
	id: 'adventure',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: 'Adventure',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** What are you gonna do?. Heads up, you can only have 1 adventure at a time! */
	            'what': {
	                label: 'What are you gonna do?',
	                type: 'text',
	                isRequired: true,
	                hint: 'Heads up, you can only have 1 adventure at a time!',
	                options: undefined
	            },
	            /** When are you gonna do it?. */
	            'when': {
	                label: 'When are you gonna do it?',
	                type: 'dateTime',
	                isRequired: true,
	                options: undefined
	            },
	            /** Where are you going to do it?. */
	            'where': {
	                label: 'Where are you going to do it?',
	                type: 'address',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(adventureSchema)

export default adventureSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const postAdventureSchema: SpruceSchemas.Adventure.v2022_09_09.PostAdventureSchema  = {
	id: 'postAdventure',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
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

SchemaRegistry.getInstance().trackSchema(postAdventureSchema)

export default postAdventureSchema

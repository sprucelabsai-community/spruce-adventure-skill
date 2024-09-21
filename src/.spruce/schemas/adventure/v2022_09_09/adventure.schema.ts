import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import adventureTargetSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/adventureTarget.schema'
import adventureSourceSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/adventureSource.schema'

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
	            /** What are you gonna do?. Describe the adventure! This is what I'll message to your friends! Heads up, you can only have 1 adventure at a time! */
	            'what': {
	                label: 'What are you gonna do?',
	                type: 'text',
	                isRequired: true,
	                hint: 'Describe the adventure! This is what I\'ll message to your friends! Heads up, you can only have 1 adventure at a time!',
	                options: undefined
	            },
	            /** When are you gonna do it?. */
	            'when': {
	                label: 'When are you gonna do it?',
	                type: 'dateTime',
	                isRequired: true,
	                options: undefined
	            },
	            /** Where are you gonna to do it?. */
	            'where': {
	                label: 'Where are you gonna to do it?',
	                type: 'address',
	                isRequired: true,
	                options: undefined
	            },
	            /** Who is in?. */
	            'whosIn': {
	                label: 'Who is in?',
	                type: 'id',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: undefined
	            },
	            /** Who is out?. */
	            'whosOut': {
	                label: 'Who is out?',
	                type: 'id',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: undefined
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                options: {schema: adventureTargetSchema_v2022_09_09,}
	            },
	            /** . */
	            'source': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: adventureSourceSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(adventureSchema)

export default adventureSchema

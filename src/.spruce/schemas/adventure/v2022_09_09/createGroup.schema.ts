import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const createGroupSchema: SpruceSchemas.Adventure.v2022_09_09.CreateGroupSchema  = {
	id: 'createGroup',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** Name. Give your group a helpful name, like "Besties" or "Work Squad" */
	            'title': {
	                label: 'Name',
	                type: 'text',
	                isRequired: true,
	                hint: 'Give your group a helpful name, like "Besties" or "Work Squad"',
	                options: undefined
	            },
	            /** Description. */
	            'description': {
	                label: 'Description',
	                type: 'text',
	                options: undefined
	            },
	            /** . */
	            'people': {
	                type: 'id',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createGroupSchema)

export default createGroupSchema

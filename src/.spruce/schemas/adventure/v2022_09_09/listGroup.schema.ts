import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listGroupSchema: SpruceSchemas.Adventure.v2022_09_09.ListGroupSchema  = {
	id: 'listGroup',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
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
	            /** . */
	            'isMine': {
	                type: 'boolean',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listGroupSchema)

export default listGroupSchema

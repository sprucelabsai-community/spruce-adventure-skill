import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import groupSourceSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/groupSource.schema'

const groupSchema: SpruceSchemas.Adventure.v2022_09_09.GroupSchema  = {
	id: 'group',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: 'Group',
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
	            'source': {
	                type: 'schema',
	                isPrivate: true,
	                isRequired: true,
	                options: {schema: groupSourceSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(groupSchema)

export default groupSchema

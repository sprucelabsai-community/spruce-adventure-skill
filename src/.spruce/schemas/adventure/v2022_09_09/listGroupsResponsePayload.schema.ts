import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import listGroupSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/listGroup.schema'

const listGroupsResponsePayloadSchema: SpruceSchemas.Adventure.v2022_09_09.ListGroupsResponsePayloadSchema  = {
	id: 'listGroupsResponsePayload',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'groups': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: listGroupSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listGroupsResponsePayloadSchema)

export default listGroupsResponsePayloadSchema

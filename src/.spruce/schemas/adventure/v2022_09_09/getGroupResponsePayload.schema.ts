import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import getGroupSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/getGroup.schema'

const getGroupResponsePayloadSchema: SpruceSchemas.Adventure.v2022_09_09.GetGroupResponsePayloadSchema  = {
	id: 'getGroupResponsePayload',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'group': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: getGroupSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getGroupResponsePayloadSchema)

export default getGroupResponsePayloadSchema

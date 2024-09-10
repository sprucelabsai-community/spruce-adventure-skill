import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import createGroupResponseSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/createGroupResponse.schema'

const createGroupResponsePayloadSchema: SpruceSchemas.Adventure.v2022_09_09.CreateGroupResponsePayloadSchema  = {
	id: 'createGroupResponsePayload',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'group': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: createGroupResponseSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createGroupResponsePayloadSchema)

export default createGroupResponsePayloadSchema

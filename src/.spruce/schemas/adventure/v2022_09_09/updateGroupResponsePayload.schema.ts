import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import updateGroupResponseSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/updateGroupResponse.schema'

const updateGroupResponsePayloadSchema: SpruceSchemas.Adventure.v2022_09_09.UpdateGroupResponsePayloadSchema  = {
	id: 'updateGroupResponsePayload',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'group': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: updateGroupResponseSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateGroupResponsePayloadSchema)

export default updateGroupResponsePayloadSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import updateGroupSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/updateGroup.schema'

const updateGroupEmitPayloadSchema: SpruceSchemas.Adventure.v2022_09_09.UpdateGroupEmitPayloadSchema  = {
	id: 'updateGroupEmitPayload',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'group': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: updateGroupSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateGroupEmitPayloadSchema)

export default updateGroupEmitPayloadSchema

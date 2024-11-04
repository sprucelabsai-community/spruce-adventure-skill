import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import createGroupSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/createGroup.schema'

const createGroupEmitPayloadSchema: SpruceSchemas.Adventure.v2022_09_09.CreateGroupEmitPayloadSchema  = {
	id: 'createGroupEmitPayload',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'group': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: createGroupSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createGroupEmitPayloadSchema)

export default createGroupEmitPayloadSchema

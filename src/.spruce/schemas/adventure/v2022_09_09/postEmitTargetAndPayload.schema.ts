import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import postEmitTargetSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/postEmitTarget.schema'
import postEmitPayloadSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/postEmitPayload.schema'

const postEmitTargetAndPayloadSchema: SpruceSchemas.Adventure.v2022_09_09.PostEmitTargetAndPayloadSchema  = {
	id: 'postEmitTargetAndPayload',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2021_09_13,}
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                options: {schema: postEmitTargetSchema_v2022_09_09,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: postEmitPayloadSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(postEmitTargetAndPayloadSchema)

export default postEmitTargetAndPayloadSchema

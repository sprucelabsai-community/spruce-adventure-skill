import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import postAdventureSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/postAdventure.schema'

const postEmitPayloadSchema: SpruceSchemas.Adventure.v2022_09_09.PostEmitPayloadSchema  = {
	id: 'postEmitPayload',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'adventure': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: postAdventureSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(postEmitPayloadSchema)

export default postEmitPayloadSchema

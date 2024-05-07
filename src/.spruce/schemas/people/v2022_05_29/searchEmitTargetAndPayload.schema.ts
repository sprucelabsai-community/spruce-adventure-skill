import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import searchEmitTargetSchema_v2022_05_29 from '#spruce/schemas/people/v2022_05_29/searchEmitTarget.schema'
import searchEmitPayloadSchema_v2022_05_29 from '#spruce/schemas/people/v2022_05_29/searchEmitPayload.schema'

const searchEmitTargetAndPayloadSchema: SpruceSchemas.People.v2022_05_29.SearchEmitTargetAndPayloadSchema  = {
	id: 'searchEmitTargetAndPayload',
	version: 'v2022_05_29',
	namespace: 'People',
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
	                options: {schema: searchEmitTargetSchema_v2022_05_29,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: searchEmitPayloadSchema_v2022_05_29,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(searchEmitTargetAndPayloadSchema)

export default searchEmitTargetAndPayloadSchema

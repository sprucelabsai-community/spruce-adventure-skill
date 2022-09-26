import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import searchPersonSchema_v2022_05_29 from '#spruce/schemas/people/v2022_05_29/searchPerson.schema'

const searchResponsePayloadSchema: SpruceSchemas.People.v2022_05_29.SearchResponsePayloadSchema  = {
	id: 'searchResponsePayload',
	version: 'v2022_05_29',
	namespace: 'People',
	name: '',
	    fields: {
	            /** . */
	            'people': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: searchPersonSchema_v2022_05_29,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(searchResponsePayloadSchema)

export default searchResponsePayloadSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import adventureWithPersonSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/adventureWithPerson.schema'

const listResponsePayloadSchema: SpruceSchemas.Adventure.v2022_09_09.ListResponsePayloadSchema  = {
	id: 'listResponsePayload',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'adventures': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: adventureWithPersonSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listResponsePayloadSchema)

export default listResponsePayloadSchema

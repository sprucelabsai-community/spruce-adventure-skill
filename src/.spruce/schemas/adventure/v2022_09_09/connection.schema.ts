import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import connectionTargetSourceSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/connectionTargetSource.schema'

const connectionSchema: SpruceSchemas.Adventure.v2022_09_09.ConnectionSchema  = {
	id: 'connection',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: 'Connection',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'isConfirmed': {
	                type: 'boolean',
	                options: undefined
	            },
	            /** . */
	            'source': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: connectionTargetSourceSchema_v2022_09_09,}
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: connectionTargetSourceSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(connectionSchema)

export default connectionSchema

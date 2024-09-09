import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import connectionSourceSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/connectionSource.schema'
import connectionTargetSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/connectionTarget.schema'

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
	                options: {schema: connectionSourceSchema_v2022_09_09,}
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                options: {schema: connectionTargetSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(connectionSchema)

export default connectionSchema

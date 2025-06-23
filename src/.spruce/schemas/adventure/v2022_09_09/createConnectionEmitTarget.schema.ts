import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const createConnectionEmitTargetSchema: SpruceSchemas.Adventure.v2022_09_09.CreateConnectionEmitTargetSchema  = {
	id: 'createConnectionEmitTarget',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'groupId': {
	                type: 'text',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createConnectionEmitTargetSchema)

export default createConnectionEmitTargetSchema

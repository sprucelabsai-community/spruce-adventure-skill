import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const deleteGroupEmitTargetSchema: SpruceSchemas.Adventure.v2022_09_09.DeleteGroupEmitTargetSchema  = {
	id: 'deleteGroupEmitTarget',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'groupId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(deleteGroupEmitTargetSchema)

export default deleteGroupEmitTargetSchema

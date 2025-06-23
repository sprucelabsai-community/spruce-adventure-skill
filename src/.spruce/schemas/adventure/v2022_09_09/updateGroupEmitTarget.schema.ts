import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const updateGroupEmitTargetSchema: SpruceSchemas.Adventure.v2022_09_09.UpdateGroupEmitTargetSchema  = {
	id: 'updateGroupEmitTarget',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateGroupEmitTargetSchema)

export default updateGroupEmitTargetSchema

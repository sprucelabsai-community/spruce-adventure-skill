import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getGroupEmitTargetSchema: SpruceSchemas.Adventure.v2022_09_09.GetGroupEmitTargetSchema  = {
	id: 'getGroupEmitTarget',
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

SchemaRegistry.getInstance().trackSchema(getGroupEmitTargetSchema)

export default getGroupEmitTargetSchema

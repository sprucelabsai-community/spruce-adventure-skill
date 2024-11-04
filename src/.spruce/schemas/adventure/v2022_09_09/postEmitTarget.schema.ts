import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const postEmitTargetSchema: SpruceSchemas.Adventure.v2022_09_09.PostEmitTargetSchema  = {
	id: 'postEmitTarget',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'groupId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(postEmitTargetSchema)

export default postEmitTargetSchema

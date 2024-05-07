import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const acceptConnectionEmitTargetSchema: SpruceSchemas.Adventure.v2022_09_09.AcceptConnectionEmitTargetSchema  = {
	id: 'acceptConnectionEmitTarget',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'connectionId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(acceptConnectionEmitTargetSchema)

export default acceptConnectionEmitTargetSchema

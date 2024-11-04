import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const leaveGroupEmitTargetSchema: SpruceSchemas.Adventure.v2022_09_09.LeaveGroupEmitTargetSchema  = {
	id: 'leaveGroupEmitTarget',
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

SchemaRegistry.getInstance().trackSchema(leaveGroupEmitTargetSchema)

export default leaveGroupEmitTargetSchema

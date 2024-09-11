import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const leaveGroupResponsePayloadSchema: SpruceSchemas.Adventure.v2022_09_09.LeaveGroupResponsePayloadSchema  = {
	id: 'leaveGroupResponsePayload',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'success': {
	                type: 'boolean',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(leaveGroupResponsePayloadSchema)

export default leaveGroupResponsePayloadSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const rsvpResponsePayloadSchema: SpruceSchemas.Adventure.v2022_09_09.RsvpResponsePayloadSchema  = {
	id: 'rsvpResponsePayload',
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

SchemaRegistry.getInstance().trackSchema(rsvpResponsePayloadSchema)

export default rsvpResponsePayloadSchema

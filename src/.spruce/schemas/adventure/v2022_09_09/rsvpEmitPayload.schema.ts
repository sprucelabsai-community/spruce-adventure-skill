import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const rsvpEmitPayloadSchema: SpruceSchemas.Adventure.v2022_09_09.RsvpEmitPayloadSchema  = {
	id: 'rsvpEmitPayload',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'canIMakeIt': {
	                type: 'boolean',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(rsvpEmitPayloadSchema)

export default rsvpEmitPayloadSchema

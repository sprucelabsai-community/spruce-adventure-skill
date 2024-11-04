import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const sendReminderResponsePayloadSchema: SpruceSchemas.Adventure.v2022_09_09.SendReminderResponsePayloadSchema  = {
	id: 'sendReminderResponsePayload',
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

SchemaRegistry.getInstance().trackSchema(sendReminderResponsePayloadSchema)

export default sendReminderResponsePayloadSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import sendReminderEmitTargetSchema_v2022_09_09 from '#spruce/schemas/adventure/v2022_09_09/sendReminderEmitTarget.schema'

const sendReminderEmitTargetAndPayloadSchema: SpruceSchemas.Adventure.v2022_09_09.SendReminderEmitTargetAndPayloadSchema  = {
	id: 'sendReminderEmitTargetAndPayload',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2021_09_13,}
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: sendReminderEmitTargetSchema_v2022_09_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(sendReminderEmitTargetAndPayloadSchema)

export default sendReminderEmitTargetAndPayloadSchema

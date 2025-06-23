import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const sendReminderEmitTargetSchema: SpruceSchemas.Adventure.v2022_09_09.SendReminderEmitTargetSchema  = {
	id: 'sendReminderEmitTarget',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'adventureId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(sendReminderEmitTargetSchema)

export default sendReminderEmitTargetSchema

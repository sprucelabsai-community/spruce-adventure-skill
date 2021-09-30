import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633036115297ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1633036120872Count43.v2021_09_30.TestRegisterSkillViews1633036115297ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1633036115297ResponsePayload',
	version: 'v2021_09_30',
	namespace: 'HeartwoodTest1633036120872Count43',
	name: '',
	    fields: {
	            /** Update me. */
	            'aTextField': {
	                label: 'Update me',
	                type: 'text',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633036115297ResponsePayloadSchema)

export default testRegisterSkillViews1633036115297ResponsePayloadSchema

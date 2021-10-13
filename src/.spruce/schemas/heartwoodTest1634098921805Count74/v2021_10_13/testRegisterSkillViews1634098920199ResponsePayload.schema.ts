import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1634098920199ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1634098921805Count74.v2021_10_13.TestRegisterSkillViews1634098920199ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1634098920199ResponsePayload',
	version: 'v2021_10_13',
	namespace: 'HeartwoodTest1634098921805Count74',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1634098920199ResponsePayloadSchema)

export default testRegisterSkillViews1634098920199ResponsePayloadSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1634086724807ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1634086726243Count39.v2021_10_13.TestRegisterSkillViews1634086724807ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1634086724807ResponsePayload',
	version: 'v2021_10_13',
	namespace: 'HeartwoodTest1634086726243Count39',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1634086724807ResponsePayloadSchema)

export default testRegisterSkillViews1634086724807ResponsePayloadSchema

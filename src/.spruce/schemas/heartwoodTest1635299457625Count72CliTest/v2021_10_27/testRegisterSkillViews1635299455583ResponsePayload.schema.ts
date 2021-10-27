import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1635299455583ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1635299457625Count72CliTest.v2021_10_27.TestRegisterSkillViews1635299455583ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1635299455583ResponsePayload',
	version: 'v2021_10_27',
	namespace: 'HeartwoodTest1635299457625Count72CliTest',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1635299455583ResponsePayloadSchema)

export default testRegisterSkillViews1635299455583ResponsePayloadSchema

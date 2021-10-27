import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1635308789521EmitPayloadSchema: SpruceSchemas.HeartwoodTest1635308795844Count20CliTest.v2021_10_27.TestRegisterSkillViews1635308789521EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1635308789521EmitPayload',
	version: 'v2021_10_27',
	namespace: 'HeartwoodTest1635308795844Count20CliTest',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1635308789521EmitPayloadSchema)

export default testRegisterSkillViews1635308789521EmitPayloadSchema

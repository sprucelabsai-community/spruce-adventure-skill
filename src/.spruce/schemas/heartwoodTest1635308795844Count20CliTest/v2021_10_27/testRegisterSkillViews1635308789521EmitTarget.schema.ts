import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1635308789521EmitTargetSchema: SpruceSchemas.HeartwoodTest1635308795844Count20CliTest.v2021_10_27.TestRegisterSkillViews1635308789521EmitTargetSchema  = {
	id: 'testRegisterSkillViews1635308789521EmitTarget',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1635308789521EmitTargetSchema)

export default testRegisterSkillViews1635308789521EmitTargetSchema

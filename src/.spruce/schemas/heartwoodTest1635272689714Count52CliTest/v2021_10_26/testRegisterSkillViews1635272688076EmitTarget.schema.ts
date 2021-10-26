import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1635272688076EmitTargetSchema: SpruceSchemas.HeartwoodTest1635272689714Count52CliTest.v2021_10_26.TestRegisterSkillViews1635272688076EmitTargetSchema  = {
	id: 'testRegisterSkillViews1635272688076EmitTarget',
	version: 'v2021_10_26',
	namespace: 'HeartwoodTest1635272689714Count52CliTest',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1635272688076EmitTargetSchema)

export default testRegisterSkillViews1635272688076EmitTargetSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1635281368927EmitTargetSchema: SpruceSchemas.HeartwoodTest1635281370773Count68CliTest.v2021_10_26.TestRegisterSkillViews1635281368927EmitTargetSchema  = {
	id: 'testRegisterSkillViews1635281368927EmitTarget',
	version: 'v2021_10_26',
	namespace: 'HeartwoodTest1635281370773Count68CliTest',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1635281368927EmitTargetSchema)

export default testRegisterSkillViews1635281368927EmitTargetSchema

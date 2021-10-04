import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633337308032EmitTargetSchema: SpruceSchemas.HeartwoodTest1633337310319Count61.v2021_10_04.TestRegisterSkillViews1633337308032EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633337308032EmitTarget',
	version: 'v2021_10_04',
	namespace: 'HeartwoodTest1633337310319Count61',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633337308032EmitTargetSchema)

export default testRegisterSkillViews1633337308032EmitTargetSchema

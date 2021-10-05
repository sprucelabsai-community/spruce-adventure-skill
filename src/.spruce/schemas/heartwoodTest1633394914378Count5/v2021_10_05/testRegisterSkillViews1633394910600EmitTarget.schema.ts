import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633394910600EmitTargetSchema: SpruceSchemas.HeartwoodTest1633394914378Count5.v2021_10_05.TestRegisterSkillViews1633394910600EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633394910600EmitTarget',
	version: 'v2021_10_05',
	namespace: 'HeartwoodTest1633394914378Count5',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633394910600EmitTargetSchema)

export default testRegisterSkillViews1633394910600EmitTargetSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1634925034960EmitTargetSchema: SpruceSchemas.HeartwoodTest1634925037508Count87.v2021_10_22.TestRegisterSkillViews1634925034960EmitTargetSchema  = {
	id: 'testRegisterSkillViews1634925034960EmitTarget',
	version: 'v2021_10_22',
	namespace: 'HeartwoodTest1634925037508Count87',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1634925034960EmitTargetSchema)

export default testRegisterSkillViews1634925034960EmitTargetSchema

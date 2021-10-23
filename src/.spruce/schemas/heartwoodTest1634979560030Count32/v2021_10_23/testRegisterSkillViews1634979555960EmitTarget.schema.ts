import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1634979555960EmitTargetSchema: SpruceSchemas.HeartwoodTest1634979560030Count32.v2021_10_23.TestRegisterSkillViews1634979555960EmitTargetSchema  = {
	id: 'testRegisterSkillViews1634979555960EmitTarget',
	version: 'v2021_10_23',
	namespace: 'HeartwoodTest1634979560030Count32',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1634979555960EmitTargetSchema)

export default testRegisterSkillViews1634979555960EmitTargetSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1635110152420EmitTargetSchema: SpruceSchemas.HeartwoodTest1635110153874Count38.v2021_10_24.TestRegisterSkillViews1635110152420EmitTargetSchema  = {
	id: 'testRegisterSkillViews1635110152420EmitTarget',
	version: 'v2021_10_24',
	namespace: 'HeartwoodTest1635110153874Count38',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1635110152420EmitTargetSchema)

export default testRegisterSkillViews1635110152420EmitTargetSchema

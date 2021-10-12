import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1634049904958EmitTargetSchema: SpruceSchemas.HeartwoodTest1634049906948Count12.v2021_10_12.TestRegisterSkillViews1634049904958EmitTargetSchema  = {
	id: 'testRegisterSkillViews1634049904958EmitTarget',
	version: 'v2021_10_12',
	namespace: 'HeartwoodTest1634049906948Count12',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1634049904958EmitTargetSchema)

export default testRegisterSkillViews1634049904958EmitTargetSchema

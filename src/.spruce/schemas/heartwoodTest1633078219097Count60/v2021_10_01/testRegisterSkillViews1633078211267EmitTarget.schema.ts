import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633078211267EmitTargetSchema: SpruceSchemas.HeartwoodTest1633078219097Count60.v2021_10_01.TestRegisterSkillViews1633078211267EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633078211267EmitTarget',
	version: 'v2021_10_01',
	namespace: 'HeartwoodTest1633078219097Count60',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633078211267EmitTargetSchema)

export default testRegisterSkillViews1633078211267EmitTargetSchema

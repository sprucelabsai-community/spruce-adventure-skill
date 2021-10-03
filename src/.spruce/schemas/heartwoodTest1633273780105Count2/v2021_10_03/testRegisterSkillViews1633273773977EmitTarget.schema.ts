import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633273773977EmitTargetSchema: SpruceSchemas.HeartwoodTest1633273780105Count2.v2021_10_03.TestRegisterSkillViews1633273773977EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633273773977EmitTarget',
	version: 'v2021_10_03',
	namespace: 'HeartwoodTest1633273780105Count2',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633273773977EmitTargetSchema)

export default testRegisterSkillViews1633273773977EmitTargetSchema

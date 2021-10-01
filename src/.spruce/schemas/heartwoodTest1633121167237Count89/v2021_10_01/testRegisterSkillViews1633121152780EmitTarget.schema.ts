import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633121152780EmitTargetSchema: SpruceSchemas.HeartwoodTest1633121167237Count89.v2021_10_01.TestRegisterSkillViews1633121152780EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633121152780EmitTarget',
	version: 'v2021_10_01',
	namespace: 'HeartwoodTest1633121167237Count89',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633121152780EmitTargetSchema)

export default testRegisterSkillViews1633121152780EmitTargetSchema

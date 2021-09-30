import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633014449191EmitTargetSchema: SpruceSchemas.HeartwoodTest1633014457204Count51.v2021_09_30.TestRegisterSkillViews1633014449191EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633014449191EmitTarget',
	version: 'v2021_09_30',
	namespace: 'HeartwoodTest1633014457204Count51',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633014449191EmitTargetSchema)

export default testRegisterSkillViews1633014449191EmitTargetSchema

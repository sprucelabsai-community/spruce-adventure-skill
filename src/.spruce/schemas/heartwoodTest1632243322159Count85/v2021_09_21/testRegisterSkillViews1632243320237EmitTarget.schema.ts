import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1632243320237EmitTargetSchema: SpruceSchemas.HeartwoodTest1632243322159Count85.v2021_09_21.TestRegisterSkillViews1632243320237EmitTargetSchema  = {
	id: 'testRegisterSkillViews1632243320237EmitTarget',
	version: 'v2021_09_21',
	namespace: 'HeartwoodTest1632243322159Count85',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632243320237EmitTargetSchema)

export default testRegisterSkillViews1632243320237EmitTargetSchema

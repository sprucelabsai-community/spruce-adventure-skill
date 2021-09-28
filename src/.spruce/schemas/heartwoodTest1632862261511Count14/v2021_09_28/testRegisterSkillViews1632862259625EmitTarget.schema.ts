import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1632862259625EmitTargetSchema: SpruceSchemas.HeartwoodTest1632862261511Count14.v2021_09_28.TestRegisterSkillViews1632862259625EmitTargetSchema  = {
	id: 'testRegisterSkillViews1632862259625EmitTarget',
	version: 'v2021_09_28',
	namespace: 'HeartwoodTest1632862261511Count14',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632862259625EmitTargetSchema)

export default testRegisterSkillViews1632862259625EmitTargetSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633251297754EmitTargetSchema: SpruceSchemas.HeartwoodTest1633251301464Count33.v2021_10_03.TestRegisterSkillViews1633251297754EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633251297754EmitTarget',
	version: 'v2021_10_03',
	namespace: 'HeartwoodTest1633251301464Count33',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633251297754EmitTargetSchema)

export default testRegisterSkillViews1633251297754EmitTargetSchema

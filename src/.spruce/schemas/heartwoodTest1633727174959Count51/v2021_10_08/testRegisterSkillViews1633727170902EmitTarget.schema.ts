import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633727170902EmitTargetSchema: SpruceSchemas.HeartwoodTest1633727174959Count51.v2021_10_08.TestRegisterSkillViews1633727170902EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633727170902EmitTarget',
	version: 'v2021_10_08',
	namespace: 'HeartwoodTest1633727174959Count51',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633727170902EmitTargetSchema)

export default testRegisterSkillViews1633727170902EmitTargetSchema

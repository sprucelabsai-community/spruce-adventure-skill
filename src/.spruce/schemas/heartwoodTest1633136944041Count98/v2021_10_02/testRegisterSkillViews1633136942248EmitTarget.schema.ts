import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633136942248EmitTargetSchema: SpruceSchemas.HeartwoodTest1633136944041Count98.v2021_10_02.TestRegisterSkillViews1633136942248EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633136942248EmitTarget',
	version: 'v2021_10_02',
	namespace: 'HeartwoodTest1633136944041Count98',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633136942248EmitTargetSchema)

export default testRegisterSkillViews1633136942248EmitTargetSchema

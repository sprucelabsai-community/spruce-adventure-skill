import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633221942649EmitTargetSchema: SpruceSchemas.HeartwoodTest1633221948325Count34.v2021_10_03.TestRegisterSkillViews1633221942649EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633221942649EmitTarget',
	version: 'v2021_10_03',
	namespace: 'HeartwoodTest1633221948325Count34',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633221942649EmitTargetSchema)

export default testRegisterSkillViews1633221942649EmitTargetSchema

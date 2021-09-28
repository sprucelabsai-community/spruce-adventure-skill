import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1632804048851EmitTargetSchema: SpruceSchemas.HeartwoodTest1632804055518Count98.v2021_09_28.TestRegisterSkillViews1632804048851EmitTargetSchema  = {
	id: 'testRegisterSkillViews1632804048851EmitTarget',
	version: 'v2021_09_28',
	namespace: 'HeartwoodTest1632804055518Count98',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632804048851EmitTargetSchema)

export default testRegisterSkillViews1632804048851EmitTargetSchema

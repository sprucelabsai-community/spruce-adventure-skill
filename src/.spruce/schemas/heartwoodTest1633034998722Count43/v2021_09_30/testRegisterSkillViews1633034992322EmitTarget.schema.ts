import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633034992322EmitTargetSchema: SpruceSchemas.HeartwoodTest1633034998722Count43.v2021_09_30.TestRegisterSkillViews1633034992322EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633034992322EmitTarget',
	version: 'v2021_09_30',
	namespace: 'HeartwoodTest1633034998722Count43',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633034992322EmitTargetSchema)

export default testRegisterSkillViews1633034992322EmitTargetSchema

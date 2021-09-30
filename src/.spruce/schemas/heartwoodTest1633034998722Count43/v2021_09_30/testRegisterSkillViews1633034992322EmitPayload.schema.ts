import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633034992322EmitPayloadSchema: SpruceSchemas.HeartwoodTest1633034998722Count43.v2021_09_30.TestRegisterSkillViews1633034992322EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1633034992322EmitPayload',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633034992322EmitPayloadSchema)

export default testRegisterSkillViews1633034992322EmitPayloadSchema

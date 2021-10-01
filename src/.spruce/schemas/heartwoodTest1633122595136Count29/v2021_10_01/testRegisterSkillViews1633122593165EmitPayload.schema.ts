import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633122593165EmitPayloadSchema: SpruceSchemas.HeartwoodTest1633122595136Count29.v2021_10_01.TestRegisterSkillViews1633122593165EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1633122593165EmitPayload',
	version: 'v2021_10_01',
	namespace: 'HeartwoodTest1633122595136Count29',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633122593165EmitPayloadSchema)

export default testRegisterSkillViews1633122593165EmitPayloadSchema

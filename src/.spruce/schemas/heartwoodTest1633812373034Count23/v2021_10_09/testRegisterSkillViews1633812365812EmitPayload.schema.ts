import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633812365812EmitPayloadSchema: SpruceSchemas.HeartwoodTest1633812373034Count23.v2021_10_09.TestRegisterSkillViews1633812365812EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1633812365812EmitPayload',
	version: 'v2021_10_09',
	namespace: 'HeartwoodTest1633812373034Count23',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633812365812EmitPayloadSchema)

export default testRegisterSkillViews1633812365812EmitPayloadSchema

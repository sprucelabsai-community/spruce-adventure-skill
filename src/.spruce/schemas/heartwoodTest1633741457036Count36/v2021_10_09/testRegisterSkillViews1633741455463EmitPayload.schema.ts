import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633741455463EmitPayloadSchema: SpruceSchemas.HeartwoodTest1633741457036Count36.v2021_10_09.TestRegisterSkillViews1633741455463EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1633741455463EmitPayload',
	version: 'v2021_10_09',
	namespace: 'HeartwoodTest1633741457036Count36',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633741455463EmitPayloadSchema)

export default testRegisterSkillViews1633741455463EmitPayloadSchema

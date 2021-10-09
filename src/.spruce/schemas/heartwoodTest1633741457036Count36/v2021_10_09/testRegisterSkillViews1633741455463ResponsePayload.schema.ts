import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633741455463ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1633741457036Count36.v2021_10_09.TestRegisterSkillViews1633741455463ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1633741455463ResponsePayload',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633741455463ResponsePayloadSchema)

export default testRegisterSkillViews1633741455463ResponsePayloadSchema

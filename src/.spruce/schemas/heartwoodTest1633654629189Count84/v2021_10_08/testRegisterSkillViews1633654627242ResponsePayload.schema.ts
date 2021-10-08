import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633654627242ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1633654629189Count84.v2021_10_08.TestRegisterSkillViews1633654627242ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1633654627242ResponsePayload',
	version: 'v2021_10_08',
	namespace: 'HeartwoodTest1633654629189Count84',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633654627242ResponsePayloadSchema)

export default testRegisterSkillViews1633654627242ResponsePayloadSchema

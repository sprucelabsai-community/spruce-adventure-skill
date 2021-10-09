import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633792116922ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1633792121267Count24.v2021_10_09.TestRegisterSkillViews1633792116922ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1633792116922ResponsePayload',
	version: 'v2021_10_09',
	namespace: 'HeartwoodTest1633792121267Count24',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633792116922ResponsePayloadSchema)

export default testRegisterSkillViews1633792116922ResponsePayloadSchema

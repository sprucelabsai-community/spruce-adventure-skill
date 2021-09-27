import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1632750749070ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1632750754975Count95.v2021_09_27.TestRegisterSkillViews1632750749070ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1632750749070ResponsePayload',
	version: 'v2021_09_27',
	namespace: 'HeartwoodTest1632750754975Count95',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632750749070ResponsePayloadSchema)

export default testRegisterSkillViews1632750749070ResponsePayloadSchema

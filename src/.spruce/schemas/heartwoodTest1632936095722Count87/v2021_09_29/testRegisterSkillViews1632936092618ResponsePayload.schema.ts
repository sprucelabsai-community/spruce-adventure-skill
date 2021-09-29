import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1632936092618ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1632936095722Count87.v2021_09_29.TestRegisterSkillViews1632936092618ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1632936092618ResponsePayload',
	version: 'v2021_09_29',
	namespace: 'HeartwoodTest1632936095722Count87',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632936092618ResponsePayloadSchema)

export default testRegisterSkillViews1632936092618ResponsePayloadSchema

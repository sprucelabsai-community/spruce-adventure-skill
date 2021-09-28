import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1632790165950ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1632790168401Count50.v2021_09_28.TestRegisterSkillViews1632790165950ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1632790165950ResponsePayload',
	version: 'v2021_09_28',
	namespace: 'HeartwoodTest1632790168401Count50',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632790165950ResponsePayloadSchema)

export default testRegisterSkillViews1632790165950ResponsePayloadSchema

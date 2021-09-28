import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1632791285859ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1632791288180Count52.v2021_09_28.TestRegisterSkillViews1632791285859ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1632791285859ResponsePayload',
	version: 'v2021_09_28',
	namespace: 'HeartwoodTest1632791288180Count52',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632791285859ResponsePayloadSchema)

export default testRegisterSkillViews1632791285859ResponsePayloadSchema

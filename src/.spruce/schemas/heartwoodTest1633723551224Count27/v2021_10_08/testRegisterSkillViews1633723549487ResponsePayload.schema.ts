import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633723549487ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1633723551224Count27.v2021_10_08.TestRegisterSkillViews1633723549487ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1633723549487ResponsePayload',
	version: 'v2021_10_08',
	namespace: 'HeartwoodTest1633723551224Count27',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633723549487ResponsePayloadSchema)

export default testRegisterSkillViews1633723549487ResponsePayloadSchema

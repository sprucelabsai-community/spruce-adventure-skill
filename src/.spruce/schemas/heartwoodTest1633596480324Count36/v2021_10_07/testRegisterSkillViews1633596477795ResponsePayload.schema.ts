import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633596477795ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1633596480324Count36.v2021_10_07.TestRegisterSkillViews1633596477795ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1633596477795ResponsePayload',
	version: 'v2021_10_07',
	namespace: 'HeartwoodTest1633596480324Count36',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633596477795ResponsePayloadSchema)

export default testRegisterSkillViews1633596477795ResponsePayloadSchema

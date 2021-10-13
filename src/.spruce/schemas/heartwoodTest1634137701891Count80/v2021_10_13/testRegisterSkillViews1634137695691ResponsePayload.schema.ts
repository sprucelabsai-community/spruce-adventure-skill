import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1634137695691ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1634137701891Count80.v2021_10_13.TestRegisterSkillViews1634137695691ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1634137695691ResponsePayload',
	version: 'v2021_10_13',
	namespace: 'HeartwoodTest1634137701891Count80',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1634137695691ResponsePayloadSchema)

export default testRegisterSkillViews1634137695691ResponsePayloadSchema

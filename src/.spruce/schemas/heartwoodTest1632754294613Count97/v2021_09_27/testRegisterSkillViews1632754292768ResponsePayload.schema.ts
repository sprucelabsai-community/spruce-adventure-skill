import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1632754292768ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1632754294613Count97.v2021_09_27.TestRegisterSkillViews1632754292768ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1632754292768ResponsePayload',
	version: 'v2021_09_27',
	namespace: 'HeartwoodTest1632754294613Count97',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632754292768ResponsePayloadSchema)

export default testRegisterSkillViews1632754292768ResponsePayloadSchema

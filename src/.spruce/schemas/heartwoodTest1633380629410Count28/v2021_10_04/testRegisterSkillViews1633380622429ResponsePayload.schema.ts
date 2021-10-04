import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633380622429ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1633380629410Count28.v2021_10_04.TestRegisterSkillViews1633380622429ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1633380622429ResponsePayload',
	version: 'v2021_10_04',
	namespace: 'HeartwoodTest1633380629410Count28',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633380622429ResponsePayloadSchema)

export default testRegisterSkillViews1633380622429ResponsePayloadSchema

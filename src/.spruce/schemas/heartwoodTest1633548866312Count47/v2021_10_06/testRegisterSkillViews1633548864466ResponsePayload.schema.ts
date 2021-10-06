import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633548864466ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1633548866312Count47.v2021_10_06.TestRegisterSkillViews1633548864466ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1633548864466ResponsePayload',
	version: 'v2021_10_06',
	namespace: 'HeartwoodTest1633548866312Count47',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633548864466ResponsePayloadSchema)

export default testRegisterSkillViews1633548864466ResponsePayloadSchema

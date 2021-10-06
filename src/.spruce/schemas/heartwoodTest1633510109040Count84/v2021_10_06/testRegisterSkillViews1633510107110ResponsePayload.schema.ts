import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633510107110ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1633510109040Count84.v2021_10_06.TestRegisterSkillViews1633510107110ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1633510107110ResponsePayload',
	version: 'v2021_10_06',
	namespace: 'HeartwoodTest1633510109040Count84',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633510107110ResponsePayloadSchema)

export default testRegisterSkillViews1633510107110ResponsePayloadSchema

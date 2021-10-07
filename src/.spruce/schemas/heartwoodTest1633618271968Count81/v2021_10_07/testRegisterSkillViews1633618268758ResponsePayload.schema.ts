import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633618268758ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1633618271968Count81.v2021_10_07.TestRegisterSkillViews1633618268758ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1633618268758ResponsePayload',
	version: 'v2021_10_07',
	namespace: 'HeartwoodTest1633618271968Count81',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633618268758ResponsePayloadSchema)

export default testRegisterSkillViews1633618268758ResponsePayloadSchema

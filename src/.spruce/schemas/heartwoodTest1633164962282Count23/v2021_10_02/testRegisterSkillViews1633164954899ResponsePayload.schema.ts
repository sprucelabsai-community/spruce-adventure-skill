import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633164954899ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1633164962282Count23.v2021_10_02.TestRegisterSkillViews1633164954899ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1633164954899ResponsePayload',
	version: 'v2021_10_02',
	namespace: 'HeartwoodTest1633164962282Count23',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633164954899ResponsePayloadSchema)

export default testRegisterSkillViews1633164954899ResponsePayloadSchema

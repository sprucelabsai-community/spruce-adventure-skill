import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633105806228ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1633105813068Count41.v2021_10_01.TestRegisterSkillViews1633105806228ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1633105806228ResponsePayload',
	version: 'v2021_10_01',
	namespace: 'HeartwoodTest1633105813068Count41',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633105806228ResponsePayloadSchema)

export default testRegisterSkillViews1633105806228ResponsePayloadSchema

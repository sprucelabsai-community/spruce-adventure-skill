import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1632963907256ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1632963909211Count5.v2021_09_30.TestRegisterSkillViews1632963907256ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1632963907256ResponsePayload',
	version: 'v2021_09_30',
	namespace: 'HeartwoodTest1632963909211Count5',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632963907256ResponsePayloadSchema)

export default testRegisterSkillViews1632963907256ResponsePayloadSchema

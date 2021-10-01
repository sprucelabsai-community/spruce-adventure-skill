import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633049415573ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1633049418118Count15.v2021_10_01.TestRegisterSkillViews1633049415573ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1633049415573ResponsePayload',
	version: 'v2021_10_01',
	namespace: 'HeartwoodTest1633049418118Count15',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633049415573ResponsePayloadSchema)

export default testRegisterSkillViews1633049415573ResponsePayloadSchema

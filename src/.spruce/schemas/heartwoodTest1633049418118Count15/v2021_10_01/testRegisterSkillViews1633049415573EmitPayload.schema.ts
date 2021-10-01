import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633049415573EmitPayloadSchema: SpruceSchemas.HeartwoodTest1633049418118Count15.v2021_10_01.TestRegisterSkillViews1633049415573EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1633049415573EmitPayload',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633049415573EmitPayloadSchema)

export default testRegisterSkillViews1633049415573EmitPayloadSchema

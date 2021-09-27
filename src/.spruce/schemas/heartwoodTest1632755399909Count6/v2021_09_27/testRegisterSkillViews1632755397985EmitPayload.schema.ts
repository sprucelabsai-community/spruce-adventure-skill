import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1632755397985EmitPayloadSchema: SpruceSchemas.HeartwoodTest1632755399909Count6.v2021_09_27.TestRegisterSkillViews1632755397985EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1632755397985EmitPayload',
	version: 'v2021_09_27',
	namespace: 'HeartwoodTest1632755399909Count6',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632755397985EmitPayloadSchema)

export default testRegisterSkillViews1632755397985EmitPayloadSchema

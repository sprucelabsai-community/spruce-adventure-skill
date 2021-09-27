import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1632754292768EmitPayloadSchema: SpruceSchemas.HeartwoodTest1632754294613Count97.v2021_09_27.TestRegisterSkillViews1632754292768EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1632754292768EmitPayload',
	version: 'v2021_09_27',
	namespace: 'HeartwoodTest1632754294613Count97',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632754292768EmitPayloadSchema)

export default testRegisterSkillViews1632754292768EmitPayloadSchema

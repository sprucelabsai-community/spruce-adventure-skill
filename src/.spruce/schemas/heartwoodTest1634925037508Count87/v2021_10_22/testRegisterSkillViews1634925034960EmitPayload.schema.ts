import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1634925034960EmitPayloadSchema: SpruceSchemas.HeartwoodTest1634925037508Count87.v2021_10_22.TestRegisterSkillViews1634925034960EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1634925034960EmitPayload',
	version: 'v2021_10_22',
	namespace: 'HeartwoodTest1634925037508Count87',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1634925034960EmitPayloadSchema)

export default testRegisterSkillViews1634925034960EmitPayloadSchema

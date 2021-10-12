import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1634072237723EmitPayloadSchema: SpruceSchemas.HeartwoodTest1634072239317Count18.v2021_10_12.TestRegisterSkillViews1634072237723EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1634072237723EmitPayload',
	version: 'v2021_10_12',
	namespace: 'HeartwoodTest1634072239317Count18',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1634072237723EmitPayloadSchema)

export default testRegisterSkillViews1634072237723EmitPayloadSchema

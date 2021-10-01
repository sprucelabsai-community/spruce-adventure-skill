import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633078211267EmitPayloadSchema: SpruceSchemas.HeartwoodTest1633078219097Count60.v2021_10_01.TestRegisterSkillViews1633078211267EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1633078211267EmitPayload',
	version: 'v2021_10_01',
	namespace: 'HeartwoodTest1633078219097Count60',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633078211267EmitPayloadSchema)

export default testRegisterSkillViews1633078211267EmitPayloadSchema

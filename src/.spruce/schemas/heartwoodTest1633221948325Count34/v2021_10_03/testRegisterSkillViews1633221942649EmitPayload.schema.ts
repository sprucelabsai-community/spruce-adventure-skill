import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633221942649EmitPayloadSchema: SpruceSchemas.HeartwoodTest1633221948325Count34.v2021_10_03.TestRegisterSkillViews1633221942649EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1633221942649EmitPayload',
	version: 'v2021_10_03',
	namespace: 'HeartwoodTest1633221948325Count34',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633221942649EmitPayloadSchema)

export default testRegisterSkillViews1633221942649EmitPayloadSchema

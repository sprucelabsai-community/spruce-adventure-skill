import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633567614258EmitPayloadSchema: SpruceSchemas.HeartwoodTest1633567623813Count33.v2021_10_07.TestRegisterSkillViews1633567614258EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1633567614258EmitPayload',
	version: 'v2021_10_07',
	namespace: 'HeartwoodTest1633567623813Count33',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633567614258EmitPayloadSchema)

export default testRegisterSkillViews1633567614258EmitPayloadSchema

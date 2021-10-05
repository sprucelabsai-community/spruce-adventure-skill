import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633394910600EmitPayloadSchema: SpruceSchemas.HeartwoodTest1633394914378Count5.v2021_10_05.TestRegisterSkillViews1633394910600EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1633394910600EmitPayload',
	version: 'v2021_10_05',
	namespace: 'HeartwoodTest1633394914378Count5',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633394910600EmitPayloadSchema)

export default testRegisterSkillViews1633394910600EmitPayloadSchema

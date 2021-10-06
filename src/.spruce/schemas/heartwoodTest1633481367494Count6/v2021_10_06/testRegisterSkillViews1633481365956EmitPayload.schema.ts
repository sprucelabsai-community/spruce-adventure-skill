import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633481365956EmitPayloadSchema: SpruceSchemas.HeartwoodTest1633481367494Count6.v2021_10_06.TestRegisterSkillViews1633481365956EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1633481365956EmitPayload',
	version: 'v2021_10_06',
	namespace: 'HeartwoodTest1633481367494Count6',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633481365956EmitPayloadSchema)

export default testRegisterSkillViews1633481365956EmitPayloadSchema

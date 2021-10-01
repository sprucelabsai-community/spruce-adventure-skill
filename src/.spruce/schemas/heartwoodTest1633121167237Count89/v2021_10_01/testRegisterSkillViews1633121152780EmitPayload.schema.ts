import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633121152780EmitPayloadSchema: SpruceSchemas.HeartwoodTest1633121167237Count89.v2021_10_01.TestRegisterSkillViews1633121152780EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1633121152780EmitPayload',
	version: 'v2021_10_01',
	namespace: 'HeartwoodTest1633121167237Count89',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633121152780EmitPayloadSchema)

export default testRegisterSkillViews1633121152780EmitPayloadSchema

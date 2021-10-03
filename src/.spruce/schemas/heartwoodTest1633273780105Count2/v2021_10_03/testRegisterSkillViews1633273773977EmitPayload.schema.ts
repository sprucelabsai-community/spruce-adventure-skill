import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633273773977EmitPayloadSchema: SpruceSchemas.HeartwoodTest1633273780105Count2.v2021_10_03.TestRegisterSkillViews1633273773977EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1633273773977EmitPayload',
	version: 'v2021_10_03',
	namespace: 'HeartwoodTest1633273780105Count2',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633273773977EmitPayloadSchema)

export default testRegisterSkillViews1633273773977EmitPayloadSchema

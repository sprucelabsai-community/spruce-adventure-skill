import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1632494981137EmitPayloadSchema: SpruceSchemas.HeartwoodTest1632494989233Count83.v2021_09_24.TestRegisterSkillViews1632494981137EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1632494981137EmitPayload',
	version: 'v2021_09_24',
	namespace: 'HeartwoodTest1632494989233Count83',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632494981137EmitPayloadSchema)

export default testRegisterSkillViews1632494981137EmitPayloadSchema

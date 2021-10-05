import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633445686496EmitPayloadSchema: SpruceSchemas.HeartwoodTest1633445688362Count97.v2021_10_05.TestRegisterSkillViews1633445686496EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1633445686496EmitPayload',
	version: 'v2021_10_05',
	namespace: 'HeartwoodTest1633445688362Count97',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633445686496EmitPayloadSchema)

export default testRegisterSkillViews1633445686496EmitPayloadSchema

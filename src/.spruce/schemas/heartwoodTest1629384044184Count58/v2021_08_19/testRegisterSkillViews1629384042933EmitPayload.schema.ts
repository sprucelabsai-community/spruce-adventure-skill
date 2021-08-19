import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1629384042933EmitPayloadSchema: SpruceSchemas.HeartwoodTest1629384044184Count58.v2021_08_19.TestRegisterSkillViews1629384042933EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1629384042933EmitPayload',
	version: 'v2021_08_19',
	namespace: 'HeartwoodTest1629384044184Count58',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1629384042933EmitPayloadSchema)

export default testRegisterSkillViews1629384042933EmitPayloadSchema

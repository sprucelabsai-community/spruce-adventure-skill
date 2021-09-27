import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1632776923237EmitPayloadSchema: SpruceSchemas.HeartwoodTest1632776924827Count60.v2021_09_27.TestRegisterSkillViews1632776923237EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1632776923237EmitPayload',
	version: 'v2021_09_27',
	namespace: 'HeartwoodTest1632776924827Count60',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632776923237EmitPayloadSchema)

export default testRegisterSkillViews1632776923237EmitPayloadSchema

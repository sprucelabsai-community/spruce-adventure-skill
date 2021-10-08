import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633704428874EmitPayloadSchema: SpruceSchemas.HeartwoodTest1633704430799Count60.v2021_10_08.TestRegisterSkillViews1633704428874EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1633704428874EmitPayload',
	version: 'v2021_10_08',
	namespace: 'HeartwoodTest1633704430799Count60',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633704428874EmitPayloadSchema)

export default testRegisterSkillViews1633704428874EmitPayloadSchema

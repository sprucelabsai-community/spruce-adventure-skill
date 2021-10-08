import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633654627242EmitPayloadSchema: SpruceSchemas.HeartwoodTest1633654629189Count84.v2021_10_08.TestRegisterSkillViews1633654627242EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1633654627242EmitPayload',
	version: 'v2021_10_08',
	namespace: 'HeartwoodTest1633654629189Count84',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633654627242EmitPayloadSchema)

export default testRegisterSkillViews1633654627242EmitPayloadSchema

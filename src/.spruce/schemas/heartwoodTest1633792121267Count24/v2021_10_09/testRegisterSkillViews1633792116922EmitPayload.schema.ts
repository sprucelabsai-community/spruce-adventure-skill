import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633792116922EmitPayloadSchema: SpruceSchemas.HeartwoodTest1633792121267Count24.v2021_10_09.TestRegisterSkillViews1633792116922EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1633792116922EmitPayload',
	version: 'v2021_10_09',
	namespace: 'HeartwoodTest1633792121267Count24',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633792116922EmitPayloadSchema)

export default testRegisterSkillViews1633792116922EmitPayloadSchema

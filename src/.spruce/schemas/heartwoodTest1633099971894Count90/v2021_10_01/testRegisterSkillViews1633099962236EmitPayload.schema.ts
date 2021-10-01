import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633099962236EmitPayloadSchema: SpruceSchemas.HeartwoodTest1633099971894Count90.v2021_10_01.TestRegisterSkillViews1633099962236EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1633099962236EmitPayload',
	version: 'v2021_10_01',
	namespace: 'HeartwoodTest1633099971894Count90',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633099962236EmitPayloadSchema)

export default testRegisterSkillViews1633099962236EmitPayloadSchema

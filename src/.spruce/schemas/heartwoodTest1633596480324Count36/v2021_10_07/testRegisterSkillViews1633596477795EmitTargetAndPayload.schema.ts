import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633596477795EmitTargetSchema_v2021_10_07 from '#spruce/schemas/heartwoodTest1633596480324Count36/v2021_10_07/testRegisterSkillViews1633596477795EmitTarget.schema'
import testRegisterSkillViews1633596477795EmitPayloadSchema_v2021_10_07 from '#spruce/schemas/heartwoodTest1633596480324Count36/v2021_10_07/testRegisterSkillViews1633596477795EmitPayload.schema'

const testRegisterSkillViews1633596477795EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633596480324Count36.v2021_10_07.TestRegisterSkillViews1633596477795EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633596477795EmitTargetAndPayload',
	version: 'v2021_10_07',
	namespace: 'HeartwoodTest1633596480324Count36',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2021_09_13,}
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633596477795EmitTargetSchema_v2021_10_07,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633596477795EmitPayloadSchema_v2021_10_07,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633596477795EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633596477795EmitTargetAndPayloadSchema

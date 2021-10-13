import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1634098920199EmitTargetSchema_v2021_10_13 from '#spruce/schemas/heartwoodTest1634098921805Count74/v2021_10_13/testRegisterSkillViews1634098920199EmitTarget.schema'
import testRegisterSkillViews1634098920199EmitPayloadSchema_v2021_10_13 from '#spruce/schemas/heartwoodTest1634098921805Count74/v2021_10_13/testRegisterSkillViews1634098920199EmitPayload.schema'

const testRegisterSkillViews1634098920199EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1634098921805Count74.v2021_10_13.TestRegisterSkillViews1634098920199EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1634098920199EmitTargetAndPayload',
	version: 'v2021_10_13',
	namespace: 'HeartwoodTest1634098921805Count74',
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
	                options: {schema: testRegisterSkillViews1634098920199EmitTargetSchema_v2021_10_13,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1634098920199EmitPayloadSchema_v2021_10_13,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1634098920199EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1634098920199EmitTargetAndPayloadSchema

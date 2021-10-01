import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633122593165EmitTargetSchema_v2021_10_01 from '#spruce/schemas/heartwoodTest1633122595136Count29/v2021_10_01/testRegisterSkillViews1633122593165EmitTarget.schema'
import testRegisterSkillViews1633122593165EmitPayloadSchema_v2021_10_01 from '#spruce/schemas/heartwoodTest1633122595136Count29/v2021_10_01/testRegisterSkillViews1633122593165EmitPayload.schema'

const testRegisterSkillViews1633122593165EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633122595136Count29.v2021_10_01.TestRegisterSkillViews1633122593165EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633122593165EmitTargetAndPayload',
	version: 'v2021_10_01',
	namespace: 'HeartwoodTest1633122595136Count29',
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
	                options: {schema: testRegisterSkillViews1633122593165EmitTargetSchema_v2021_10_01,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633122593165EmitPayloadSchema_v2021_10_01,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633122593165EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633122593165EmitTargetAndPayloadSchema

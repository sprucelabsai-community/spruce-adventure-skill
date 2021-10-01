import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633105806228EmitTargetSchema_v2021_10_01 from '#spruce/schemas/heartwoodTest1633105813068Count41/v2021_10_01/testRegisterSkillViews1633105806228EmitTarget.schema'
import testRegisterSkillViews1633105806228EmitPayloadSchema_v2021_10_01 from '#spruce/schemas/heartwoodTest1633105813068Count41/v2021_10_01/testRegisterSkillViews1633105806228EmitPayload.schema'

const testRegisterSkillViews1633105806228EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633105813068Count41.v2021_10_01.TestRegisterSkillViews1633105806228EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633105806228EmitTargetAndPayload',
	version: 'v2021_10_01',
	namespace: 'HeartwoodTest1633105813068Count41',
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
	                options: {schema: testRegisterSkillViews1633105806228EmitTargetSchema_v2021_10_01,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633105806228EmitPayloadSchema_v2021_10_01,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633105806228EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633105806228EmitTargetAndPayloadSchema

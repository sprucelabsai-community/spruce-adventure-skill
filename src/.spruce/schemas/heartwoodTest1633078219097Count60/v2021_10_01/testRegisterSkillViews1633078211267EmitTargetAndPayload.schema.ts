import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633078211267EmitTargetSchema_v2021_10_01 from '#spruce/schemas/heartwoodTest1633078219097Count60/v2021_10_01/testRegisterSkillViews1633078211267EmitTarget.schema'
import testRegisterSkillViews1633078211267EmitPayloadSchema_v2021_10_01 from '#spruce/schemas/heartwoodTest1633078219097Count60/v2021_10_01/testRegisterSkillViews1633078211267EmitPayload.schema'

const testRegisterSkillViews1633078211267EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633078219097Count60.v2021_10_01.TestRegisterSkillViews1633078211267EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633078211267EmitTargetAndPayload',
	version: 'v2021_10_01',
	namespace: 'HeartwoodTest1633078219097Count60',
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
	                options: {schema: testRegisterSkillViews1633078211267EmitTargetSchema_v2021_10_01,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633078211267EmitPayloadSchema_v2021_10_01,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633078211267EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633078211267EmitTargetAndPayloadSchema

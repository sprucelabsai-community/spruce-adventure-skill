import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633034992322EmitTargetSchema_v2021_09_30 from '#spruce/schemas/heartwoodTest1633034998722Count43/v2021_09_30/testRegisterSkillViews1633034992322EmitTarget.schema'
import testRegisterSkillViews1633034992322EmitPayloadSchema_v2021_09_30 from '#spruce/schemas/heartwoodTest1633034998722Count43/v2021_09_30/testRegisterSkillViews1633034992322EmitPayload.schema'

const testRegisterSkillViews1633034992322EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633034998722Count43.v2021_09_30.TestRegisterSkillViews1633034992322EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633034992322EmitTargetAndPayload',
	version: 'v2021_09_30',
	namespace: 'HeartwoodTest1633034998722Count43',
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
	                options: {schema: testRegisterSkillViews1633034992322EmitTargetSchema_v2021_09_30,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633034992322EmitPayloadSchema_v2021_09_30,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633034992322EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633034992322EmitTargetAndPayloadSchema

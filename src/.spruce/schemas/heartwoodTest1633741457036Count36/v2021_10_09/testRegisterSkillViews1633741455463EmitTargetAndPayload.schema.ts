import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633741455463EmitTargetSchema_v2021_10_09 from '#spruce/schemas/heartwoodTest1633741457036Count36/v2021_10_09/testRegisterSkillViews1633741455463EmitTarget.schema'
import testRegisterSkillViews1633741455463EmitPayloadSchema_v2021_10_09 from '#spruce/schemas/heartwoodTest1633741457036Count36/v2021_10_09/testRegisterSkillViews1633741455463EmitPayload.schema'

const testRegisterSkillViews1633741455463EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633741457036Count36.v2021_10_09.TestRegisterSkillViews1633741455463EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633741455463EmitTargetAndPayload',
	version: 'v2021_10_09',
	namespace: 'HeartwoodTest1633741457036Count36',
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
	                options: {schema: testRegisterSkillViews1633741455463EmitTargetSchema_v2021_10_09,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633741455463EmitPayloadSchema_v2021_10_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633741455463EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633741455463EmitTargetAndPayloadSchema

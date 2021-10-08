import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633724711361EmitTargetSchema_v2021_10_08 from '#spruce/schemas/heartwoodTest1633724720825Count65/v2021_10_08/testRegisterSkillViews1633724711361EmitTarget.schema'
import testRegisterSkillViews1633724711361EmitPayloadSchema_v2021_10_08 from '#spruce/schemas/heartwoodTest1633724720825Count65/v2021_10_08/testRegisterSkillViews1633724711361EmitPayload.schema'

const testRegisterSkillViews1633724711361EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633724720825Count65.v2021_10_08.TestRegisterSkillViews1633724711361EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633724711361EmitTargetAndPayload',
	version: 'v2021_10_08',
	namespace: 'HeartwoodTest1633724720825Count65',
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
	                options: {schema: testRegisterSkillViews1633724711361EmitTargetSchema_v2021_10_08,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633724711361EmitPayloadSchema_v2021_10_08,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633724711361EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633724711361EmitTargetAndPayloadSchema

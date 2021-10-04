import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633380622429EmitTargetSchema_v2021_10_04 from '#spruce/schemas/heartwoodTest1633380629410Count28/v2021_10_04/testRegisterSkillViews1633380622429EmitTarget.schema'
import testRegisterSkillViews1633380622429EmitPayloadSchema_v2021_10_04 from '#spruce/schemas/heartwoodTest1633380629410Count28/v2021_10_04/testRegisterSkillViews1633380622429EmitPayload.schema'

const testRegisterSkillViews1633380622429EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633380629410Count28.v2021_10_04.TestRegisterSkillViews1633380622429EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633380622429EmitTargetAndPayload',
	version: 'v2021_10_04',
	namespace: 'HeartwoodTest1633380629410Count28',
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
	                options: {schema: testRegisterSkillViews1633380622429EmitTargetSchema_v2021_10_04,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633380622429EmitPayloadSchema_v2021_10_04,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633380622429EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633380622429EmitTargetAndPayloadSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633812365812EmitTargetSchema_v2021_10_09 from '#spruce/schemas/heartwoodTest1633812373034Count23/v2021_10_09/testRegisterSkillViews1633812365812EmitTarget.schema'
import testRegisterSkillViews1633812365812EmitPayloadSchema_v2021_10_09 from '#spruce/schemas/heartwoodTest1633812373034Count23/v2021_10_09/testRegisterSkillViews1633812365812EmitPayload.schema'

const testRegisterSkillViews1633812365812EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633812373034Count23.v2021_10_09.TestRegisterSkillViews1633812365812EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633812365812EmitTargetAndPayload',
	version: 'v2021_10_09',
	namespace: 'HeartwoodTest1633812373034Count23',
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
	                options: {schema: testRegisterSkillViews1633812365812EmitTargetSchema_v2021_10_09,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633812365812EmitPayloadSchema_v2021_10_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633812365812EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633812365812EmitTargetAndPayloadSchema

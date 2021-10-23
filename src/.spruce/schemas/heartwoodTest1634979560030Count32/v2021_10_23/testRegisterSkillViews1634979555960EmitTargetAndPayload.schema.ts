import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1634979555960EmitTargetSchema_v2021_10_23 from '#spruce/schemas/heartwoodTest1634979560030Count32/v2021_10_23/testRegisterSkillViews1634979555960EmitTarget.schema'
import testRegisterSkillViews1634979555960EmitPayloadSchema_v2021_10_23 from '#spruce/schemas/heartwoodTest1634979560030Count32/v2021_10_23/testRegisterSkillViews1634979555960EmitPayload.schema'

const testRegisterSkillViews1634979555960EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1634979560030Count32.v2021_10_23.TestRegisterSkillViews1634979555960EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1634979555960EmitTargetAndPayload',
	version: 'v2021_10_23',
	namespace: 'HeartwoodTest1634979560030Count32',
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
	                options: {schema: testRegisterSkillViews1634979555960EmitTargetSchema_v2021_10_23,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1634979555960EmitPayloadSchema_v2021_10_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1634979555960EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1634979555960EmitTargetAndPayloadSchema

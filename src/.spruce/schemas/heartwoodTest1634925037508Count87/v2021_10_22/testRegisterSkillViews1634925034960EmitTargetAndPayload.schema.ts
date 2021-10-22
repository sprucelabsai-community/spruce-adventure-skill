import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1634925034960EmitTargetSchema_v2021_10_22 from '#spruce/schemas/heartwoodTest1634925037508Count87/v2021_10_22/testRegisterSkillViews1634925034960EmitTarget.schema'
import testRegisterSkillViews1634925034960EmitPayloadSchema_v2021_10_22 from '#spruce/schemas/heartwoodTest1634925037508Count87/v2021_10_22/testRegisterSkillViews1634925034960EmitPayload.schema'

const testRegisterSkillViews1634925034960EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1634925037508Count87.v2021_10_22.TestRegisterSkillViews1634925034960EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1634925034960EmitTargetAndPayload',
	version: 'v2021_10_22',
	namespace: 'HeartwoodTest1634925037508Count87',
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
	                options: {schema: testRegisterSkillViews1634925034960EmitTargetSchema_v2021_10_22,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1634925034960EmitPayloadSchema_v2021_10_22,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1634925034960EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1634925034960EmitTargetAndPayloadSchema

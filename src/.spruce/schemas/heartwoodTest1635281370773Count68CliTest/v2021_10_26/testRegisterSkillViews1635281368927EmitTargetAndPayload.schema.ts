import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1635281368927EmitTargetSchema_v2021_10_26 from '#spruce/schemas/heartwoodTest1635281370773Count68CliTest/v2021_10_26/testRegisterSkillViews1635281368927EmitTarget.schema'
import testRegisterSkillViews1635281368927EmitPayloadSchema_v2021_10_26 from '#spruce/schemas/heartwoodTest1635281370773Count68CliTest/v2021_10_26/testRegisterSkillViews1635281368927EmitPayload.schema'

const testRegisterSkillViews1635281368927EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1635281370773Count68CliTest.v2021_10_26.TestRegisterSkillViews1635281368927EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1635281368927EmitTargetAndPayload',
	version: 'v2021_10_26',
	namespace: 'HeartwoodTest1635281370773Count68CliTest',
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
	                options: {schema: testRegisterSkillViews1635281368927EmitTargetSchema_v2021_10_26,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1635281368927EmitPayloadSchema_v2021_10_26,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1635281368927EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1635281368927EmitTargetAndPayloadSchema

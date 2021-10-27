import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1635299455583EmitTargetSchema_v2021_10_27 from '#spruce/schemas/heartwoodTest1635299457625Count72CliTest/v2021_10_27/testRegisterSkillViews1635299455583EmitTarget.schema'
import testRegisterSkillViews1635299455583EmitPayloadSchema_v2021_10_27 from '#spruce/schemas/heartwoodTest1635299457625Count72CliTest/v2021_10_27/testRegisterSkillViews1635299455583EmitPayload.schema'

const testRegisterSkillViews1635299455583EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1635299457625Count72CliTest.v2021_10_27.TestRegisterSkillViews1635299455583EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1635299455583EmitTargetAndPayload',
	version: 'v2021_10_27',
	namespace: 'HeartwoodTest1635299457625Count72CliTest',
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
	                options: {schema: testRegisterSkillViews1635299455583EmitTargetSchema_v2021_10_27,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1635299455583EmitPayloadSchema_v2021_10_27,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1635299455583EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1635299455583EmitTargetAndPayloadSchema

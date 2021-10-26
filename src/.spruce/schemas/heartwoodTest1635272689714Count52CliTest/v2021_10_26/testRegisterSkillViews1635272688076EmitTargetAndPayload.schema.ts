import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1635272688076EmitTargetSchema_v2021_10_26 from '#spruce/schemas/heartwoodTest1635272689714Count52CliTest/v2021_10_26/testRegisterSkillViews1635272688076EmitTarget.schema'
import testRegisterSkillViews1635272688076EmitPayloadSchema_v2021_10_26 from '#spruce/schemas/heartwoodTest1635272689714Count52CliTest/v2021_10_26/testRegisterSkillViews1635272688076EmitPayload.schema'

const testRegisterSkillViews1635272688076EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1635272689714Count52CliTest.v2021_10_26.TestRegisterSkillViews1635272688076EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1635272688076EmitTargetAndPayload',
	version: 'v2021_10_26',
	namespace: 'HeartwoodTest1635272689714Count52CliTest',
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
	                options: {schema: testRegisterSkillViews1635272688076EmitTargetSchema_v2021_10_26,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1635272688076EmitPayloadSchema_v2021_10_26,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1635272688076EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1635272688076EmitTargetAndPayloadSchema

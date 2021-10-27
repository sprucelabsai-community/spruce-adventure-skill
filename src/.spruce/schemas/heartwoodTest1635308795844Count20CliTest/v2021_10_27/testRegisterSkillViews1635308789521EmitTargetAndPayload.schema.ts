import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1635308789521EmitTargetSchema_v2021_10_27 from '#spruce/schemas/heartwoodTest1635308795844Count20CliTest/v2021_10_27/testRegisterSkillViews1635308789521EmitTarget.schema'
import testRegisterSkillViews1635308789521EmitPayloadSchema_v2021_10_27 from '#spruce/schemas/heartwoodTest1635308795844Count20CliTest/v2021_10_27/testRegisterSkillViews1635308789521EmitPayload.schema'

const testRegisterSkillViews1635308789521EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1635308795844Count20CliTest.v2021_10_27.TestRegisterSkillViews1635308789521EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1635308789521EmitTargetAndPayload',
	version: 'v2021_10_27',
	namespace: 'HeartwoodTest1635308795844Count20CliTest',
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
	                options: {schema: testRegisterSkillViews1635308789521EmitTargetSchema_v2021_10_27,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1635308789521EmitPayloadSchema_v2021_10_27,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1635308789521EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1635308789521EmitTargetAndPayloadSchema

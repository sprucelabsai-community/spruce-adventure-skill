import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633567614258EmitTargetSchema_v2021_10_07 from '#spruce/schemas/heartwoodTest1633567623813Count33/v2021_10_07/testRegisterSkillViews1633567614258EmitTarget.schema'
import testRegisterSkillViews1633567614258EmitPayloadSchema_v2021_10_07 from '#spruce/schemas/heartwoodTest1633567623813Count33/v2021_10_07/testRegisterSkillViews1633567614258EmitPayload.schema'

const testRegisterSkillViews1633567614258EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633567623813Count33.v2021_10_07.TestRegisterSkillViews1633567614258EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633567614258EmitTargetAndPayload',
	version: 'v2021_10_07',
	namespace: 'HeartwoodTest1633567623813Count33',
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
	                options: {schema: testRegisterSkillViews1633567614258EmitTargetSchema_v2021_10_07,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633567614258EmitPayloadSchema_v2021_10_07,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633567614258EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633567614258EmitTargetAndPayloadSchema

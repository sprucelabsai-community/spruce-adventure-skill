import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633618268758EmitTargetSchema_v2021_10_07 from '#spruce/schemas/heartwoodTest1633618271968Count81/v2021_10_07/testRegisterSkillViews1633618268758EmitTarget.schema'
import testRegisterSkillViews1633618268758EmitPayloadSchema_v2021_10_07 from '#spruce/schemas/heartwoodTest1633618271968Count81/v2021_10_07/testRegisterSkillViews1633618268758EmitPayload.schema'

const testRegisterSkillViews1633618268758EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633618271968Count81.v2021_10_07.TestRegisterSkillViews1633618268758EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633618268758EmitTargetAndPayload',
	version: 'v2021_10_07',
	namespace: 'HeartwoodTest1633618271968Count81',
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
	                options: {schema: testRegisterSkillViews1633618268758EmitTargetSchema_v2021_10_07,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633618268758EmitPayloadSchema_v2021_10_07,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633618268758EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633618268758EmitTargetAndPayloadSchema

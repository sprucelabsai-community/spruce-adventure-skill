import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633510107110EmitTargetSchema_v2021_10_06 from '#spruce/schemas/heartwoodTest1633510109040Count84/v2021_10_06/testRegisterSkillViews1633510107110EmitTarget.schema'
import testRegisterSkillViews1633510107110EmitPayloadSchema_v2021_10_06 from '#spruce/schemas/heartwoodTest1633510109040Count84/v2021_10_06/testRegisterSkillViews1633510107110EmitPayload.schema'

const testRegisterSkillViews1633510107110EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633510109040Count84.v2021_10_06.TestRegisterSkillViews1633510107110EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633510107110EmitTargetAndPayload',
	version: 'v2021_10_06',
	namespace: 'HeartwoodTest1633510109040Count84',
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
	                options: {schema: testRegisterSkillViews1633510107110EmitTargetSchema_v2021_10_06,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633510107110EmitPayloadSchema_v2021_10_06,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633510107110EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633510107110EmitTargetAndPayloadSchema

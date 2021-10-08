import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633654627242EmitTargetSchema_v2021_10_08 from '#spruce/schemas/heartwoodTest1633654629189Count84/v2021_10_08/testRegisterSkillViews1633654627242EmitTarget.schema'
import testRegisterSkillViews1633654627242EmitPayloadSchema_v2021_10_08 from '#spruce/schemas/heartwoodTest1633654629189Count84/v2021_10_08/testRegisterSkillViews1633654627242EmitPayload.schema'

const testRegisterSkillViews1633654627242EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633654629189Count84.v2021_10_08.TestRegisterSkillViews1633654627242EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633654627242EmitTargetAndPayload',
	version: 'v2021_10_08',
	namespace: 'HeartwoodTest1633654629189Count84',
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
	                options: {schema: testRegisterSkillViews1633654627242EmitTargetSchema_v2021_10_08,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633654627242EmitPayloadSchema_v2021_10_08,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633654627242EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633654627242EmitTargetAndPayloadSchema

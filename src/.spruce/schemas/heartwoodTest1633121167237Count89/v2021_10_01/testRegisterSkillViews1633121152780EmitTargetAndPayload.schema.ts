import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633121152780EmitTargetSchema_v2021_10_01 from '#spruce/schemas/heartwoodTest1633121167237Count89/v2021_10_01/testRegisterSkillViews1633121152780EmitTarget.schema'
import testRegisterSkillViews1633121152780EmitPayloadSchema_v2021_10_01 from '#spruce/schemas/heartwoodTest1633121167237Count89/v2021_10_01/testRegisterSkillViews1633121152780EmitPayload.schema'

const testRegisterSkillViews1633121152780EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633121167237Count89.v2021_10_01.TestRegisterSkillViews1633121152780EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633121152780EmitTargetAndPayload',
	version: 'v2021_10_01',
	namespace: 'HeartwoodTest1633121167237Count89',
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
	                options: {schema: testRegisterSkillViews1633121152780EmitTargetSchema_v2021_10_01,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633121152780EmitPayloadSchema_v2021_10_01,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633121152780EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633121152780EmitTargetAndPayloadSchema

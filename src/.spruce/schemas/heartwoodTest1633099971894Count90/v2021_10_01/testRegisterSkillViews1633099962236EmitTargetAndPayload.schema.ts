import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633099962236EmitTargetSchema_v2021_10_01 from '#spruce/schemas/heartwoodTest1633099971894Count90/v2021_10_01/testRegisterSkillViews1633099962236EmitTarget.schema'
import testRegisterSkillViews1633099962236EmitPayloadSchema_v2021_10_01 from '#spruce/schemas/heartwoodTest1633099971894Count90/v2021_10_01/testRegisterSkillViews1633099962236EmitPayload.schema'

const testRegisterSkillViews1633099962236EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633099971894Count90.v2021_10_01.TestRegisterSkillViews1633099962236EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633099962236EmitTargetAndPayload',
	version: 'v2021_10_01',
	namespace: 'HeartwoodTest1633099971894Count90',
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
	                options: {schema: testRegisterSkillViews1633099962236EmitTargetSchema_v2021_10_01,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633099962236EmitPayloadSchema_v2021_10_01,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633099962236EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633099962236EmitTargetAndPayloadSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633221942649EmitTargetSchema_v2021_10_03 from '#spruce/schemas/heartwoodTest1633221948325Count34/v2021_10_03/testRegisterSkillViews1633221942649EmitTarget.schema'
import testRegisterSkillViews1633221942649EmitPayloadSchema_v2021_10_03 from '#spruce/schemas/heartwoodTest1633221948325Count34/v2021_10_03/testRegisterSkillViews1633221942649EmitPayload.schema'

const testRegisterSkillViews1633221942649EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633221948325Count34.v2021_10_03.TestRegisterSkillViews1633221942649EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633221942649EmitTargetAndPayload',
	version: 'v2021_10_03',
	namespace: 'HeartwoodTest1633221948325Count34',
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
	                options: {schema: testRegisterSkillViews1633221942649EmitTargetSchema_v2021_10_03,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633221942649EmitPayloadSchema_v2021_10_03,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633221942649EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633221942649EmitTargetAndPayloadSchema

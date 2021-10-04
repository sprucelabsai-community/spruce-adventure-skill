import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633337308032EmitTargetSchema_v2021_10_04 from '#spruce/schemas/heartwoodTest1633337310319Count61/v2021_10_04/testRegisterSkillViews1633337308032EmitTarget.schema'
import testRegisterSkillViews1633337308032EmitPayloadSchema_v2021_10_04 from '#spruce/schemas/heartwoodTest1633337310319Count61/v2021_10_04/testRegisterSkillViews1633337308032EmitPayload.schema'

const testRegisterSkillViews1633337308032EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633337310319Count61.v2021_10_04.TestRegisterSkillViews1633337308032EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633337308032EmitTargetAndPayload',
	version: 'v2021_10_04',
	namespace: 'HeartwoodTest1633337310319Count61',
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
	                options: {schema: testRegisterSkillViews1633337308032EmitTargetSchema_v2021_10_04,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633337308032EmitPayloadSchema_v2021_10_04,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633337308032EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633337308032EmitTargetAndPayloadSchema

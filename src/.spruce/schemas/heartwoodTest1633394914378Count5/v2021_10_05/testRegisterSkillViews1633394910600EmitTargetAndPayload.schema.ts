import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633394910600EmitTargetSchema_v2021_10_05 from '#spruce/schemas/heartwoodTest1633394914378Count5/v2021_10_05/testRegisterSkillViews1633394910600EmitTarget.schema'
import testRegisterSkillViews1633394910600EmitPayloadSchema_v2021_10_05 from '#spruce/schemas/heartwoodTest1633394914378Count5/v2021_10_05/testRegisterSkillViews1633394910600EmitPayload.schema'

const testRegisterSkillViews1633394910600EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633394914378Count5.v2021_10_05.TestRegisterSkillViews1633394910600EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633394910600EmitTargetAndPayload',
	version: 'v2021_10_05',
	namespace: 'HeartwoodTest1633394914378Count5',
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
	                options: {schema: testRegisterSkillViews1633394910600EmitTargetSchema_v2021_10_05,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633394910600EmitPayloadSchema_v2021_10_05,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633394910600EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633394910600EmitTargetAndPayloadSchema

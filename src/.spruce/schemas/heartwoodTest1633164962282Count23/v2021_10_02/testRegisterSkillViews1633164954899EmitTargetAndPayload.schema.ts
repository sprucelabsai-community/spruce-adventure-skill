import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633164954899EmitTargetSchema_v2021_10_02 from '#spruce/schemas/heartwoodTest1633164962282Count23/v2021_10_02/testRegisterSkillViews1633164954899EmitTarget.schema'
import testRegisterSkillViews1633164954899EmitPayloadSchema_v2021_10_02 from '#spruce/schemas/heartwoodTest1633164962282Count23/v2021_10_02/testRegisterSkillViews1633164954899EmitPayload.schema'

const testRegisterSkillViews1633164954899EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633164962282Count23.v2021_10_02.TestRegisterSkillViews1633164954899EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633164954899EmitTargetAndPayload',
	version: 'v2021_10_02',
	namespace: 'HeartwoodTest1633164962282Count23',
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
	                options: {schema: testRegisterSkillViews1633164954899EmitTargetSchema_v2021_10_02,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633164954899EmitPayloadSchema_v2021_10_02,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633164954899EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633164954899EmitTargetAndPayloadSchema

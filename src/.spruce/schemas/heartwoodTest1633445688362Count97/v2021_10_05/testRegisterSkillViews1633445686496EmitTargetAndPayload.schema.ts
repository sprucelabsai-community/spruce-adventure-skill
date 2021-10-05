import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633445686496EmitTargetSchema_v2021_10_05 from '#spruce/schemas/heartwoodTest1633445688362Count97/v2021_10_05/testRegisterSkillViews1633445686496EmitTarget.schema'
import testRegisterSkillViews1633445686496EmitPayloadSchema_v2021_10_05 from '#spruce/schemas/heartwoodTest1633445688362Count97/v2021_10_05/testRegisterSkillViews1633445686496EmitPayload.schema'

const testRegisterSkillViews1633445686496EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633445688362Count97.v2021_10_05.TestRegisterSkillViews1633445686496EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633445686496EmitTargetAndPayload',
	version: 'v2021_10_05',
	namespace: 'HeartwoodTest1633445688362Count97',
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
	                options: {schema: testRegisterSkillViews1633445686496EmitTargetSchema_v2021_10_05,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633445686496EmitPayloadSchema_v2021_10_05,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633445686496EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633445686496EmitTargetAndPayloadSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633723549487EmitTargetSchema_v2021_10_08 from '#spruce/schemas/heartwoodTest1633723551224Count27/v2021_10_08/testRegisterSkillViews1633723549487EmitTarget.schema'
import testRegisterSkillViews1633723549487EmitPayloadSchema_v2021_10_08 from '#spruce/schemas/heartwoodTest1633723551224Count27/v2021_10_08/testRegisterSkillViews1633723549487EmitPayload.schema'

const testRegisterSkillViews1633723549487EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633723551224Count27.v2021_10_08.TestRegisterSkillViews1633723549487EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633723549487EmitTargetAndPayload',
	version: 'v2021_10_08',
	namespace: 'HeartwoodTest1633723551224Count27',
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
	                options: {schema: testRegisterSkillViews1633723549487EmitTargetSchema_v2021_10_08,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633723549487EmitPayloadSchema_v2021_10_08,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633723549487EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633723549487EmitTargetAndPayloadSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633251297754EmitTargetSchema_v2021_10_03 from '#spruce/schemas/heartwoodTest1633251301464Count33/v2021_10_03/testRegisterSkillViews1633251297754EmitTarget.schema'
import testRegisterSkillViews1633251297754EmitPayloadSchema_v2021_10_03 from '#spruce/schemas/heartwoodTest1633251301464Count33/v2021_10_03/testRegisterSkillViews1633251297754EmitPayload.schema'

const testRegisterSkillViews1633251297754EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633251301464Count33.v2021_10_03.TestRegisterSkillViews1633251297754EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633251297754EmitTargetAndPayload',
	version: 'v2021_10_03',
	namespace: 'HeartwoodTest1633251301464Count33',
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
	                options: {schema: testRegisterSkillViews1633251297754EmitTargetSchema_v2021_10_03,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633251297754EmitPayloadSchema_v2021_10_03,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633251297754EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633251297754EmitTargetAndPayloadSchema

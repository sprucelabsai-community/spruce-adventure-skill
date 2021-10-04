import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633338527002EmitTargetSchema_v2021_10_04 from '#spruce/schemas/heartwoodTest1633338529459Count56/v2021_10_04/testRegisterSkillViews1633338527002EmitTarget.schema'
import testRegisterSkillViews1633338527002EmitPayloadSchema_v2021_10_04 from '#spruce/schemas/heartwoodTest1633338529459Count56/v2021_10_04/testRegisterSkillViews1633338527002EmitPayload.schema'

const testRegisterSkillViews1633338527002EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633338529459Count56.v2021_10_04.TestRegisterSkillViews1633338527002EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633338527002EmitTargetAndPayload',
	version: 'v2021_10_04',
	namespace: 'HeartwoodTest1633338529459Count56',
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
	                options: {schema: testRegisterSkillViews1633338527002EmitTargetSchema_v2021_10_04,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633338527002EmitPayloadSchema_v2021_10_04,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633338527002EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633338527002EmitTargetAndPayloadSchema

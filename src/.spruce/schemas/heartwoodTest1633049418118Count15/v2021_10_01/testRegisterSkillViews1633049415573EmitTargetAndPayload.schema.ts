import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633049415573EmitTargetSchema_v2021_10_01 from '#spruce/schemas/heartwoodTest1633049418118Count15/v2021_10_01/testRegisterSkillViews1633049415573EmitTarget.schema'
import testRegisterSkillViews1633049415573EmitPayloadSchema_v2021_10_01 from '#spruce/schemas/heartwoodTest1633049418118Count15/v2021_10_01/testRegisterSkillViews1633049415573EmitPayload.schema'

const testRegisterSkillViews1633049415573EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633049418118Count15.v2021_10_01.TestRegisterSkillViews1633049415573EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633049415573EmitTargetAndPayload',
	version: 'v2021_10_01',
	namespace: 'HeartwoodTest1633049418118Count15',
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
	                options: {schema: testRegisterSkillViews1633049415573EmitTargetSchema_v2021_10_01,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633049415573EmitPayloadSchema_v2021_10_01,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633049415573EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633049415573EmitTargetAndPayloadSchema

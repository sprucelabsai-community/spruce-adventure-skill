import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1632791285859EmitTargetSchema_v2021_09_28 from '#spruce/schemas/heartwoodTest1632791288180Count52/v2021_09_28/testRegisterSkillViews1632791285859EmitTarget.schema'
import testRegisterSkillViews1632791285859EmitPayloadSchema_v2021_09_28 from '#spruce/schemas/heartwoodTest1632791288180Count52/v2021_09_28/testRegisterSkillViews1632791285859EmitPayload.schema'

const testRegisterSkillViews1632791285859EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1632791288180Count52.v2021_09_28.TestRegisterSkillViews1632791285859EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1632791285859EmitTargetAndPayload',
	version: 'v2021_09_28',
	namespace: 'HeartwoodTest1632791288180Count52',
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
	                options: {schema: testRegisterSkillViews1632791285859EmitTargetSchema_v2021_09_28,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1632791285859EmitPayloadSchema_v2021_09_28,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632791285859EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1632791285859EmitTargetAndPayloadSchema

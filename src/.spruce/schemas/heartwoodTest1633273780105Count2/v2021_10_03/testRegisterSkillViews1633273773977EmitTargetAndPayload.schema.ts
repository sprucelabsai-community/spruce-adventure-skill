import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633273773977EmitTargetSchema_v2021_10_03 from '#spruce/schemas/heartwoodTest1633273780105Count2/v2021_10_03/testRegisterSkillViews1633273773977EmitTarget.schema'
import testRegisterSkillViews1633273773977EmitPayloadSchema_v2021_10_03 from '#spruce/schemas/heartwoodTest1633273780105Count2/v2021_10_03/testRegisterSkillViews1633273773977EmitPayload.schema'

const testRegisterSkillViews1633273773977EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633273780105Count2.v2021_10_03.TestRegisterSkillViews1633273773977EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633273773977EmitTargetAndPayload',
	version: 'v2021_10_03',
	namespace: 'HeartwoodTest1633273780105Count2',
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
	                options: {schema: testRegisterSkillViews1633273773977EmitTargetSchema_v2021_10_03,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633273773977EmitPayloadSchema_v2021_10_03,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633273773977EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633273773977EmitTargetAndPayloadSchema

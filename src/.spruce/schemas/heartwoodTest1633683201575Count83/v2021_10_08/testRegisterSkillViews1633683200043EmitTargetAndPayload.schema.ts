import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633683200043EmitTargetSchema_v2021_10_08 from '#spruce/schemas/heartwoodTest1633683201575Count83/v2021_10_08/testRegisterSkillViews1633683200043EmitTarget.schema'
import testRegisterSkillViews1633683200043EmitPayloadSchema_v2021_10_08 from '#spruce/schemas/heartwoodTest1633683201575Count83/v2021_10_08/testRegisterSkillViews1633683200043EmitPayload.schema'

const testRegisterSkillViews1633683200043EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633683201575Count83.v2021_10_08.TestRegisterSkillViews1633683200043EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633683200043EmitTargetAndPayload',
	version: 'v2021_10_08',
	namespace: 'HeartwoodTest1633683201575Count83',
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
	                options: {schema: testRegisterSkillViews1633683200043EmitTargetSchema_v2021_10_08,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633683200043EmitPayloadSchema_v2021_10_08,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633683200043EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633683200043EmitTargetAndPayloadSchema

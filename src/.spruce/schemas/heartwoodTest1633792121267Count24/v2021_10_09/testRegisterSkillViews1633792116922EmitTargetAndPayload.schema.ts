import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633792116922EmitTargetSchema_v2021_10_09 from '#spruce/schemas/heartwoodTest1633792121267Count24/v2021_10_09/testRegisterSkillViews1633792116922EmitTarget.schema'
import testRegisterSkillViews1633792116922EmitPayloadSchema_v2021_10_09 from '#spruce/schemas/heartwoodTest1633792121267Count24/v2021_10_09/testRegisterSkillViews1633792116922EmitPayload.schema'

const testRegisterSkillViews1633792116922EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633792121267Count24.v2021_10_09.TestRegisterSkillViews1633792116922EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633792116922EmitTargetAndPayload',
	version: 'v2021_10_09',
	namespace: 'HeartwoodTest1633792121267Count24',
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
	                options: {schema: testRegisterSkillViews1633792116922EmitTargetSchema_v2021_10_09,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633792116922EmitPayloadSchema_v2021_10_09,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633792116922EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633792116922EmitTargetAndPayloadSchema

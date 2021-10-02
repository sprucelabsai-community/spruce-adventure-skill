import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633208803239EmitTargetSchema_v2021_10_02 from '#spruce/schemas/heartwoodTest1633208807907Count74/v2021_10_02/testRegisterSkillViews1633208803239EmitTarget.schema'
import testRegisterSkillViews1633208803239EmitPayloadSchema_v2021_10_02 from '#spruce/schemas/heartwoodTest1633208807907Count74/v2021_10_02/testRegisterSkillViews1633208803239EmitPayload.schema'

const testRegisterSkillViews1633208803239EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633208807907Count74.v2021_10_02.TestRegisterSkillViews1633208803239EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633208803239EmitTargetAndPayload',
	version: 'v2021_10_02',
	namespace: 'HeartwoodTest1633208807907Count74',
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
	                options: {schema: testRegisterSkillViews1633208803239EmitTargetSchema_v2021_10_02,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633208803239EmitPayloadSchema_v2021_10_02,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633208803239EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633208803239EmitTargetAndPayloadSchema

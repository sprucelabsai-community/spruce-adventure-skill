import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1632927038091EmitTargetSchema_v2021_09_29 from '#spruce/schemas/heartwoodTest1632927042665Count33/v2021_09_29/testRegisterSkillViews1632927038091EmitTarget.schema'
import testRegisterSkillViews1632927038091EmitPayloadSchema_v2021_09_29 from '#spruce/schemas/heartwoodTest1632927042665Count33/v2021_09_29/testRegisterSkillViews1632927038091EmitPayload.schema'

const testRegisterSkillViews1632927038091EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1632927042665Count33.v2021_09_29.TestRegisterSkillViews1632927038091EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1632927038091EmitTargetAndPayload',
	version: 'v2021_09_29',
	namespace: 'HeartwoodTest1632927042665Count33',
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
	                options: {schema: testRegisterSkillViews1632927038091EmitTargetSchema_v2021_09_29,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1632927038091EmitPayloadSchema_v2021_09_29,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632927038091EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1632927038091EmitTargetAndPayloadSchema

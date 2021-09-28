import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1632790165950EmitTargetSchema_v2021_09_28 from '#spruce/schemas/heartwoodTest1632790168401Count50/v2021_09_28/testRegisterSkillViews1632790165950EmitTarget.schema'
import testRegisterSkillViews1632790165950EmitPayloadSchema_v2021_09_28 from '#spruce/schemas/heartwoodTest1632790168401Count50/v2021_09_28/testRegisterSkillViews1632790165950EmitPayload.schema'

const testRegisterSkillViews1632790165950EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1632790168401Count50.v2021_09_28.TestRegisterSkillViews1632790165950EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1632790165950EmitTargetAndPayload',
	version: 'v2021_09_28',
	namespace: 'HeartwoodTest1632790168401Count50',
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
	                options: {schema: testRegisterSkillViews1632790165950EmitTargetSchema_v2021_09_28,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1632790165950EmitPayloadSchema_v2021_09_28,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632790165950EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1632790165950EmitTargetAndPayloadSchema

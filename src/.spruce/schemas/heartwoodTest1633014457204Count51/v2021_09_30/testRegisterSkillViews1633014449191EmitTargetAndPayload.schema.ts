import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633014449191EmitTargetSchema_v2021_09_30 from '#spruce/schemas/heartwoodTest1633014457204Count51/v2021_09_30/testRegisterSkillViews1633014449191EmitTarget.schema'
import testRegisterSkillViews1633014449191EmitPayloadSchema_v2021_09_30 from '#spruce/schemas/heartwoodTest1633014457204Count51/v2021_09_30/testRegisterSkillViews1633014449191EmitPayload.schema'

const testRegisterSkillViews1633014449191EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633014457204Count51.v2021_09_30.TestRegisterSkillViews1633014449191EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633014449191EmitTargetAndPayload',
	version: 'v2021_09_30',
	namespace: 'HeartwoodTest1633014457204Count51',
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
	                options: {schema: testRegisterSkillViews1633014449191EmitTargetSchema_v2021_09_30,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633014449191EmitPayloadSchema_v2021_09_30,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633014449191EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633014449191EmitTargetAndPayloadSchema

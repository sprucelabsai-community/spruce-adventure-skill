import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633639896235EmitTargetSchema_v2021_10_07 from '#spruce/schemas/heartwoodTest1633639898078Count52/v2021_10_07/testRegisterSkillViews1633639896235EmitTarget.schema'
import testRegisterSkillViews1633639896235EmitPayloadSchema_v2021_10_07 from '#spruce/schemas/heartwoodTest1633639898078Count52/v2021_10_07/testRegisterSkillViews1633639896235EmitPayload.schema'

const testRegisterSkillViews1633639896235EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633639898078Count52.v2021_10_07.TestRegisterSkillViews1633639896235EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633639896235EmitTargetAndPayload',
	version: 'v2021_10_07',
	namespace: 'HeartwoodTest1633639898078Count52',
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
	                options: {schema: testRegisterSkillViews1633639896235EmitTargetSchema_v2021_10_07,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633639896235EmitPayloadSchema_v2021_10_07,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633639896235EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633639896235EmitTargetAndPayloadSchema

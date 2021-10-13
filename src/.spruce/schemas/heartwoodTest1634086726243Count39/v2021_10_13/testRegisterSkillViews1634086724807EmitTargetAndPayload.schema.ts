import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1634086724807EmitTargetSchema_v2021_10_13 from '#spruce/schemas/heartwoodTest1634086726243Count39/v2021_10_13/testRegisterSkillViews1634086724807EmitTarget.schema'
import testRegisterSkillViews1634086724807EmitPayloadSchema_v2021_10_13 from '#spruce/schemas/heartwoodTest1634086726243Count39/v2021_10_13/testRegisterSkillViews1634086724807EmitPayload.schema'

const testRegisterSkillViews1634086724807EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1634086726243Count39.v2021_10_13.TestRegisterSkillViews1634086724807EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1634086724807EmitTargetAndPayload',
	version: 'v2021_10_13',
	namespace: 'HeartwoodTest1634086726243Count39',
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
	                options: {schema: testRegisterSkillViews1634086724807EmitTargetSchema_v2021_10_13,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1634086724807EmitPayloadSchema_v2021_10_13,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1634086724807EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1634086724807EmitTargetAndPayloadSchema

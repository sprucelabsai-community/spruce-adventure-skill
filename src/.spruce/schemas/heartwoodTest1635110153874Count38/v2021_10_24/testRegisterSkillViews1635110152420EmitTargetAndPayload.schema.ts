import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1635110152420EmitTargetSchema_v2021_10_24 from '#spruce/schemas/heartwoodTest1635110153874Count38/v2021_10_24/testRegisterSkillViews1635110152420EmitTarget.schema'
import testRegisterSkillViews1635110152420EmitPayloadSchema_v2021_10_24 from '#spruce/schemas/heartwoodTest1635110153874Count38/v2021_10_24/testRegisterSkillViews1635110152420EmitPayload.schema'

const testRegisterSkillViews1635110152420EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1635110153874Count38.v2021_10_24.TestRegisterSkillViews1635110152420EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1635110152420EmitTargetAndPayload',
	version: 'v2021_10_24',
	namespace: 'HeartwoodTest1635110153874Count38',
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
	                options: {schema: testRegisterSkillViews1635110152420EmitTargetSchema_v2021_10_24,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1635110152420EmitPayloadSchema_v2021_10_24,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1635110152420EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1635110152420EmitTargetAndPayloadSchema

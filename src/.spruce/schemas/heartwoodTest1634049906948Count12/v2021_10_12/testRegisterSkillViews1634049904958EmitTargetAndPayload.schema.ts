import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1634049904958EmitTargetSchema_v2021_10_12 from '#spruce/schemas/heartwoodTest1634049906948Count12/v2021_10_12/testRegisterSkillViews1634049904958EmitTarget.schema'
import testRegisterSkillViews1634049904958EmitPayloadSchema_v2021_10_12 from '#spruce/schemas/heartwoodTest1634049906948Count12/v2021_10_12/testRegisterSkillViews1634049904958EmitPayload.schema'

const testRegisterSkillViews1634049904958EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1634049906948Count12.v2021_10_12.TestRegisterSkillViews1634049904958EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1634049904958EmitTargetAndPayload',
	version: 'v2021_10_12',
	namespace: 'HeartwoodTest1634049906948Count12',
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
	                options: {schema: testRegisterSkillViews1634049904958EmitTargetSchema_v2021_10_12,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1634049904958EmitPayloadSchema_v2021_10_12,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1634049904958EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1634049904958EmitTargetAndPayloadSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633423941867EmitTargetSchema_v2021_10_05 from '#spruce/schemas/heartwoodTest1633423949524Count66/v2021_10_05/testRegisterSkillViews1633423941867EmitTarget.schema'
import testRegisterSkillViews1633423941867EmitPayloadSchema_v2021_10_05 from '#spruce/schemas/heartwoodTest1633423949524Count66/v2021_10_05/testRegisterSkillViews1633423941867EmitPayload.schema'

const testRegisterSkillViews1633423941867EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633423949524Count66.v2021_10_05.TestRegisterSkillViews1633423941867EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633423941867EmitTargetAndPayload',
	version: 'v2021_10_05',
	namespace: 'HeartwoodTest1633423949524Count66',
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
	                options: {schema: testRegisterSkillViews1633423941867EmitTargetSchema_v2021_10_05,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633423941867EmitPayloadSchema_v2021_10_05,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633423941867EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633423941867EmitTargetAndPayloadSchema

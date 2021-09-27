import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1632750749070EmitTargetSchema_v2021_09_27 from '#spruce/schemas/heartwoodTest1632750754975Count95/v2021_09_27/testRegisterSkillViews1632750749070EmitTarget.schema'
import testRegisterSkillViews1632750749070EmitPayloadSchema_v2021_09_27 from '#spruce/schemas/heartwoodTest1632750754975Count95/v2021_09_27/testRegisterSkillViews1632750749070EmitPayload.schema'

const testRegisterSkillViews1632750749070EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1632750754975Count95.v2021_09_27.TestRegisterSkillViews1632750749070EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1632750749070EmitTargetAndPayload',
	version: 'v2021_09_27',
	namespace: 'HeartwoodTest1632750754975Count95',
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
	                options: {schema: testRegisterSkillViews1632750749070EmitTargetSchema_v2021_09_27,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1632750749070EmitPayloadSchema_v2021_09_27,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632750749070EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1632750749070EmitTargetAndPayloadSchema

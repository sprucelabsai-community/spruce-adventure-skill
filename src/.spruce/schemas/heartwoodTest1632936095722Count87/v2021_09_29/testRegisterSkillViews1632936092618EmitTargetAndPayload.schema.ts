import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1632936092618EmitTargetSchema_v2021_09_29 from '#spruce/schemas/heartwoodTest1632936095722Count87/v2021_09_29/testRegisterSkillViews1632936092618EmitTarget.schema'
import testRegisterSkillViews1632936092618EmitPayloadSchema_v2021_09_29 from '#spruce/schemas/heartwoodTest1632936095722Count87/v2021_09_29/testRegisterSkillViews1632936092618EmitPayload.schema'

const testRegisterSkillViews1632936092618EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1632936095722Count87.v2021_09_29.TestRegisterSkillViews1632936092618EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1632936092618EmitTargetAndPayload',
	version: 'v2021_09_29',
	namespace: 'HeartwoodTest1632936095722Count87',
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
	                options: {schema: testRegisterSkillViews1632936092618EmitTargetSchema_v2021_09_29,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1632936092618EmitPayloadSchema_v2021_09_29,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632936092618EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1632936092618EmitTargetAndPayloadSchema

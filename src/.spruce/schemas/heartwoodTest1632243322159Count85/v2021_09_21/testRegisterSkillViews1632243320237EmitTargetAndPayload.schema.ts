import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1632243320237EmitTargetSchema_v2021_09_21 from '#spruce/schemas/heartwoodTest1632243322159Count85/v2021_09_21/testRegisterSkillViews1632243320237EmitTarget.schema'
import testRegisterSkillViews1632243320237EmitPayloadSchema_v2021_09_21 from '#spruce/schemas/heartwoodTest1632243322159Count85/v2021_09_21/testRegisterSkillViews1632243320237EmitPayload.schema'

const testRegisterSkillViews1632243320237EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1632243322159Count85.v2021_09_21.TestRegisterSkillViews1632243320237EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1632243320237EmitTargetAndPayload',
	version: 'v2021_09_21',
	namespace: 'HeartwoodTest1632243322159Count85',
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
	                options: {schema: testRegisterSkillViews1632243320237EmitTargetSchema_v2021_09_21,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1632243320237EmitPayloadSchema_v2021_09_21,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632243320237EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1632243320237EmitTargetAndPayloadSchema

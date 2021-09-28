import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1632862259625EmitTargetSchema_v2021_09_28 from '#spruce/schemas/heartwoodTest1632862261511Count14/v2021_09_28/testRegisterSkillViews1632862259625EmitTarget.schema'
import testRegisterSkillViews1632862259625EmitPayloadSchema_v2021_09_28 from '#spruce/schemas/heartwoodTest1632862261511Count14/v2021_09_28/testRegisterSkillViews1632862259625EmitPayload.schema'

const testRegisterSkillViews1632862259625EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1632862261511Count14.v2021_09_28.TestRegisterSkillViews1632862259625EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1632862259625EmitTargetAndPayload',
	version: 'v2021_09_28',
	namespace: 'HeartwoodTest1632862261511Count14',
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
	                options: {schema: testRegisterSkillViews1632862259625EmitTargetSchema_v2021_09_28,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1632862259625EmitPayloadSchema_v2021_09_28,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632862259625EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1632862259625EmitTargetAndPayloadSchema

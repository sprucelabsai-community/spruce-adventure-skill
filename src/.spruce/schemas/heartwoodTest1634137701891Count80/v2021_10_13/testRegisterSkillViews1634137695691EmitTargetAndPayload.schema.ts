import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1634137695691EmitTargetSchema_v2021_10_13 from '#spruce/schemas/heartwoodTest1634137701891Count80/v2021_10_13/testRegisterSkillViews1634137695691EmitTarget.schema'
import testRegisterSkillViews1634137695691EmitPayloadSchema_v2021_10_13 from '#spruce/schemas/heartwoodTest1634137701891Count80/v2021_10_13/testRegisterSkillViews1634137695691EmitPayload.schema'

const testRegisterSkillViews1634137695691EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1634137701891Count80.v2021_10_13.TestRegisterSkillViews1634137695691EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1634137695691EmitTargetAndPayload',
	version: 'v2021_10_13',
	namespace: 'HeartwoodTest1634137701891Count80',
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
	                options: {schema: testRegisterSkillViews1634137695691EmitTargetSchema_v2021_10_13,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1634137695691EmitPayloadSchema_v2021_10_13,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1634137695691EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1634137695691EmitTargetAndPayloadSchema

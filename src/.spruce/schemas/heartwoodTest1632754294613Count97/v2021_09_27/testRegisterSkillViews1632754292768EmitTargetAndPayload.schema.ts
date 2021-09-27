import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1632754292768EmitTargetSchema_v2021_09_27 from '#spruce/schemas/heartwoodTest1632754294613Count97/v2021_09_27/testRegisterSkillViews1632754292768EmitTarget.schema'
import testRegisterSkillViews1632754292768EmitPayloadSchema_v2021_09_27 from '#spruce/schemas/heartwoodTest1632754294613Count97/v2021_09_27/testRegisterSkillViews1632754292768EmitPayload.schema'

const testRegisterSkillViews1632754292768EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1632754294613Count97.v2021_09_27.TestRegisterSkillViews1632754292768EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1632754292768EmitTargetAndPayload',
	version: 'v2021_09_27',
	namespace: 'HeartwoodTest1632754294613Count97',
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
	                options: {schema: testRegisterSkillViews1632754292768EmitTargetSchema_v2021_09_27,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1632754292768EmitPayloadSchema_v2021_09_27,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632754292768EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1632754292768EmitTargetAndPayloadSchema

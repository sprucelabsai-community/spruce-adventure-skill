import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1632776923237EmitTargetSchema_v2021_09_27 from '#spruce/schemas/heartwoodTest1632776924827Count60/v2021_09_27/testRegisterSkillViews1632776923237EmitTarget.schema'
import testRegisterSkillViews1632776923237EmitPayloadSchema_v2021_09_27 from '#spruce/schemas/heartwoodTest1632776924827Count60/v2021_09_27/testRegisterSkillViews1632776923237EmitPayload.schema'

const testRegisterSkillViews1632776923237EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1632776924827Count60.v2021_09_27.TestRegisterSkillViews1632776923237EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1632776923237EmitTargetAndPayload',
	version: 'v2021_09_27',
	namespace: 'HeartwoodTest1632776924827Count60',
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
	                options: {schema: testRegisterSkillViews1632776923237EmitTargetSchema_v2021_09_27,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1632776923237EmitPayloadSchema_v2021_09_27,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632776923237EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1632776923237EmitTargetAndPayloadSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1632755397985EmitTargetSchema_v2021_09_27 from '#spruce/schemas/heartwoodTest1632755399909Count6/v2021_09_27/testRegisterSkillViews1632755397985EmitTarget.schema'
import testRegisterSkillViews1632755397985EmitPayloadSchema_v2021_09_27 from '#spruce/schemas/heartwoodTest1632755399909Count6/v2021_09_27/testRegisterSkillViews1632755397985EmitPayload.schema'

const testRegisterSkillViews1632755397985EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1632755399909Count6.v2021_09_27.TestRegisterSkillViews1632755397985EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1632755397985EmitTargetAndPayload',
	version: 'v2021_09_27',
	namespace: 'HeartwoodTest1632755399909Count6',
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
	                options: {schema: testRegisterSkillViews1632755397985EmitTargetSchema_v2021_09_27,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1632755397985EmitPayloadSchema_v2021_09_27,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632755397985EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1632755397985EmitTargetAndPayloadSchema

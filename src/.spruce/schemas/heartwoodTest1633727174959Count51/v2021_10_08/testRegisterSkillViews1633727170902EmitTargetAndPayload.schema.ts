import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633727170902EmitTargetSchema_v2021_10_08 from '#spruce/schemas/heartwoodTest1633727174959Count51/v2021_10_08/testRegisterSkillViews1633727170902EmitTarget.schema'
import testRegisterSkillViews1633727170902EmitPayloadSchema_v2021_10_08 from '#spruce/schemas/heartwoodTest1633727174959Count51/v2021_10_08/testRegisterSkillViews1633727170902EmitPayload.schema'

const testRegisterSkillViews1633727170902EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633727174959Count51.v2021_10_08.TestRegisterSkillViews1633727170902EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633727170902EmitTargetAndPayload',
	version: 'v2021_10_08',
	namespace: 'HeartwoodTest1633727174959Count51',
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
	                options: {schema: testRegisterSkillViews1633727170902EmitTargetSchema_v2021_10_08,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633727170902EmitPayloadSchema_v2021_10_08,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633727170902EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633727170902EmitTargetAndPayloadSchema

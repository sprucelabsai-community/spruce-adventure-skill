import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633136942248EmitTargetSchema_v2021_10_02 from '#spruce/schemas/heartwoodTest1633136944041Count98/v2021_10_02/testRegisterSkillViews1633136942248EmitTarget.schema'
import testRegisterSkillViews1633136942248EmitPayloadSchema_v2021_10_02 from '#spruce/schemas/heartwoodTest1633136944041Count98/v2021_10_02/testRegisterSkillViews1633136942248EmitPayload.schema'

const testRegisterSkillViews1633136942248EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633136944041Count98.v2021_10_02.TestRegisterSkillViews1633136942248EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633136942248EmitTargetAndPayload',
	version: 'v2021_10_02',
	namespace: 'HeartwoodTest1633136944041Count98',
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
	                options: {schema: testRegisterSkillViews1633136942248EmitTargetSchema_v2021_10_02,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633136942248EmitPayloadSchema_v2021_10_02,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633136942248EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633136942248EmitTargetAndPayloadSchema

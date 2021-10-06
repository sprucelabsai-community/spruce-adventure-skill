import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633481365956EmitTargetSchema_v2021_10_06 from '#spruce/schemas/heartwoodTest1633481367494Count6/v2021_10_06/testRegisterSkillViews1633481365956EmitTarget.schema'
import testRegisterSkillViews1633481365956EmitPayloadSchema_v2021_10_06 from '#spruce/schemas/heartwoodTest1633481367494Count6/v2021_10_06/testRegisterSkillViews1633481365956EmitPayload.schema'

const testRegisterSkillViews1633481365956EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633481367494Count6.v2021_10_06.TestRegisterSkillViews1633481365956EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633481365956EmitTargetAndPayload',
	version: 'v2021_10_06',
	namespace: 'HeartwoodTest1633481367494Count6',
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
	                options: {schema: testRegisterSkillViews1633481365956EmitTargetSchema_v2021_10_06,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633481365956EmitPayloadSchema_v2021_10_06,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633481365956EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633481365956EmitTargetAndPayloadSchema

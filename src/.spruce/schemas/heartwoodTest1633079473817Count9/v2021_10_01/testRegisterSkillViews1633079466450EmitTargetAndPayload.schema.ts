import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633079466450EmitTargetSchema_v2021_10_01 from '#spruce/schemas/heartwoodTest1633079473817Count9/v2021_10_01/testRegisterSkillViews1633079466450EmitTarget.schema'
import testRegisterSkillViews1633079466450EmitPayloadSchema_v2021_10_01 from '#spruce/schemas/heartwoodTest1633079473817Count9/v2021_10_01/testRegisterSkillViews1633079466450EmitPayload.schema'

const testRegisterSkillViews1633079466450EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633079473817Count9.v2021_10_01.TestRegisterSkillViews1633079466450EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633079466450EmitTargetAndPayload',
	version: 'v2021_10_01',
	namespace: 'HeartwoodTest1633079473817Count9',
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
	                options: {schema: testRegisterSkillViews1633079466450EmitTargetSchema_v2021_10_01,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633079466450EmitPayloadSchema_v2021_10_01,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633079466450EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633079466450EmitTargetAndPayloadSchema

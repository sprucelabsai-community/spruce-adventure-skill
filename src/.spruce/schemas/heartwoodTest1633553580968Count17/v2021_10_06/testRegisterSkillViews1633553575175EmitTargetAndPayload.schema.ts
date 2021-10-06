import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633553575175EmitTargetSchema_v2021_10_06 from '#spruce/schemas/heartwoodTest1633553580968Count17/v2021_10_06/testRegisterSkillViews1633553575175EmitTarget.schema'
import testRegisterSkillViews1633553575175EmitPayloadSchema_v2021_10_06 from '#spruce/schemas/heartwoodTest1633553580968Count17/v2021_10_06/testRegisterSkillViews1633553575175EmitPayload.schema'

const testRegisterSkillViews1633553575175EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633553580968Count17.v2021_10_06.TestRegisterSkillViews1633553575175EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633553575175EmitTargetAndPayload',
	version: 'v2021_10_06',
	namespace: 'HeartwoodTest1633553580968Count17',
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
	                options: {schema: testRegisterSkillViews1633553575175EmitTargetSchema_v2021_10_06,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633553575175EmitPayloadSchema_v2021_10_06,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633553575175EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633553575175EmitTargetAndPayloadSchema

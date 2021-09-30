import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633013483504EmitTargetSchema_v2021_09_30 from '#spruce/schemas/heartwoodTest1633013485867Count4/v2021_09_30/testRegisterSkillViews1633013483504EmitTarget.schema'
import testRegisterSkillViews1633013483504EmitPayloadSchema_v2021_09_30 from '#spruce/schemas/heartwoodTest1633013485867Count4/v2021_09_30/testRegisterSkillViews1633013483504EmitPayload.schema'

const testRegisterSkillViews1633013483504EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633013485867Count4.v2021_09_30.TestRegisterSkillViews1633013483504EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633013483504EmitTargetAndPayload',
	version: 'v2021_09_30',
	namespace: 'HeartwoodTest1633013485867Count4',
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
	                options: {schema: testRegisterSkillViews1633013483504EmitTargetSchema_v2021_09_30,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633013483504EmitPayloadSchema_v2021_09_30,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633013483504EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633013483504EmitTargetAndPayloadSchema

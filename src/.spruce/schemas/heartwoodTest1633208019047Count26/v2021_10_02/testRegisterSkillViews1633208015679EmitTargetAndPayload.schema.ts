import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633208015679EmitTargetSchema_v2021_10_02 from '#spruce/schemas/heartwoodTest1633208019047Count26/v2021_10_02/testRegisterSkillViews1633208015679EmitTarget.schema'
import testRegisterSkillViews1633208015679EmitPayloadSchema_v2021_10_02 from '#spruce/schemas/heartwoodTest1633208019047Count26/v2021_10_02/testRegisterSkillViews1633208015679EmitPayload.schema'

const testRegisterSkillViews1633208015679EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633208019047Count26.v2021_10_02.TestRegisterSkillViews1633208015679EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633208015679EmitTargetAndPayload',
	version: 'v2021_10_02',
	namespace: 'HeartwoodTest1633208019047Count26',
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
	                options: {schema: testRegisterSkillViews1633208015679EmitTargetSchema_v2021_10_02,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633208015679EmitPayloadSchema_v2021_10_02,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633208015679EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633208015679EmitTargetAndPayloadSchema

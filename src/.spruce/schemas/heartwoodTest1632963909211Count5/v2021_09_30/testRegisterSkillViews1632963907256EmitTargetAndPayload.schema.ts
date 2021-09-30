import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1632963907256EmitTargetSchema_v2021_09_30 from '#spruce/schemas/heartwoodTest1632963909211Count5/v2021_09_30/testRegisterSkillViews1632963907256EmitTarget.schema'
import testRegisterSkillViews1632963907256EmitPayloadSchema_v2021_09_30 from '#spruce/schemas/heartwoodTest1632963909211Count5/v2021_09_30/testRegisterSkillViews1632963907256EmitPayload.schema'

const testRegisterSkillViews1632963907256EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1632963909211Count5.v2021_09_30.TestRegisterSkillViews1632963907256EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1632963907256EmitTargetAndPayload',
	version: 'v2021_09_30',
	namespace: 'HeartwoodTest1632963909211Count5',
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
	                options: {schema: testRegisterSkillViews1632963907256EmitTargetSchema_v2021_09_30,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1632963907256EmitPayloadSchema_v2021_09_30,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632963907256EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1632963907256EmitTargetAndPayloadSchema

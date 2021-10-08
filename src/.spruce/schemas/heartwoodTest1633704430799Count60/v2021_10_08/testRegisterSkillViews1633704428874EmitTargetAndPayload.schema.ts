import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633704428874EmitTargetSchema_v2021_10_08 from '#spruce/schemas/heartwoodTest1633704430799Count60/v2021_10_08/testRegisterSkillViews1633704428874EmitTarget.schema'
import testRegisterSkillViews1633704428874EmitPayloadSchema_v2021_10_08 from '#spruce/schemas/heartwoodTest1633704430799Count60/v2021_10_08/testRegisterSkillViews1633704428874EmitPayload.schema'

const testRegisterSkillViews1633704428874EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633704430799Count60.v2021_10_08.TestRegisterSkillViews1633704428874EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633704428874EmitTargetAndPayload',
	version: 'v2021_10_08',
	namespace: 'HeartwoodTest1633704430799Count60',
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
	                options: {schema: testRegisterSkillViews1633704428874EmitTargetSchema_v2021_10_08,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633704428874EmitPayloadSchema_v2021_10_08,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633704428874EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633704428874EmitTargetAndPayloadSchema

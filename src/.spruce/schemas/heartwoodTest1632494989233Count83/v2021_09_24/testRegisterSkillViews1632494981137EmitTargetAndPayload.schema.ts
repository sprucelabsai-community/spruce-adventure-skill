import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1632494981137EmitTargetSchema_v2021_09_24 from '#spruce/schemas/heartwoodTest1632494989233Count83/v2021_09_24/testRegisterSkillViews1632494981137EmitTarget.schema'
import testRegisterSkillViews1632494981137EmitPayloadSchema_v2021_09_24 from '#spruce/schemas/heartwoodTest1632494989233Count83/v2021_09_24/testRegisterSkillViews1632494981137EmitPayload.schema'

const testRegisterSkillViews1632494981137EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1632494989233Count83.v2021_09_24.TestRegisterSkillViews1632494981137EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1632494981137EmitTargetAndPayload',
	version: 'v2021_09_24',
	namespace: 'HeartwoodTest1632494989233Count83',
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
	                options: {schema: testRegisterSkillViews1632494981137EmitTargetSchema_v2021_09_24,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1632494981137EmitPayloadSchema_v2021_09_24,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632494981137EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1632494981137EmitTargetAndPayloadSchema

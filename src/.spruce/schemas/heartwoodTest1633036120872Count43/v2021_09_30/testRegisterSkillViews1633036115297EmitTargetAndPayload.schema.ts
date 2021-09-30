import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633036115297EmitTargetSchema_v2021_09_30 from '#spruce/schemas/heartwoodTest1633036120872Count43/v2021_09_30/testRegisterSkillViews1633036115297EmitTarget.schema'
import testRegisterSkillViews1633036115297EmitPayloadSchema_v2021_09_30 from '#spruce/schemas/heartwoodTest1633036120872Count43/v2021_09_30/testRegisterSkillViews1633036115297EmitPayload.schema'

const testRegisterSkillViews1633036115297EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633036120872Count43.v2021_09_30.TestRegisterSkillViews1633036115297EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633036115297EmitTargetAndPayload',
	version: 'v2021_09_30',
	namespace: 'HeartwoodTest1633036120872Count43',
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
	                options: {schema: testRegisterSkillViews1633036115297EmitTargetSchema_v2021_09_30,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633036115297EmitPayloadSchema_v2021_09_30,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633036115297EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633036115297EmitTargetAndPayloadSchema

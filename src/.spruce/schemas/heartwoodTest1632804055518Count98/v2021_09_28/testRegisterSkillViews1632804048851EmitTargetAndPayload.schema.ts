import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1632804048851EmitTargetSchema_v2021_09_28 from '#spruce/schemas/heartwoodTest1632804055518Count98/v2021_09_28/testRegisterSkillViews1632804048851EmitTarget.schema'
import testRegisterSkillViews1632804048851EmitPayloadSchema_v2021_09_28 from '#spruce/schemas/heartwoodTest1632804055518Count98/v2021_09_28/testRegisterSkillViews1632804048851EmitPayload.schema'

const testRegisterSkillViews1632804048851EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1632804055518Count98.v2021_09_28.TestRegisterSkillViews1632804048851EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1632804048851EmitTargetAndPayload',
	version: 'v2021_09_28',
	namespace: 'HeartwoodTest1632804055518Count98',
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
	                options: {schema: testRegisterSkillViews1632804048851EmitTargetSchema_v2021_09_28,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1632804048851EmitPayloadSchema_v2021_09_28,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632804048851EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1632804048851EmitTargetAndPayloadSchema

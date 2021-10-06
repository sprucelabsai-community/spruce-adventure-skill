import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633531947000EmitTargetSchema_v2021_10_06 from '#spruce/schemas/heartwoodTest1633531953810Count56/v2021_10_06/testRegisterSkillViews1633531947000EmitTarget.schema'
import testRegisterSkillViews1633531947000EmitPayloadSchema_v2021_10_06 from '#spruce/schemas/heartwoodTest1633531953810Count56/v2021_10_06/testRegisterSkillViews1633531947000EmitPayload.schema'

const testRegisterSkillViews1633531947000EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633531953810Count56.v2021_10_06.TestRegisterSkillViews1633531947000EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633531947000EmitTargetAndPayload',
	version: 'v2021_10_06',
	namespace: 'HeartwoodTest1633531953810Count56',
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
	                options: {schema: testRegisterSkillViews1633531947000EmitTargetSchema_v2021_10_06,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633531947000EmitPayloadSchema_v2021_10_06,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633531947000EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633531947000EmitTargetAndPayloadSchema

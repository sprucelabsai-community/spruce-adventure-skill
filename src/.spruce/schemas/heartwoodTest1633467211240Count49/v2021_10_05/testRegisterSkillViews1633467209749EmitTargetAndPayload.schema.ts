import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633467209749EmitTargetSchema_v2021_10_05 from '#spruce/schemas/heartwoodTest1633467211240Count49/v2021_10_05/testRegisterSkillViews1633467209749EmitTarget.schema'
import testRegisterSkillViews1633467209749EmitPayloadSchema_v2021_10_05 from '#spruce/schemas/heartwoodTest1633467211240Count49/v2021_10_05/testRegisterSkillViews1633467209749EmitPayload.schema'

const testRegisterSkillViews1633467209749EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633467211240Count49.v2021_10_05.TestRegisterSkillViews1633467209749EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633467209749EmitTargetAndPayload',
	version: 'v2021_10_05',
	namespace: 'HeartwoodTest1633467211240Count49',
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
	                options: {schema: testRegisterSkillViews1633467209749EmitTargetSchema_v2021_10_05,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633467209749EmitPayloadSchema_v2021_10_05,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633467209749EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633467209749EmitTargetAndPayloadSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633548864466EmitTargetSchema_v2021_10_06 from '#spruce/schemas/heartwoodTest1633548866312Count47/v2021_10_06/testRegisterSkillViews1633548864466EmitTarget.schema'
import testRegisterSkillViews1633548864466EmitPayloadSchema_v2021_10_06 from '#spruce/schemas/heartwoodTest1633548866312Count47/v2021_10_06/testRegisterSkillViews1633548864466EmitPayload.schema'

const testRegisterSkillViews1633548864466EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633548866312Count47.v2021_10_06.TestRegisterSkillViews1633548864466EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633548864466EmitTargetAndPayload',
	version: 'v2021_10_06',
	namespace: 'HeartwoodTest1633548866312Count47',
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
	                options: {schema: testRegisterSkillViews1633548864466EmitTargetSchema_v2021_10_06,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633548864466EmitPayloadSchema_v2021_10_06,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633548864466EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633548864466EmitTargetAndPayloadSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_08_19 from '#spruce/schemas/heartwoodTest1629384044184Count58/v2021_08_19/eventSource.schema'
import testRegisterSkillViews1629384042933EmitTargetSchema_v2021_08_19 from '#spruce/schemas/heartwoodTest1629384044184Count58/v2021_08_19/testRegisterSkillViews1629384042933EmitTarget.schema'
import testRegisterSkillViews1629384042933EmitPayloadSchema_v2021_08_19 from '#spruce/schemas/heartwoodTest1629384044184Count58/v2021_08_19/testRegisterSkillViews1629384042933EmitPayload.schema'

const testRegisterSkillViews1629384042933EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1629384044184Count58.v2021_08_19.TestRegisterSkillViews1629384042933EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1629384042933EmitTargetAndPayload',
	version: 'v2021_08_19',
	namespace: 'HeartwoodTest1629384044184Count58',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2021_08_19,}
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1629384042933EmitTargetSchema_v2021_08_19,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1629384042933EmitPayloadSchema_v2021_08_19,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1629384042933EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1629384042933EmitTargetAndPayloadSchema

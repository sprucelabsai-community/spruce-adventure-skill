import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1632991790684EmitTargetSchema_v2021_09_30 from '#spruce/schemas/heartwoodTest1632991792976Count17/v2021_09_30/testRegisterSkillViews1632991790684EmitTarget.schema'
import testRegisterSkillViews1632991790684EmitPayloadSchema_v2021_09_30 from '#spruce/schemas/heartwoodTest1632991792976Count17/v2021_09_30/testRegisterSkillViews1632991790684EmitPayload.schema'

const testRegisterSkillViews1632991790684EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1632991792976Count17.v2021_09_30.TestRegisterSkillViews1632991790684EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1632991790684EmitTargetAndPayload',
	version: 'v2021_09_30',
	namespace: 'HeartwoodTest1632991792976Count17',
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
	                options: {schema: testRegisterSkillViews1632991790684EmitTargetSchema_v2021_09_30,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1632991790684EmitPayloadSchema_v2021_09_30,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632991790684EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1632991790684EmitTargetAndPayloadSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import submitErrorMessageFeedbackEmitTargetSchema_v2021_02_11 from '#spruce/schemas/heartwood/v2021_02_11/submitErrorMessageFeedbackEmitTarget.schema'
import submitErrorMessageFeedbackEmitPayloadSchema_v2021_02_11 from '#spruce/schemas/heartwood/v2021_02_11/submitErrorMessageFeedbackEmitPayload.schema'

const submitErrorMessageFeedbackEmitTargetAndPayloadSchema: SpruceSchemas.Heartwood.v2021_02_11.SubmitErrorMessageFeedbackEmitTargetAndPayloadSchema  = {
	id: 'submitErrorMessageFeedbackEmitTargetAndPayload',
	version: 'v2021_02_11',
	namespace: 'Heartwood',
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
	                options: {schema: submitErrorMessageFeedbackEmitTargetSchema_v2021_02_11,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: submitErrorMessageFeedbackEmitPayloadSchema_v2021_02_11,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(submitErrorMessageFeedbackEmitTargetAndPayloadSchema)

export default submitErrorMessageFeedbackEmitTargetAndPayloadSchema

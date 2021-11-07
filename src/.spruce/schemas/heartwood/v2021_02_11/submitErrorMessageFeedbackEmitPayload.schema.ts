import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const submitErrorMessageFeedbackEmitPayloadSchema: SpruceSchemas.Heartwood.v2021_02_11.SubmitErrorMessageFeedbackEmitPayloadSchema  = {
	id: 'submitErrorMessageFeedbackEmitPayload',
	version: 'v2021_02_11',
	namespace: 'Heartwood',
	name: '',
	    fields: {
	            /** Error code. */
	            'errorCode': {
	                label: 'Error code',
	                type: 'text',
	                options: undefined
	            },
	            /** Error message. */
	            'errorMessage': {
	                label: 'Error message',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Stack traces. */
	            'stackTrace': {
	                label: 'Stack traces',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'thoughts': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(submitErrorMessageFeedbackEmitPayloadSchema)

export default submitErrorMessageFeedbackEmitPayloadSchema

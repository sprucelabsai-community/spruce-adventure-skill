import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const submitErrorMessageFeedbackEmitTargetSchema: SpruceSchemas.Heartwood.v2021_02_11.SubmitErrorMessageFeedbackEmitTargetSchema  = {
	id: 'submitErrorMessageFeedbackEmitTarget',
	version: 'v2021_02_11',
	namespace: 'Heartwood',
	name: '',
	    fields: {
	            /** Update me. */
	            'aTextField': {
	                label: 'Update me',
	                type: 'text',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(submitErrorMessageFeedbackEmitTargetSchema)

export default submitErrorMessageFeedbackEmitTargetSchema

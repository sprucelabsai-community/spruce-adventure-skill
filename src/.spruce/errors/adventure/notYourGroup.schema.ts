import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceErrors } from '../errors.types'



const notYourGroupSchema: SpruceErrors.Adventure.NotYourGroupSchema  = {
	id: 'notYourGroup',
	namespace: 'Adventure',
	name: 'Not your group',
	    fields: {
	            /** . */
	            'groupId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(notYourGroupSchema)

export default notYourGroupSchema

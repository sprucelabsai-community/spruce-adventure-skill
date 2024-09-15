import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceErrors } from '../errors.types'



const cannotLeaveGroupYouAreNotPartOfSchema: SpruceErrors.Adventure.CannotLeaveGroupYouAreNotPartOfSchema  = {
	id: 'cannotLeaveGroupYouAreNotPartOf',
	namespace: 'Adventure',
	name: 'Cannot leave group you are not part of',
	    fields: {
	    }
}

SchemaRegistry.getInstance().trackSchema(cannotLeaveGroupYouAreNotPartOfSchema)

export default cannotLeaveGroupYouAreNotPartOfSchema

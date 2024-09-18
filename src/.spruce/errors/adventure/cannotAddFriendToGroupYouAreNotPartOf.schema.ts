import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceErrors } from '../errors.types'



const cannotAddFriendToGroupYouAreNotPartOfSchema: SpruceErrors.Adventure.CannotAddFriendToGroupYouAreNotPartOfSchema  = {
	id: 'cannotAddFriendToGroupYouAreNotPartOf',
	namespace: 'Adventure',
	name: 'Cannot add friend to group you are not part of',
	    fields: {
	    }
}

SchemaRegistry.getInstance().trackSchema(cannotAddFriendToGroupYouAreNotPartOfSchema)

export default cannotAddFriendToGroupYouAreNotPartOfSchema

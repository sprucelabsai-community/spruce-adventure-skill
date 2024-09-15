import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceErrors } from '../errors.types'



const cannotLeaveOwnGroupSchema: SpruceErrors.Adventure.CannotLeaveOwnGroupSchema  = {
	id: 'cannotLeaveOwnGroup',
	namespace: 'Adventure',
	name: 'Cannot leave own group',
	    fields: {
	    }
}

SchemaRegistry.getInstance().trackSchema(cannotLeaveOwnGroupSchema)

export default cannotLeaveOwnGroupSchema

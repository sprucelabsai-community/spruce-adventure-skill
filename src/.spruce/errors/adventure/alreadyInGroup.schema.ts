import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceErrors } from '../errors.types'



const alreadyInGroupSchema: SpruceErrors.Adventure.AlreadyInGroupSchema  = {
	id: 'alreadyInGroup',
	namespace: 'Adventure',
	name: 'Already in group',
	    fields: {
	    }
}

SchemaRegistry.getInstance().trackSchema(alreadyInGroupSchema)

export default alreadyInGroupSchema

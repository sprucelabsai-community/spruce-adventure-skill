import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const rsvpEmitTargetSchema: SpruceSchemas.Adventure.v2022_09_09.RsvpEmitTargetSchema  = {
	id: 'rsvpEmitTarget',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: '',
	    fields: {
	            /** . */
	            'adventureId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(rsvpEmitTargetSchema)

export default rsvpEmitTargetSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const broadcastTeamMessageEmitTargetSchema: SpruceSchemas.People.v2022_05_29.BroadcastTeamMessageEmitTargetSchema  = {
	id: 'broadcastTeamMessageEmitTarget',
	version: 'v2022_05_29',
	namespace: 'People',
	name: '',
	    fields: {
	            /** . */
	            'locationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(broadcastTeamMessageEmitTargetSchema)

export default broadcastTeamMessageEmitTargetSchema

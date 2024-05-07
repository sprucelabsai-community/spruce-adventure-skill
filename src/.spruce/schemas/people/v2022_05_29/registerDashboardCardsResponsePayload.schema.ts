import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const registerDashboardCardsResponsePayloadSchema: SpruceSchemas.People.v2022_05_29.RegisterDashboardCardsResponsePayloadSchema  = {
	id: 'registerDashboardCardsResponsePayload',
	version: 'v2022_05_29',
	namespace: 'People',
	name: '',
	    fields: {
	            /** . */
	            'vcIds': {
	                type: 'id',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerDashboardCardsResponsePayloadSchema)

export default registerDashboardCardsResponsePayloadSchema

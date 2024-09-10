import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const friendSchema: SpruceSchemas.Adventure.v2022_09_09.FriendSchema  = {
	id: 'friend',
	version: 'v2022_09_09',
	namespace: 'Adventure',
	name: 'Friend',
	    fields: {
	            /** Casual name. The name you can use when talking to this person. */
	            'casualName': {
	                label: 'Casual name',
	                type: 'text',
	                isRequired: true,
	                hint: 'The name you can use when talking to this person.',
	                options: undefined
	            },
	            /** Avatar src. */
	            'avatar': {
	                label: 'Avatar src',
	                type: 'image',
	                options: {requiredSizes: ["*"],}
	            },
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'inviteSender': {
	                type: 'select',
	                isRequired: true,
	                options: {choices: [{"value":"me","label":"Me"},{"value":"them","label":"Them"}],}
	            },
	            /** . */
	            'isInGroup': {
	                type: 'boolean',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(friendSchema)

export default friendSchema

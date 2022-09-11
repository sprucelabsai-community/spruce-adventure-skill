import { buildSchema, pickFields } from '@sprucelabs/schema'
import { personSchema } from '@sprucelabs/spruce-core-schemas'

const listFriendsResponsePayloadBuilder = buildSchema({
	id: 'listFriendsResponsePayload',
	fields: {
		friends: {
			type: 'schema',
			isRequired: true,
			isArray: true,
			minArrayLength: 0,
			options: {
				schema: {
					id: 'friend',
					fields: {
						...pickFields(personSchema.fields, ['casualName', 'avatar', 'id']),
					},
				},
			},
		},
	},
})

export default listFriendsResponsePayloadBuilder

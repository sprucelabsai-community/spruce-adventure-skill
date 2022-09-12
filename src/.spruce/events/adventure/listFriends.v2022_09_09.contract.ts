import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import listFriendsEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/listFriendsEmitTargetAndPayload.schema'
import listFriendsResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/listFriendsResponsePayload.schema'

const listFriendsEventContract = buildEventContract({
	eventSignatures: {
		'adventure.list-friends::v2022_09_09': {
			isGlobal: true,
			emitPayloadSchema: listFriendsEmitTargetAndPayloadSchema,
			responsePayloadSchema: listFriendsResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'listFriendsEmitPermissions',
				name: 'List friends',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-list-friends',
						name: 'Can list friends',
						defaults: {
							loggedIn: {
								default: true,
							},
						},
						requireAllStatuses: false,
					},
				],
			}),
		},
	},
})
export default listFriendsEventContract

export type ListFriendsEventContract = typeof listFriendsEventContract

import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import listResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/listResponsePayload.schema'

const listEventContract = buildEventContract({
	eventSignatures: {
		'adventure.list::v2022_09_09': {
			isGlobal: true,

			responsePayloadSchema: listResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'listEmitPermissions',
				name: 'List',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-list-adventures',
						name: 'Can list adventures',
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
export default listEventContract

export type ListEventContract = typeof listEventContract

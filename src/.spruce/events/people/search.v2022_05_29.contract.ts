import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import searchEmitTargetAndPayloadSchema from '#spruce/schemas/people/v2022_05_29/searchEmitTargetAndPayload.schema'
import searchResponsePayloadSchema from '#spruce/schemas/people/v2022_05_29/searchResponsePayload.schema'

const searchEventContract = buildEventContract({
	eventSignatures: {
		'people.search::v2022_05_29': {
			isGlobal: true,
			emitPayloadSchema: searchEmitTargetAndPayloadSchema,
			responsePayloadSchema: searchResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'searchEmitPermissions',
				name: 'Search',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-search-people',
						name: 'Can search people',
						description: null,
						requireAllStatuses: false,
						defaults: {
							skill: null,
							owner: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
							groupManager: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
							manager: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
							teammate: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
							anonymous: null,
							loggedIn: null,
							guest: null,
						},
						can: null,
					},
				],
			}),
		},
	},
})
export default searchEventContract

export type SearchEventContract = typeof searchEventContract

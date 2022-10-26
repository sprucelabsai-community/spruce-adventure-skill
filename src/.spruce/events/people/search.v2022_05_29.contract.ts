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
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-search-people',
						name: 'Can search people',
						defaults: {
							owner: {
								default: true,
							},
							groupManager: {
								default: true,
							},
							manager: {
								default: true,
							},
							teammate: {
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
export default searchEventContract

export type SearchEventContract = typeof searchEventContract

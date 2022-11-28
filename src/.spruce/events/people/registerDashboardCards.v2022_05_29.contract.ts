import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import registerDashboardCardsResponsePayloadSchema from '#spruce/schemas/people/v2022_05_29/registerDashboardCardsResponsePayload.schema'

const registerDashboardCardsEventContract = buildEventContract({
	eventSignatures: {
		'people.register-dashboard-cards::v2022_05_29': {
			isGlobal: true,

			responsePayloadSchema: registerDashboardCardsResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'registerDashboardCardsEmitPermissions',
				name: 'Register dashboard cards',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-register-dashboard-cards',
						name: 'Register get registered cards',
						description: null,
						requireAllStatuses: null,
						defaults: {
							skill: null,
							owner: null,
							groupManager: null,
							manager: null,
							teammate: null,
							anonymous: null,
							loggedIn: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
							guest: null,
						},
						can: null,
					},
				],
			}),
			listenPermissionContract: buildPermissionContract({
				id: 'registerDashboardCardsListenPermissions',
				name: 'Register dashboard cards',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-register-dashboard-cards',
						name: 'Can register dashboard cards',
						description: null,
						requireAllStatuses: false,
						defaults: {
							skill: true,
							owner: null,
							groupManager: null,
							manager: null,
							teammate: null,
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
export default registerDashboardCardsEventContract

export type RegisterDashboardCardsEventContract =
	typeof registerDashboardCardsEventContract

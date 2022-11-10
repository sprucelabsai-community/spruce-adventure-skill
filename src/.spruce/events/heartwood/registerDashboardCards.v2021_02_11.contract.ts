import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import registerDashboardCardsResponsePayloadSchema from '#spruce/schemas/heartwood/v2021_02_11/registerDashboardCardsResponsePayload.schema'

const registerDashboardCardsEventContract = buildEventContract({
	eventSignatures: {
		'heartwood.register-dashboard-cards::v2021_02_11': {
			isGlobal: true,

			responsePayloadSchema: registerDashboardCardsResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'registerDashboardCardsEmitPermissions',
				name: 'register dashboard cards',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-get-dashboard-cards',
						name: 'Can get dashboard cards',
						description: 'Can get dashboard cards',
						defaults: {
							anonymous: {
								default: true,
							},
							loggedIn: {
								default: true,
							},
						},
						requireAllStatuses: false,
					},
				],
			}),
			listenPermissionContract: buildPermissionContract({
				id: 'registerDashboardCardsListenPermissions',
				name: 'register dashboard cards',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-register-dashboard-cards',
						name: 'Can register dashboard cards',
						defaults: {
							skill: true,
						},
						requireAllStatuses: false,
					},
				],
			}),
		},
	},
})
export default registerDashboardCardsEventContract

export type RegisterDashboardCardsEventContract =
	typeof registerDashboardCardsEventContract

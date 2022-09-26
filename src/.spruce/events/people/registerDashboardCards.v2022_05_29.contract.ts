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
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-register-dashboard-cards',
						name: 'Register get registered cards',
						defaults: {
							loggedIn: {
								default: true,
							},
						},
					},
				],
			}),
			listenPermissionContract: buildPermissionContract({
				id: 'registerDashboardCardsListenPermissions',
				name: 'Register dashboard cards',
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

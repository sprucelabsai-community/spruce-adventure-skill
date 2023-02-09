import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import registerDashboardCardsResponsePayloadSchema from '#spruce/schemas/people/v2022_05_29/registerDashboardCardsResponsePayload.schema'

const registerDashboardCardsEventContract = buildEventContract({
	eventSignatures: {
		'people.register-dashboard-cards::v2022_05_29': {
			isGlobal: true,
			emitPermissions: {
				contractId: 'people.people-contract',
				permissionIdsAny: ['can-see-dashboard-cards'],
			},
			listenPermissions: {
				contractId: 'people.people-contract',
				permissionIdsAny: ['can-register-dashboard-cards'],
			},

			responsePayloadSchema: registerDashboardCardsResponsePayloadSchema,
		},
	},
})
export default registerDashboardCardsEventContract

export type RegisterDashboardCardsEventContract =
	typeof registerDashboardCardsEventContract

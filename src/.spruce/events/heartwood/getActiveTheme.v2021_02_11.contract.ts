import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import getActiveThemeEmitTargetAndPayloadSchema from '#spruce/schemas/heartwood/v2021_02_11/getActiveThemeEmitTargetAndPayload.schema'
import getActiveThemeResponsePayloadSchema from '#spruce/schemas/heartwood/v2021_02_11/getActiveThemeResponsePayload.schema'

const getActiveThemeEventContract = buildEventContract({
	eventSignatures: {
		'heartwood.get-active-theme::v2021_02_11': {
			isGlobal: true,
			emitPayloadSchema: getActiveThemeEmitTargetAndPayloadSchema,
			responsePayloadSchema: getActiveThemeResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'getActiveThemeEmitPermissions',
				name: 'Get active theme',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-get-active-theme',
						name: 'Can get active theme',
						defaults: {
							loggedIn: {
								default: true,
							},
							anonymous: {
								default: true,
							},
							skill: true,
						},
						requireAllStatuses: false,
					},
				],
			}),
		},
	},
})
export default getActiveThemeEventContract

export type GetActiveThemeEventContract = typeof getActiveThemeEventContract

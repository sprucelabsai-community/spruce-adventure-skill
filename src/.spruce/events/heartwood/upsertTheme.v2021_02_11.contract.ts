import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import upsertThemeEmitTargetAndPayloadSchema from '#spruce/schemas/heartwood/v2021_02_11/upsertThemeEmitTargetAndPayload.schema'
import upsertThemeResponsePayloadSchema from '#spruce/schemas/heartwood/v2021_02_11/upsertThemeResponsePayload.schema'

const upsertThemeEventContract = buildEventContract({
	eventSignatures: {
		'heartwood.upsert-theme::v2021_02_11': {
			isGlobal: true,
			emitPayloadSchema: upsertThemeEmitTargetAndPayloadSchema,
			responsePayloadSchema: upsertThemeResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'upsertThemeEmitPermissions',
				name: 'upsert theme',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-manage-organization-themes',
						name: 'Can manage org themes',
						defaults: {
							owner: {
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
export default upsertThemeEventContract

export type UpsertThemeEventContract = typeof upsertThemeEventContract

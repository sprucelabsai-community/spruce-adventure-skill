import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import listViewsResponsePayloadSchema from '#spruce/schemas/heartwood/v2021_02_11/listViewsResponsePayload.schema'

const listViewsEventContract = buildEventContract({
	eventSignatures: {
		'heartwood.list-views::v2021_02_11': {
			isGlobal: true,

			responsePayloadSchema: listViewsResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'listViewsEmitPermissions',
				name: 'List skill views',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-list-skill-views',
						name: 'Can list skill views',
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
export default listViewsEventContract

export type ListViewsEventContract = typeof listViewsEventContract

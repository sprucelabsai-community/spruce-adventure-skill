import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import getEmitTargetAndPayloadSchema from '#spruce/schemas/people/v2022_05_29/getEmitTargetAndPayload.schema'
import getResponsePayloadSchema from '#spruce/schemas/people/v2022_05_29/getResponsePayload.schema'

const getEventContract = buildEventContract({
	eventSignatures: {
		'people.get::v2022_05_29': {
			isGlobal: true,

			emitPayloadSchema: getEmitTargetAndPayloadSchema,
			responsePayloadSchema: getResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'getEmitPermissions',
				name: 'Get',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-get-person',
						name: 'Can get person',
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
							skill: true,
						},
						requireAllStatuses: false,
					},
				],
			}),
			listenPermissionContract: buildPermissionContract({
				id: 'getListenPermissions',
				name: 'Get',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-high-five',
						name: 'Can give high five',
						description: 'Will this person be allowed to high five?',
						defaults: {
							skill: false,
						},
						requireAllStatuses: false,
					},
				],
			}),
		},
	},
})
export default getEventContract

export type GetEventContract = typeof getEventContract

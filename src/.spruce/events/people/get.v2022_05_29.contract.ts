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
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-get-person',
						name: 'Can get person',
						description: null,
						requireAllStatuses: false,
						defaults: {
							skill: true,
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
			listenPermissionContract: buildPermissionContract({
				id: 'getListenPermissions',
				name: 'Get',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-high-five',
						name: 'Can give high five',
						description: 'Will this person be allowed to high five?',
						requireAllStatuses: false,
						defaults: {
							skill: false,
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
export default getEventContract

export type GetEventContract = typeof getEventContract

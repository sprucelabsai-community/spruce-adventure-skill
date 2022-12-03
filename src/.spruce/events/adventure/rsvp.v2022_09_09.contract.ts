import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import rsvpEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/rsvpEmitTargetAndPayload.schema'
import rsvpResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/rsvpResponsePayload.schema'

const rsvpEventContract = buildEventContract({
	eventSignatures: {
		'adventure.rsvp::v2022_09_09': {
			isGlobal: true,

			emitPayloadSchema: rsvpEmitTargetAndPayloadSchema,
			responsePayloadSchema: rsvpResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'rsvpEmitPermissions',
				name: 'Rsvp',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-rsvp',
						name: 'Can rsvp',
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
export default rsvpEventContract

export type RsvpEventContract = typeof rsvpEventContract

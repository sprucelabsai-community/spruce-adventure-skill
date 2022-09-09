import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import postAdventureEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/postAdventureEmitTargetAndPayload.schema'
import postAdventureResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/postAdventureResponsePayload.schema'

const postAdventureEventContract = buildEventContract({
	eventSignatures: {
		'adventure.post-adventure::v2022_09_09': {
			isGlobal: true,
			emitPayloadSchema: postAdventureEmitTargetAndPayloadSchema,
			responsePayloadSchema: postAdventureResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'postAdventureEmitPermissions',
				name: 'Post adventure',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-post-adventure',
						name: 'Can post adventure',
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
export default postAdventureEventContract

export type PostAdventureEventContract = typeof postAdventureEventContract

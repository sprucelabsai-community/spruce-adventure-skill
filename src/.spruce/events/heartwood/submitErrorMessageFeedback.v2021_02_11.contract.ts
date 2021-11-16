import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import submitErrorMessageFeedbackEmitTargetAndPayloadSchema from '#spruce/schemas/heartwood/v2021_02_11/submitErrorMessageFeedbackEmitTargetAndPayload.schema'

const submitErrorMessageFeedbackEventContract = buildEventContract({
	eventSignatures: {
		'heartwood.submit-error-message-feedback::v2021_02_11': {
			emitPayloadSchema: submitErrorMessageFeedbackEmitTargetAndPayloadSchema,

			emitPermissionContract: buildPermissionContract({
				id: 'submitErrorMessageFeedbackEmitPermissions',
				name: 'Submit error message feedback',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-submit-error-message-feedback',
						name: 'Can submit error message feeback!',
						description:
							'This is the ability to submit the form on @heartwood.error.',
						requireAllStatuses: false,
						defaults: {
							skill: null,
							owner: null,
							groupManager: null,
							manager: null,
							teammate: null,
							guest: null,
							anonymous: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
							loggedIn: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
						},
						can: null,
					},
				],
			}),
		},
	},
})
export default submitErrorMessageFeedbackEventContract

export type SubmitErrorMessageFeedbackEventContract =
	typeof submitErrorMessageFeedbackEventContract

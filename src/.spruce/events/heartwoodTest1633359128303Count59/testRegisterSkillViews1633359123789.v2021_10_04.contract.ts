import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633359123789EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633359128303Count59/v2021_10_04/testRegisterSkillViews1633359123789EmitTargetAndPayload.schema'
import testRegisterSkillViews1633359123789ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633359128303Count59/v2021_10_04/testRegisterSkillViews1633359123789ResponsePayload.schema'

const testRegisterSkillViews1633359123789EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633359128303-count-59.test-register-skill-views1633359123789::v2021_10_04':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633359123789EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633359123789ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633359123789EmitPermissions',
					name: 'did book appointment',
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
								guest: null,
								anonymous: null,
								loggedIn: null,
							},
							can: null,
						},
					],
				}),
				listenPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633359123789ListenPermissions',
					name: 'did book appointment',
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
								guest: null,
								anonymous: null,
								loggedIn: null,
							},
							can: null,
						},
					],
				}),
			},
	},
})
export default testRegisterSkillViews1633359123789EventContract

export type TestRegisterSkillViews1633359123789EventContract =
	typeof testRegisterSkillViews1633359123789EventContract

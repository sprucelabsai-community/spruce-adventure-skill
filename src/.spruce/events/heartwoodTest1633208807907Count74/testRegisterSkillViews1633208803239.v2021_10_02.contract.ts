import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633208803239EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633208807907Count74/v2021_10_02/testRegisterSkillViews1633208803239EmitTargetAndPayload.schema'
import testRegisterSkillViews1633208803239ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633208807907Count74/v2021_10_02/testRegisterSkillViews1633208803239ResponsePayload.schema'

const testRegisterSkillViews1633208803239EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633208807907-count-74.test-register-skill-views1633208803239::v2021_10_02':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633208803239EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633208803239ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633208803239EmitPermissions',
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
					id: 'testRegisterSkillViews1633208803239ListenPermissions',
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
export default testRegisterSkillViews1633208803239EventContract

export type TestRegisterSkillViews1633208803239EventContract =
	typeof testRegisterSkillViews1633208803239EventContract

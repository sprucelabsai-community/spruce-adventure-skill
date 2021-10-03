import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633251297754EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633251301464Count33/v2021_10_03/testRegisterSkillViews1633251297754EmitTargetAndPayload.schema'
import testRegisterSkillViews1633251297754ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633251301464Count33/v2021_10_03/testRegisterSkillViews1633251297754ResponsePayload.schema'

const testRegisterSkillViews1633251297754EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633251301464-count-33.test-register-skill-views1633251297754::v2021_10_03':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633251297754EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633251297754ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633251297754EmitPermissions',
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
					id: 'testRegisterSkillViews1633251297754ListenPermissions',
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
export default testRegisterSkillViews1633251297754EventContract

export type TestRegisterSkillViews1633251297754EventContract =
	typeof testRegisterSkillViews1633251297754EventContract

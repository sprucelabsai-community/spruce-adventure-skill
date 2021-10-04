import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633338527002EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633338529459Count56/v2021_10_04/testRegisterSkillViews1633338527002EmitTargetAndPayload.schema'
import testRegisterSkillViews1633338527002ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633338529459Count56/v2021_10_04/testRegisterSkillViews1633338527002ResponsePayload.schema'

const testRegisterSkillViews1633338527002EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633338529459-count-56.test-register-skill-views1633338527002::v2021_10_04':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633338527002EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633338527002ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633338527002EmitPermissions',
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
					id: 'testRegisterSkillViews1633338527002ListenPermissions',
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
export default testRegisterSkillViews1633338527002EventContract

export type TestRegisterSkillViews1633338527002EventContract =
	typeof testRegisterSkillViews1633338527002EventContract

import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633704428874EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633704430799Count60/v2021_10_08/testRegisterSkillViews1633704428874EmitTargetAndPayload.schema'
import testRegisterSkillViews1633704428874ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633704430799Count60/v2021_10_08/testRegisterSkillViews1633704428874ResponsePayload.schema'

const testRegisterSkillViews1633704428874EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633704430799-count-60.test-register-skill-views1633704428874::v2021_10_08':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633704428874EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633704428874ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633704428874EmitPermissions',
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
					id: 'testRegisterSkillViews1633704428874ListenPermissions',
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
export default testRegisterSkillViews1633704428874EventContract

export type TestRegisterSkillViews1633704428874EventContract =
	typeof testRegisterSkillViews1633704428874EventContract

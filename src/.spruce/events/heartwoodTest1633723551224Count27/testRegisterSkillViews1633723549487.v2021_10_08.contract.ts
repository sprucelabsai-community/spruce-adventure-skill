import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633723549487EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633723551224Count27/v2021_10_08/testRegisterSkillViews1633723549487EmitTargetAndPayload.schema'
import testRegisterSkillViews1633723549487ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633723551224Count27/v2021_10_08/testRegisterSkillViews1633723549487ResponsePayload.schema'

const testRegisterSkillViews1633723549487EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633723551224-count-27.test-register-skill-views1633723549487::v2021_10_08':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633723549487EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633723549487ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633723549487EmitPermissions',
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
					id: 'testRegisterSkillViews1633723549487ListenPermissions',
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
export default testRegisterSkillViews1633723549487EventContract

export type TestRegisterSkillViews1633723549487EventContract =
	typeof testRegisterSkillViews1633723549487EventContract

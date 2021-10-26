import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1635281368927EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1635281370773Count68CliTest/v2021_10_26/testRegisterSkillViews1635281368927EmitTargetAndPayload.schema'
import testRegisterSkillViews1635281368927ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1635281370773Count68CliTest/v2021_10_26/testRegisterSkillViews1635281368927ResponsePayload.schema'

const testRegisterSkillViews1635281368927EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1635281370773-count-68-cli-test.test-register-skill-views1635281368927::v2021_10_26':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1635281368927EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1635281368927ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1635281368927EmitPermissions',
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
					id: 'testRegisterSkillViews1635281368927ListenPermissions',
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
export default testRegisterSkillViews1635281368927EventContract

export type TestRegisterSkillViews1635281368927EventContract =
	typeof testRegisterSkillViews1635281368927EventContract

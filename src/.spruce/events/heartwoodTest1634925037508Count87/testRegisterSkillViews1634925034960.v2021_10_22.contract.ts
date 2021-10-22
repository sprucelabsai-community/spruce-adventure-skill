import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1634925034960EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1634925037508Count87/v2021_10_22/testRegisterSkillViews1634925034960EmitTargetAndPayload.schema'
import testRegisterSkillViews1634925034960ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1634925037508Count87/v2021_10_22/testRegisterSkillViews1634925034960ResponsePayload.schema'

const testRegisterSkillViews1634925034960EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1634925037508-count-87.test-register-skill-views1634925034960::v2021_10_22':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1634925034960EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1634925034960ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1634925034960EmitPermissions',
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
					id: 'testRegisterSkillViews1634925034960ListenPermissions',
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
export default testRegisterSkillViews1634925034960EventContract

export type TestRegisterSkillViews1634925034960EventContract =
	typeof testRegisterSkillViews1634925034960EventContract

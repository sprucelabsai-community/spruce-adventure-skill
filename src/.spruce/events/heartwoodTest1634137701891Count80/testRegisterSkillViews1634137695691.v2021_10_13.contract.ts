import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1634137695691EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1634137701891Count80/v2021_10_13/testRegisterSkillViews1634137695691EmitTargetAndPayload.schema'
import testRegisterSkillViews1634137695691ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1634137701891Count80/v2021_10_13/testRegisterSkillViews1634137695691ResponsePayload.schema'

const testRegisterSkillViews1634137695691EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1634137701891-count-80.test-register-skill-views1634137695691::v2021_10_13':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1634137695691EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1634137695691ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1634137695691EmitPermissions',
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
					id: 'testRegisterSkillViews1634137695691ListenPermissions',
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
export default testRegisterSkillViews1634137695691EventContract

export type TestRegisterSkillViews1634137695691EventContract =
	typeof testRegisterSkillViews1634137695691EventContract

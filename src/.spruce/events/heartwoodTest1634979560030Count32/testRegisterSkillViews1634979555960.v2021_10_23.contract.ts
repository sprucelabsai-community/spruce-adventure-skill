import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1634979555960EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1634979560030Count32/v2021_10_23/testRegisterSkillViews1634979555960EmitTargetAndPayload.schema'
import testRegisterSkillViews1634979555960ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1634979560030Count32/v2021_10_23/testRegisterSkillViews1634979555960ResponsePayload.schema'

const testRegisterSkillViews1634979555960EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1634979560030-count-32.test-register-skill-views1634979555960::v2021_10_23':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1634979555960EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1634979555960ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1634979555960EmitPermissions',
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
					id: 'testRegisterSkillViews1634979555960ListenPermissions',
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
export default testRegisterSkillViews1634979555960EventContract

export type TestRegisterSkillViews1634979555960EventContract =
	typeof testRegisterSkillViews1634979555960EventContract

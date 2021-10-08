import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633683200043EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633683201575Count83/v2021_10_08/testRegisterSkillViews1633683200043EmitTargetAndPayload.schema'
import testRegisterSkillViews1633683200043ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633683201575Count83/v2021_10_08/testRegisterSkillViews1633683200043ResponsePayload.schema'

const testRegisterSkillViews1633683200043EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633683201575-count-83.test-register-skill-views1633683200043::v2021_10_08':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633683200043EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633683200043ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633683200043EmitPermissions',
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
					id: 'testRegisterSkillViews1633683200043ListenPermissions',
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
export default testRegisterSkillViews1633683200043EventContract

export type TestRegisterSkillViews1633683200043EventContract =
	typeof testRegisterSkillViews1633683200043EventContract

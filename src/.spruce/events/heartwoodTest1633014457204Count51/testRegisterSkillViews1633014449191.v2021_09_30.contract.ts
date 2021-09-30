import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633014449191EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633014457204Count51/v2021_09_30/testRegisterSkillViews1633014449191EmitTargetAndPayload.schema'
import testRegisterSkillViews1633014449191ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633014457204Count51/v2021_09_30/testRegisterSkillViews1633014449191ResponsePayload.schema'

const testRegisterSkillViews1633014449191EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633014457204-count-51.test-register-skill-views1633014449191::v2021_09_30':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633014449191EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633014449191ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633014449191EmitPermissions',
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
					id: 'testRegisterSkillViews1633014449191ListenPermissions',
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
export default testRegisterSkillViews1633014449191EventContract

export type TestRegisterSkillViews1633014449191EventContract =
	typeof testRegisterSkillViews1633014449191EventContract

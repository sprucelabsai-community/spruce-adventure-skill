import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633099962236EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633099971894Count90/v2021_10_01/testRegisterSkillViews1633099962236EmitTargetAndPayload.schema'
import testRegisterSkillViews1633099962236ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633099971894Count90/v2021_10_01/testRegisterSkillViews1633099962236ResponsePayload.schema'

const testRegisterSkillViews1633099962236EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633099971894-count-90.test-register-skill-views1633099962236::v2021_10_01':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633099962236EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633099962236ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633099962236EmitPermissions',
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
					id: 'testRegisterSkillViews1633099962236ListenPermissions',
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
export default testRegisterSkillViews1633099962236EventContract

export type TestRegisterSkillViews1633099962236EventContract =
	typeof testRegisterSkillViews1633099962236EventContract

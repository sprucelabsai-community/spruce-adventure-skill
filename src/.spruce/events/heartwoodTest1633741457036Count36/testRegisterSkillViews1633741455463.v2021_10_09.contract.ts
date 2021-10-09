import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633741455463EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633741457036Count36/v2021_10_09/testRegisterSkillViews1633741455463EmitTargetAndPayload.schema'
import testRegisterSkillViews1633741455463ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633741457036Count36/v2021_10_09/testRegisterSkillViews1633741455463ResponsePayload.schema'

const testRegisterSkillViews1633741455463EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633741457036-count-36.test-register-skill-views1633741455463::v2021_10_09':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633741455463EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633741455463ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633741455463EmitPermissions',
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
					id: 'testRegisterSkillViews1633741455463ListenPermissions',
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
export default testRegisterSkillViews1633741455463EventContract

export type TestRegisterSkillViews1633741455463EventContract =
	typeof testRegisterSkillViews1633741455463EventContract

import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633136942248EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633136944041Count98/v2021_10_02/testRegisterSkillViews1633136942248EmitTargetAndPayload.schema'
import testRegisterSkillViews1633136942248ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633136944041Count98/v2021_10_02/testRegisterSkillViews1633136942248ResponsePayload.schema'

const testRegisterSkillViews1633136942248EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633136944041-count-98.test-register-skill-views1633136942248::v2021_10_02':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633136942248EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633136942248ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633136942248EmitPermissions',
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
					id: 'testRegisterSkillViews1633136942248ListenPermissions',
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
export default testRegisterSkillViews1633136942248EventContract

export type TestRegisterSkillViews1633136942248EventContract =
	typeof testRegisterSkillViews1633136942248EventContract

import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633036115297EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633036120872Count43/v2021_09_30/testRegisterSkillViews1633036115297EmitTargetAndPayload.schema'
import testRegisterSkillViews1633036115297ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633036120872Count43/v2021_09_30/testRegisterSkillViews1633036115297ResponsePayload.schema'

const testRegisterSkillViews1633036115297EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633036120872-count-43.test-register-skill-views1633036115297::v2021_09_30':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633036115297EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633036115297ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633036115297EmitPermissions',
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
					id: 'testRegisterSkillViews1633036115297ListenPermissions',
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
export default testRegisterSkillViews1633036115297EventContract

export type TestRegisterSkillViews1633036115297EventContract =
	typeof testRegisterSkillViews1633036115297EventContract

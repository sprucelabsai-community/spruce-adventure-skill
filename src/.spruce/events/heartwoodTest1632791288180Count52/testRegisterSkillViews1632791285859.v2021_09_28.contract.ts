import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1632791285859EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1632791288180Count52/v2021_09_28/testRegisterSkillViews1632791285859EmitTargetAndPayload.schema'
import testRegisterSkillViews1632791285859ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1632791288180Count52/v2021_09_28/testRegisterSkillViews1632791285859ResponsePayload.schema'

const testRegisterSkillViews1632791285859EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1632791288180-count-52.test-register-skill-views1632791285859::v2021_09_28':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1632791285859EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1632791285859ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1632791285859EmitPermissions',
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
					id: 'testRegisterSkillViews1632791285859ListenPermissions',
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
export default testRegisterSkillViews1632791285859EventContract

export type TestRegisterSkillViews1632791285859EventContract =
	typeof testRegisterSkillViews1632791285859EventContract

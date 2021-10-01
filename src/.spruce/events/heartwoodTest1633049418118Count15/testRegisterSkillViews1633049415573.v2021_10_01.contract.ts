import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633049415573EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633049418118Count15/v2021_10_01/testRegisterSkillViews1633049415573EmitTargetAndPayload.schema'
import testRegisterSkillViews1633049415573ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633049418118Count15/v2021_10_01/testRegisterSkillViews1633049415573ResponsePayload.schema'

const testRegisterSkillViews1633049415573EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633049418118-count-15.test-register-skill-views1633049415573::v2021_10_01':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633049415573EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633049415573ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633049415573EmitPermissions',
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
					id: 'testRegisterSkillViews1633049415573ListenPermissions',
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
export default testRegisterSkillViews1633049415573EventContract

export type TestRegisterSkillViews1633049415573EventContract =
	typeof testRegisterSkillViews1633049415573EventContract

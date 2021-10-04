import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633380622429EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633380629410Count28/v2021_10_04/testRegisterSkillViews1633380622429EmitTargetAndPayload.schema'
import testRegisterSkillViews1633380622429ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633380629410Count28/v2021_10_04/testRegisterSkillViews1633380622429ResponsePayload.schema'

const testRegisterSkillViews1633380622429EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633380629410-count-28.test-register-skill-views1633380622429::v2021_10_04':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633380622429EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633380622429ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633380622429EmitPermissions',
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
					id: 'testRegisterSkillViews1633380622429ListenPermissions',
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
export default testRegisterSkillViews1633380622429EventContract

export type TestRegisterSkillViews1633380622429EventContract =
	typeof testRegisterSkillViews1633380622429EventContract

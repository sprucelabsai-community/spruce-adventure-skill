import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633548864466EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633548866312Count47/v2021_10_06/testRegisterSkillViews1633548864466EmitTargetAndPayload.schema'
import testRegisterSkillViews1633548864466ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633548866312Count47/v2021_10_06/testRegisterSkillViews1633548864466ResponsePayload.schema'

const testRegisterSkillViews1633548864466EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633548866312-count-47.test-register-skill-views1633548864466::v2021_10_06':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633548864466EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633548864466ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633548864466EmitPermissions',
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
					id: 'testRegisterSkillViews1633548864466ListenPermissions',
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
export default testRegisterSkillViews1633548864466EventContract

export type TestRegisterSkillViews1633548864466EventContract =
	typeof testRegisterSkillViews1633548864466EventContract

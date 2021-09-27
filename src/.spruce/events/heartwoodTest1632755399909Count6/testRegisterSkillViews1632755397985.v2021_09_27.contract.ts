import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1632755397985EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1632755399909Count6/v2021_09_27/testRegisterSkillViews1632755397985EmitTargetAndPayload.schema'
import testRegisterSkillViews1632755397985ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1632755399909Count6/v2021_09_27/testRegisterSkillViews1632755397985ResponsePayload.schema'

const testRegisterSkillViews1632755397985EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1632755399909-count-6.test-register-skill-views1632755397985::v2021_09_27':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1632755397985EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1632755397985ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1632755397985EmitPermissions',
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
					id: 'testRegisterSkillViews1632755397985ListenPermissions',
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
export default testRegisterSkillViews1632755397985EventContract

export type TestRegisterSkillViews1632755397985EventContract =
	typeof testRegisterSkillViews1632755397985EventContract

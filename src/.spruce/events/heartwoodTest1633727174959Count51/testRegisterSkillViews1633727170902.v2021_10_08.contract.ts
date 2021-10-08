import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633727170902EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633727174959Count51/v2021_10_08/testRegisterSkillViews1633727170902EmitTargetAndPayload.schema'
import testRegisterSkillViews1633727170902ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633727174959Count51/v2021_10_08/testRegisterSkillViews1633727170902ResponsePayload.schema'

const testRegisterSkillViews1633727170902EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633727174959-count-51.test-register-skill-views1633727170902::v2021_10_08':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633727170902EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633727170902ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633727170902EmitPermissions',
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
					id: 'testRegisterSkillViews1633727170902ListenPermissions',
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
export default testRegisterSkillViews1633727170902EventContract

export type TestRegisterSkillViews1633727170902EventContract =
	typeof testRegisterSkillViews1633727170902EventContract

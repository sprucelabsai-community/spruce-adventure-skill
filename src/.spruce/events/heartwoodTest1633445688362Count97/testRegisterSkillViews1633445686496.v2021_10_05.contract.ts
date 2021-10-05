import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633445686496EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633445688362Count97/v2021_10_05/testRegisterSkillViews1633445686496EmitTargetAndPayload.schema'
import testRegisterSkillViews1633445686496ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633445688362Count97/v2021_10_05/testRegisterSkillViews1633445686496ResponsePayload.schema'

const testRegisterSkillViews1633445686496EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633445688362-count-97.test-register-skill-views1633445686496::v2021_10_05':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633445686496EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633445686496ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633445686496EmitPermissions',
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
					id: 'testRegisterSkillViews1633445686496ListenPermissions',
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
export default testRegisterSkillViews1633445686496EventContract

export type TestRegisterSkillViews1633445686496EventContract =
	typeof testRegisterSkillViews1633445686496EventContract

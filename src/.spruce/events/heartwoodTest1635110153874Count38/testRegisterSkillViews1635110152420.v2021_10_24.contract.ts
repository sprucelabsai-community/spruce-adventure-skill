import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1635110152420EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1635110153874Count38/v2021_10_24/testRegisterSkillViews1635110152420EmitTargetAndPayload.schema'
import testRegisterSkillViews1635110152420ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1635110153874Count38/v2021_10_24/testRegisterSkillViews1635110152420ResponsePayload.schema'

const testRegisterSkillViews1635110152420EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1635110153874-count-38.test-register-skill-views1635110152420::v2021_10_24':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1635110152420EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1635110152420ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1635110152420EmitPermissions',
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
					id: 'testRegisterSkillViews1635110152420ListenPermissions',
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
export default testRegisterSkillViews1635110152420EventContract

export type TestRegisterSkillViews1635110152420EventContract =
	typeof testRegisterSkillViews1635110152420EventContract

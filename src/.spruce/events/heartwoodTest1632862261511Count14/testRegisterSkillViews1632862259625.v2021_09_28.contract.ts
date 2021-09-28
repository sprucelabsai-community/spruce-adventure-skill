import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1632862259625EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1632862261511Count14/v2021_09_28/testRegisterSkillViews1632862259625EmitTargetAndPayload.schema'
import testRegisterSkillViews1632862259625ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1632862261511Count14/v2021_09_28/testRegisterSkillViews1632862259625ResponsePayload.schema'

const testRegisterSkillViews1632862259625EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1632862261511-count-14.test-register-skill-views1632862259625::v2021_09_28':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1632862259625EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1632862259625ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1632862259625EmitPermissions',
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
					id: 'testRegisterSkillViews1632862259625ListenPermissions',
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
export default testRegisterSkillViews1632862259625EventContract

export type TestRegisterSkillViews1632862259625EventContract =
	typeof testRegisterSkillViews1632862259625EventContract

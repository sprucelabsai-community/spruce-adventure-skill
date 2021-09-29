import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1632936092618EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1632936095722Count87/v2021_09_29/testRegisterSkillViews1632936092618EmitTargetAndPayload.schema'
import testRegisterSkillViews1632936092618ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1632936095722Count87/v2021_09_29/testRegisterSkillViews1632936092618ResponsePayload.schema'

const testRegisterSkillViews1632936092618EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1632936095722-count-87.test-register-skill-views1632936092618::v2021_09_29':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1632936092618EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1632936092618ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1632936092618EmitPermissions',
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
					id: 'testRegisterSkillViews1632936092618ListenPermissions',
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
export default testRegisterSkillViews1632936092618EventContract

export type TestRegisterSkillViews1632936092618EventContract =
	typeof testRegisterSkillViews1632936092618EventContract

import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633221942649EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633221948325Count34/v2021_10_03/testRegisterSkillViews1633221942649EmitTargetAndPayload.schema'
import testRegisterSkillViews1633221942649ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633221948325Count34/v2021_10_03/testRegisterSkillViews1633221942649ResponsePayload.schema'

const testRegisterSkillViews1633221942649EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633221948325-count-34.test-register-skill-views1633221942649::v2021_10_03':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633221942649EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633221942649ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633221942649EmitPermissions',
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
					id: 'testRegisterSkillViews1633221942649ListenPermissions',
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
export default testRegisterSkillViews1633221942649EventContract

export type TestRegisterSkillViews1633221942649EventContract =
	typeof testRegisterSkillViews1633221942649EventContract

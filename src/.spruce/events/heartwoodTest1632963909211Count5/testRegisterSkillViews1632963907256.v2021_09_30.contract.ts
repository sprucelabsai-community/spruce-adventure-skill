import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1632963907256EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1632963909211Count5/v2021_09_30/testRegisterSkillViews1632963907256EmitTargetAndPayload.schema'
import testRegisterSkillViews1632963907256ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1632963909211Count5/v2021_09_30/testRegisterSkillViews1632963907256ResponsePayload.schema'

const testRegisterSkillViews1632963907256EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1632963909211-count-5.test-register-skill-views1632963907256::v2021_09_30':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1632963907256EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1632963907256ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1632963907256EmitPermissions',
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
					id: 'testRegisterSkillViews1632963907256ListenPermissions',
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
export default testRegisterSkillViews1632963907256EventContract

export type TestRegisterSkillViews1632963907256EventContract =
	typeof testRegisterSkillViews1632963907256EventContract

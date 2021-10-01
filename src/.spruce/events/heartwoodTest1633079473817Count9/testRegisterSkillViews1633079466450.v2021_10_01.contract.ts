import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633079466450EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633079473817Count9/v2021_10_01/testRegisterSkillViews1633079466450EmitTargetAndPayload.schema'
import testRegisterSkillViews1633079466450ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633079473817Count9/v2021_10_01/testRegisterSkillViews1633079466450ResponsePayload.schema'

const testRegisterSkillViews1633079466450EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633079473817-count-9.test-register-skill-views1633079466450::v2021_10_01':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633079466450EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633079466450ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633079466450EmitPermissions',
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
					id: 'testRegisterSkillViews1633079466450ListenPermissions',
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
export default testRegisterSkillViews1633079466450EventContract

export type TestRegisterSkillViews1633079466450EventContract =
	typeof testRegisterSkillViews1633079466450EventContract

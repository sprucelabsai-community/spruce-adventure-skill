import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633467209749EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633467211240Count49/v2021_10_05/testRegisterSkillViews1633467209749EmitTargetAndPayload.schema'
import testRegisterSkillViews1633467209749ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633467211240Count49/v2021_10_05/testRegisterSkillViews1633467209749ResponsePayload.schema'

const testRegisterSkillViews1633467209749EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633467211240-count-49.test-register-skill-views1633467209749::v2021_10_05':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633467209749EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633467209749ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633467209749EmitPermissions',
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
					id: 'testRegisterSkillViews1633467209749ListenPermissions',
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
export default testRegisterSkillViews1633467209749EventContract

export type TestRegisterSkillViews1633467209749EventContract =
	typeof testRegisterSkillViews1633467209749EventContract

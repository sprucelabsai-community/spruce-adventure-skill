import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1632494981137EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1632494989233Count83/v2021_09_24/testRegisterSkillViews1632494981137EmitTargetAndPayload.schema'
import testRegisterSkillViews1632494981137ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1632494989233Count83/v2021_09_24/testRegisterSkillViews1632494981137ResponsePayload.schema'

const testRegisterSkillViews1632494981137EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1632494989233-count-83.test-register-skill-views1632494981137::v2021_09_24':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1632494981137EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1632494981137ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1632494981137EmitPermissions',
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
					id: 'testRegisterSkillViews1632494981137ListenPermissions',
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
export default testRegisterSkillViews1632494981137EventContract

export type TestRegisterSkillViews1632494981137EventContract =
	typeof testRegisterSkillViews1632494981137EventContract

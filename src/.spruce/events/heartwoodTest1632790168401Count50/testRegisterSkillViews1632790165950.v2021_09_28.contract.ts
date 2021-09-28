import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1632790165950EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1632790168401Count50/v2021_09_28/testRegisterSkillViews1632790165950EmitTargetAndPayload.schema'
import testRegisterSkillViews1632790165950ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1632790168401Count50/v2021_09_28/testRegisterSkillViews1632790165950ResponsePayload.schema'

const testRegisterSkillViews1632790165950EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1632790168401-count-50.test-register-skill-views1632790165950::v2021_09_28':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1632790165950EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1632790165950ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1632790165950EmitPermissions',
					name: 'did book appointment',
					requireAllPermissions: false,
					permissions: [
						{
							id: 'can-high-five',
							name: 'Can give high five',
							description: 'Will this person be allowed to high five?',
							defaults: {
								skill: false,
							},
							requireAllStatuses: false,
						},
					],
				}),
				listenPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1632790165950ListenPermissions',
					name: 'did book appointment',
					requireAllPermissions: false,
					permissions: [
						{
							id: 'can-high-five',
							name: 'Can give high five',
							description: 'Will this person be allowed to high five?',
							defaults: {
								skill: false,
							},
							requireAllStatuses: false,
						},
					],
				}),
			},
	},
})
export default testRegisterSkillViews1632790165950EventContract

export type TestRegisterSkillViews1632790165950EventContract =
	typeof testRegisterSkillViews1632790165950EventContract

import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1632804048851EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1632804055518Count98/v2021_09_28/testRegisterSkillViews1632804048851EmitTargetAndPayload.schema'
import testRegisterSkillViews1632804048851ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1632804055518Count98/v2021_09_28/testRegisterSkillViews1632804048851ResponsePayload.schema'

const testRegisterSkillViews1632804048851EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1632804055518-count-98.test-register-skill-views1632804048851::v2021_09_28':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1632804048851EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1632804048851ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1632804048851EmitPermissions',
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
					id: 'testRegisterSkillViews1632804048851ListenPermissions',
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
export default testRegisterSkillViews1632804048851EventContract

export type TestRegisterSkillViews1632804048851EventContract =
	typeof testRegisterSkillViews1632804048851EventContract

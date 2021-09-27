import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1632754292768EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1632754294613Count97/v2021_09_27/testRegisterSkillViews1632754292768EmitTargetAndPayload.schema'
import testRegisterSkillViews1632754292768ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1632754294613Count97/v2021_09_27/testRegisterSkillViews1632754292768ResponsePayload.schema'

const testRegisterSkillViews1632754292768EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1632754294613-count-97.test-register-skill-views1632754292768::v2021_09_27':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1632754292768EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1632754292768ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1632754292768EmitPermissions',
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
					id: 'testRegisterSkillViews1632754292768ListenPermissions',
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
export default testRegisterSkillViews1632754292768EventContract

export type TestRegisterSkillViews1632754292768EventContract =
	typeof testRegisterSkillViews1632754292768EventContract

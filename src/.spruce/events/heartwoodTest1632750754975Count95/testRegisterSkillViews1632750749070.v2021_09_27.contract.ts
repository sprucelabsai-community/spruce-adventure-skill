import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1632750749070EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1632750754975Count95/v2021_09_27/testRegisterSkillViews1632750749070EmitTargetAndPayload.schema'
import testRegisterSkillViews1632750749070ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1632750754975Count95/v2021_09_27/testRegisterSkillViews1632750749070ResponsePayload.schema'

const testRegisterSkillViews1632750749070EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1632750754975-count-95.test-register-skill-views1632750749070::v2021_09_27':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1632750749070EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1632750749070ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1632750749070EmitPermissions',
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
					id: 'testRegisterSkillViews1632750749070ListenPermissions',
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
export default testRegisterSkillViews1632750749070EventContract

export type TestRegisterSkillViews1632750749070EventContract =
	typeof testRegisterSkillViews1632750749070EventContract

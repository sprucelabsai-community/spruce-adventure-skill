import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633792116922EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633792121267Count24/v2021_10_09/testRegisterSkillViews1633792116922EmitTargetAndPayload.schema'
import testRegisterSkillViews1633792116922ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633792121267Count24/v2021_10_09/testRegisterSkillViews1633792116922ResponsePayload.schema'

const testRegisterSkillViews1633792116922EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633792121267-count-24.test-register-skill-views1633792116922::v2021_10_09':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633792116922EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633792116922ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633792116922EmitPermissions',
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
					id: 'testRegisterSkillViews1633792116922ListenPermissions',
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
export default testRegisterSkillViews1633792116922EventContract

export type TestRegisterSkillViews1633792116922EventContract =
	typeof testRegisterSkillViews1633792116922EventContract

import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633121152780EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633121167237Count89/v2021_10_01/testRegisterSkillViews1633121152780EmitTargetAndPayload.schema'
import testRegisterSkillViews1633121152780ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633121167237Count89/v2021_10_01/testRegisterSkillViews1633121152780ResponsePayload.schema'

const testRegisterSkillViews1633121152780EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633121167237-count-89.test-register-skill-views1633121152780::v2021_10_01':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633121152780EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633121152780ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633121152780EmitPermissions',
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
					id: 'testRegisterSkillViews1633121152780ListenPermissions',
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
export default testRegisterSkillViews1633121152780EventContract

export type TestRegisterSkillViews1633121152780EventContract =
	typeof testRegisterSkillViews1633121152780EventContract

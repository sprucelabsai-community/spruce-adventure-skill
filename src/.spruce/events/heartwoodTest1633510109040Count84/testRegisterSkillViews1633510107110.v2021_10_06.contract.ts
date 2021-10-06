import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633510107110EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633510109040Count84/v2021_10_06/testRegisterSkillViews1633510107110EmitTargetAndPayload.schema'
import testRegisterSkillViews1633510107110ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633510109040Count84/v2021_10_06/testRegisterSkillViews1633510107110ResponsePayload.schema'

const testRegisterSkillViews1633510107110EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633510109040-count-84.test-register-skill-views1633510107110::v2021_10_06':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633510107110EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633510107110ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633510107110EmitPermissions',
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
					id: 'testRegisterSkillViews1633510107110ListenPermissions',
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
export default testRegisterSkillViews1633510107110EventContract

export type TestRegisterSkillViews1633510107110EventContract =
	typeof testRegisterSkillViews1633510107110EventContract

import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633618268758EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633618271968Count81/v2021_10_07/testRegisterSkillViews1633618268758EmitTargetAndPayload.schema'
import testRegisterSkillViews1633618268758ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633618271968Count81/v2021_10_07/testRegisterSkillViews1633618268758ResponsePayload.schema'

const testRegisterSkillViews1633618268758EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633618271968-count-81.test-register-skill-views1633618268758::v2021_10_07':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633618268758EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633618268758ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633618268758EmitPermissions',
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
					id: 'testRegisterSkillViews1633618268758ListenPermissions',
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
export default testRegisterSkillViews1633618268758EventContract

export type TestRegisterSkillViews1633618268758EventContract =
	typeof testRegisterSkillViews1633618268758EventContract

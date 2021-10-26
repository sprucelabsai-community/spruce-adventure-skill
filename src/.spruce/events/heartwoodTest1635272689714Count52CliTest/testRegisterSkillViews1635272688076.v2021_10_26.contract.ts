import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1635272688076EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1635272689714Count52CliTest/v2021_10_26/testRegisterSkillViews1635272688076EmitTargetAndPayload.schema'
import testRegisterSkillViews1635272688076ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1635272689714Count52CliTest/v2021_10_26/testRegisterSkillViews1635272688076ResponsePayload.schema'

const testRegisterSkillViews1635272688076EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1635272689714-count-52-cli-test.test-register-skill-views1635272688076::v2021_10_26':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1635272688076EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1635272688076ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1635272688076EmitPermissions',
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
					id: 'testRegisterSkillViews1635272688076ListenPermissions',
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
export default testRegisterSkillViews1635272688076EventContract

export type TestRegisterSkillViews1635272688076EventContract =
	typeof testRegisterSkillViews1635272688076EventContract

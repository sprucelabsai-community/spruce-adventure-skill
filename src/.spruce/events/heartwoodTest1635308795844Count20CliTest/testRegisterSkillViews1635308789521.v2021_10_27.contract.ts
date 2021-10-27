import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1635308789521EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1635308795844Count20CliTest/v2021_10_27/testRegisterSkillViews1635308789521EmitTargetAndPayload.schema'
import testRegisterSkillViews1635308789521ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1635308795844Count20CliTest/v2021_10_27/testRegisterSkillViews1635308789521ResponsePayload.schema'

const testRegisterSkillViews1635308789521EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1635308795844-count-20-cli-test.test-register-skill-views1635308789521::v2021_10_27':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1635308789521EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1635308789521ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1635308789521EmitPermissions',
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
					id: 'testRegisterSkillViews1635308789521ListenPermissions',
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
export default testRegisterSkillViews1635308789521EventContract

export type TestRegisterSkillViews1635308789521EventContract =
	typeof testRegisterSkillViews1635308789521EventContract

import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1635299455583EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1635299457625Count72CliTest/v2021_10_27/testRegisterSkillViews1635299455583EmitTargetAndPayload.schema'
import testRegisterSkillViews1635299455583ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1635299457625Count72CliTest/v2021_10_27/testRegisterSkillViews1635299455583ResponsePayload.schema'

const testRegisterSkillViews1635299455583EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1635299457625-count-72-cli-test.test-register-skill-views1635299455583::v2021_10_27':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1635299455583EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1635299455583ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1635299455583EmitPermissions',
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
					id: 'testRegisterSkillViews1635299455583ListenPermissions',
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
export default testRegisterSkillViews1635299455583EventContract

export type TestRegisterSkillViews1635299455583EventContract =
	typeof testRegisterSkillViews1635299455583EventContract

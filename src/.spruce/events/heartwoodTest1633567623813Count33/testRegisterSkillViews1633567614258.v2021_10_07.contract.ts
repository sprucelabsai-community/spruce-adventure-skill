import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633567614258EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633567623813Count33/v2021_10_07/testRegisterSkillViews1633567614258EmitTargetAndPayload.schema'
import testRegisterSkillViews1633567614258ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633567623813Count33/v2021_10_07/testRegisterSkillViews1633567614258ResponsePayload.schema'

const testRegisterSkillViews1633567614258EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633567623813-count-33.test-register-skill-views1633567614258::v2021_10_07':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633567614258EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633567614258ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633567614258EmitPermissions',
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
					id: 'testRegisterSkillViews1633567614258ListenPermissions',
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
export default testRegisterSkillViews1633567614258EventContract

export type TestRegisterSkillViews1633567614258EventContract =
	typeof testRegisterSkillViews1633567614258EventContract

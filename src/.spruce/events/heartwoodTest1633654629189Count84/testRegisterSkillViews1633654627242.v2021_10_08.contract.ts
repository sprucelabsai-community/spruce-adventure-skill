import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633654627242EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633654629189Count84/v2021_10_08/testRegisterSkillViews1633654627242EmitTargetAndPayload.schema'
import testRegisterSkillViews1633654627242ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633654629189Count84/v2021_10_08/testRegisterSkillViews1633654627242ResponsePayload.schema'

const testRegisterSkillViews1633654627242EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633654629189-count-84.test-register-skill-views1633654627242::v2021_10_08':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633654627242EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633654627242ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633654627242EmitPermissions',
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
					id: 'testRegisterSkillViews1633654627242ListenPermissions',
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
export default testRegisterSkillViews1633654627242EventContract

export type TestRegisterSkillViews1633654627242EventContract =
	typeof testRegisterSkillViews1633654627242EventContract

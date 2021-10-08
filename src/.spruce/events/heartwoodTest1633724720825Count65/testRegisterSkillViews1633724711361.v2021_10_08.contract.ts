import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633724711361EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633724720825Count65/v2021_10_08/testRegisterSkillViews1633724711361EmitTargetAndPayload.schema'
import testRegisterSkillViews1633724711361ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633724720825Count65/v2021_10_08/testRegisterSkillViews1633724711361ResponsePayload.schema'

const testRegisterSkillViews1633724711361EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633724720825-count-65.test-register-skill-views1633724711361::v2021_10_08':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633724711361EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633724711361ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633724711361EmitPermissions',
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
					id: 'testRegisterSkillViews1633724711361ListenPermissions',
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
export default testRegisterSkillViews1633724711361EventContract

export type TestRegisterSkillViews1633724711361EventContract =
	typeof testRegisterSkillViews1633724711361EventContract

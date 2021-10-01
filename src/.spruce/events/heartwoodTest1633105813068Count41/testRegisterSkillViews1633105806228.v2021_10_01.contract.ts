import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633105806228EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633105813068Count41/v2021_10_01/testRegisterSkillViews1633105806228EmitTargetAndPayload.schema'
import testRegisterSkillViews1633105806228ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633105813068Count41/v2021_10_01/testRegisterSkillViews1633105806228ResponsePayload.schema'

const testRegisterSkillViews1633105806228EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633105813068-count-41.test-register-skill-views1633105806228::v2021_10_01':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633105806228EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633105806228ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633105806228EmitPermissions',
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
					id: 'testRegisterSkillViews1633105806228ListenPermissions',
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
export default testRegisterSkillViews1633105806228EventContract

export type TestRegisterSkillViews1633105806228EventContract =
	typeof testRegisterSkillViews1633105806228EventContract

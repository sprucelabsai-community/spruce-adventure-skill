import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633078211267EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633078219097Count60/v2021_10_01/testRegisterSkillViews1633078211267EmitTargetAndPayload.schema'
import testRegisterSkillViews1633078211267ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633078219097Count60/v2021_10_01/testRegisterSkillViews1633078211267ResponsePayload.schema'

const testRegisterSkillViews1633078211267EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633078219097-count-60.test-register-skill-views1633078211267::v2021_10_01':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633078211267EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633078211267ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633078211267EmitPermissions',
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
					id: 'testRegisterSkillViews1633078211267ListenPermissions',
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
export default testRegisterSkillViews1633078211267EventContract

export type TestRegisterSkillViews1633078211267EventContract =
	typeof testRegisterSkillViews1633078211267EventContract

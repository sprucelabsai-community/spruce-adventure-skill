import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633034992322EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633034998722Count43/v2021_09_30/testRegisterSkillViews1633034992322EmitTargetAndPayload.schema'
import testRegisterSkillViews1633034992322ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633034998722Count43/v2021_09_30/testRegisterSkillViews1633034992322ResponsePayload.schema'

const testRegisterSkillViews1633034992322EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633034998722-count-43.test-register-skill-views1633034992322::v2021_09_30':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633034992322EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633034992322ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633034992322EmitPermissions',
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
					id: 'testRegisterSkillViews1633034992322ListenPermissions',
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
export default testRegisterSkillViews1633034992322EventContract

export type TestRegisterSkillViews1633034992322EventContract =
	typeof testRegisterSkillViews1633034992322EventContract
